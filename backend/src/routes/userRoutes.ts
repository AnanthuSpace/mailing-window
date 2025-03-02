import { Router } from "express";
import { UserRepository } from "../repository/userRepository";
import userModel from "../models/userModel";
import mailModal from "../models/mailModel";
import { UserService } from "../services/userService";
import { UserController } from "../controllers/userController";

const userRoute = Router()
const userRepository = new UserRepository(userModel, mailModal)
const userService = new UserService(userRepository)
const userController = new UserController(userService)

userRoute.post("/auth", userController.registration);
userRoute.post("/verify-otp", userController.verifyOtp);
userRoute.post("/google-signup", userController.googleSignup);
userRoute.post("/login", userController.login);
userRoute.post("/google-signin", userController.googleSignin);

export { userRoute }    