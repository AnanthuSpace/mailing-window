import { User } from "../types/types";

export interface UserRepositoryInterface {
    getUserByEmail(email: string): Promise<any>
    createUser(userData: User): Promise<any>;

}