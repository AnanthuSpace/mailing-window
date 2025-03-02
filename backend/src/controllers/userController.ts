import { NextFunction, Request, Response } from "express";
import { UserServiceInterface } from "../interface/userService.interface"

export class UserController {
    constructor(private userService: UserServiceInterface) { }


    registration = async (req: Request, res: Response, next: NextFunction) => {
        try {
            await this.userService.userRegistration(req.body);
            res.status(200).json({ success: true, message: "OTP sent to your email", validity: 120 });
        } catch (error) {
            console.error(error);
            next(error)
        }
    }

    verifyOtp = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const email = req.body.email as string
            const otp = req.body.otp as string
            const response = await this.userService.verifyOtpService(email, otp)
            res.status(200).json({ success: true, response })
        } catch (error) {
            console.error(error);
            next(error)
        }
    }

    googleSignup = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.userService.googleSignup(req.body.token)
            res.status(200).json({ success: true, response })
        } catch (error) {
            console.error(error);
            next(error)
        }
    }
    login = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const { email, password } = req.body
            const response = await this.userService.login(email, password)
            res.status(200).json({ success: true, response })
        } catch (error) {
            console.error(error);
            next(error)
        }
    }

    googleSignin = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const response = await this.userService.googleSignin(req.body.token)
            res.status(200).json({ success: true, response })
        } catch (error) {
            console.error(error);
            next(error)
        }
    }
}