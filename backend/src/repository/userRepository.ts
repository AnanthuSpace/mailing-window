import { Model } from "mongoose";
import { UserRepositoryInterface } from "../interface/userRepository.interface";
import { IEmail, IUser, User } from "../types/types";

export class UserRepository implements UserRepositoryInterface {
    constructor(private userModel: Model<IUser>, mailModal: Model<IEmail>) { }

    async getUserByEmail(email: string): Promise<any> {
        return await this.userModel.findOne({ email });
    }
    async createUser(userData: any) {
        try {    
            const user = await this.userModel.create({  
                userId: userData.userId,
                name: userData.name,
                email: userData.email,
                password: userData.password,
                createdAt: new Date(),
            });
    
            return user.toObject(); 
        } catch (error: any) {
            console.error("Mongoose Save Error:", error);
            throw new Error("Error saving user to the database: " + error.message);
        }
    }
    
    
}