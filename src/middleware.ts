import jwt from "jsonwebtoken";
import dotenv from 'dotenv';
dotenv.config();

if (
    !process.env.SECRET_KEY
)
    throw new Error('Required environment variables is missing');

const SECRET_KEY = process.env.SECRET_KEY;

export const verifyToken = async (event: any) => {
    const token = event.headers.Authorization || event.headers.authorization;
  
    if (!token) {
      throw new Error("No token provided");
    }
    try {
      const decoded = await jwt.verify(token.replace('Bearer ', ''), SECRET_KEY);
      return decoded;
    } catch (err) {
      throw new Error("Invalid token");
    }
  };