import jwt, { SignOptions } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import dotenv from "dotenv";

dotenv.config();

const accessTokenSecret = process.env.ACCESS_TOKEN_SECRET || "default_access_secret";
const refreshTokenSecret = process.env.REFRESH_TOKEN_SECRET || "default_refresh_secret";
const accessTokenExpire: string | number = process.env.ACCESS_TOKEN_EXPIRATION || "1h";
const refreshTokenExpire: string | number = process.env.REFRESH_TOKEN_EXPIRATION || "7d";

interface JwtPayload {
    userId: string;
    email?: string;
}

interface CustomRequest extends Request {
    id?: string;
    email?: string;
}

export const generateAccessToken = (userId: string): string => {
    return jwt.sign({ userId }, accessTokenSecret, { expiresIn: accessTokenExpire as SignOptions["expiresIn"] });
};

export const generateRefreshToken = (userId: string): string => {
    return jwt.sign({ userId }, refreshTokenSecret, { expiresIn: refreshTokenExpire as SignOptions["expiresIn"] });
};

export const verifyToken = async (req: CustomRequest, res: Response, next: NextFunction) => {
    try {
        const authorizationHeader = req.headers.authorization;
        const refreshToken = req.headers["x-refresh-token"] as string;

        if (!authorizationHeader) {
            return res.status(401).json({ message: "Access denied. No token provided." });
        }

        const accessToken = authorizationHeader.split(" ")[1];
        if (!accessToken) {
            return res.status(401).json({ message: "Access denied. Access token not valid." });
        }

        jwt.verify(accessToken, accessTokenSecret, (err, decoded) => {
            if (err) {
                if (err.name === "TokenExpiredError" && refreshToken) {
                    jwt.verify(refreshToken, refreshTokenSecret, (refreshErr, refreshDecoded) => {
                        if (refreshErr) {
                            return res.status(401).json({ message: "Access denied. Refresh token invalid or expired." });
                        }
                        const userId = (refreshDecoded as JwtPayload).userId;
                        const newAccessToken = generateAccessToken(userId);
                        res.setHeader("Authorization", `Bearer ${newAccessToken}`);
                        req.id = userId;
                        next();
                    });
                } else {
                    return res.status(401).json({ message: "Access denied. Access token not valid." });
                }
            } else {
                req.id = (decoded as JwtPayload).userId;
                next();
            }
        });
    } catch (error) {
        res.status(500).json({ message: "Internal server error." });
    }
};
