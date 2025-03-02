import { User } from "../types/types";

export interface UserServiceInterface {
    userRegistration(userData: User): Promise<string | any>
    verifyOtpService(email: String, otp: String): Promise<any>
    googleSignup(token: String): Promise<any>
    login(email: String, password: String): Promise<any>
    googleSignin(token: String): Promise<any>
}