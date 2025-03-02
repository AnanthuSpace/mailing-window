import { UserServiceInterface } from "../interface/userService.interface";
import { UserRepositoryInterface } from "../interface/userRepository.interface";
import { User } from "../types/types";
import { BadRequestError } from "../erros/badRequestError";
import { createOTP } from "../utils/generateOtp";
import { hashPassword } from "../utils/bcrypt";
import { sendMail } from "../utils/nodeMailer";
import { v4 } from "uuid";
import { generateAccessToken, generateRefreshToken } from "../config/jwtConfig";
import { verifyGoogleToken } from "../utils/googleAuth";
import bcrypt from "bcrypt";

export class UserService implements UserServiceInterface {
  constructor(private userRepository: UserRepositoryInterface) { }

  private otpStore: { [key: string]: { otp: string; timestamp: number; userData: User } } = {};

  storeOtp(email: string, otp: string, userData: User) {
    const timestamp = Date.now();
    this.otpStore[email] = { otp, timestamp, userData };
    console.log("Stored OTP data: ", this.otpStore);
  }


  async userRegistration(userData: User): Promise<any> {
    try {
      const existedUser = await this.userRepository.getUserByEmail(userData.email);
      if (existedUser) {
        throw new BadRequestError("User with this email already exists.");
      }

      const otp = createOTP();
      const isMailSended = await sendMail(userData.email, otp);

      if (isMailSended) {
        this.storeOtp(userData.email, otp, userData);
        return otp;
      } else {
        return "OTP not sent";
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  async verifyOtpService(email: string, otp: string): Promise<any> {
    try {
      const storedData = this.otpStore[email];

      if (storedData.otp !== otp) {
        throw new Error("Invalid OTP");
      }

      const userData = storedData.userData;
      userData.password = await hashPassword(userData.password ?? "");

      userData.userId = v4();

      console.log(userData)
      const createdUser = await this.userRepository.createUser({
        name: userData.name,
        email: userData.email,
        password: userData.password,
        userId: userData.userId,
      });

      const accessToken = generateAccessToken(createdUser.userId);
      const refreshToken = generateRefreshToken(createdUser.userId);

      const { password, ...userDataWithoutSensitiveInfo } = createdUser;

      delete this.otpStore[email];

      return {
        message: "OTP verified successfully",
        accessToken,
        refreshToken,
        userData: userDataWithoutSensitiveInfo,
      };
    } catch (error: any) {
      throw new Error(error.message || "OTP verification failed");
    }
  }

  async googleSignup(token: string): Promise<any> {
    try {
      const userInfo = await verifyGoogleToken(token);

      if (userInfo?.email_verified === true) {
        const name = userInfo.name as string;
        const email = userInfo.email as string;
        const existedEmail = await this.userRepository.getUserByEmail(email);

        if (existedEmail) {
          throw new BadRequestError("User with this email already exists.");
        }

        let userId = v4();

        const createdUser = await this.userRepository.createUser({
          name,
          email,
          userId,
        });

        const accessToken = generateAccessToken(createdUser.userId);
        const refreshToken = generateRefreshToken(createdUser.userId);

        return {
          message: "Google signup successful",
          accessToken,
          refreshToken,
          userData: createdUser,
        };
      } else {
        throw new Error("Google email verification failed.");
      }
    } catch (error: any) {
      throw new Error(error.message || "Google signup failed");
    }
  }

  async login(email: string, password: string): Promise<any> {
    try {
      const existedEmail = await this.userRepository.getUserByEmail(email);

      if (!existedEmail) {
        throw new BadRequestError("Invalid email or user not found");
      }

      const bcryptPass = await bcrypt.compare(password, existedEmail.password);
      if (!bcryptPass) {
        throw new Error("Invalid password");
      }

      const accessToken = generateAccessToken(existedEmail.userId);
      const refreshToken = generateRefreshToken(existedEmail.userId);

      return { accessToken, refreshToken, userData: existedEmail };

    } catch (error: any) {
      throw new Error(error.message || "Google signup failed");
    }
  }

  async googleSignin(token: string): Promise<any> {
    try {
      const userInfo = await verifyGoogleToken(token)
      if (userInfo?.email_verified === true) {
        const email = userInfo.email as string
        const existedEmail = await this.userRepository.getUserByEmail(email);
        if (!existedEmail) {
          throw new Error("Invalid email or user not found")
        } else {

          const accessToken = generateAccessToken(existedEmail.userId);
          const refreshToken = generateRefreshToken(existedEmail.userId);
          return { message: "Login successfully", accessToken, refreshToken, userData: existedEmail };
        }
      }
    } catch (error: any) {
      throw new Error(error.message || "Google signup failed");
    }
  }

}