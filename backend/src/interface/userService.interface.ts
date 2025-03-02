import { UserRegistrationData } from "../types/types";

export interface UserServiceInterface {
    userRegistration(userData: UserRegistrationData): Promise<string | any>
    verifyOtpService(email: String, otp: String): Promise<any>
}