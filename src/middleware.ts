import jwt from "jsonwebtoken";

const SECRET_KEY = "your-secret-key";

export const verifyToken = (event: any) => {
  const token = event.headers.Authorization || event.headers.authorization;

  if (!token) {
    throw new Error("No token provided");
  }

  try {
    const decoded = jwt.verify(token, SECRET_KEY);
    return decoded;
  } catch (err) {
    throw new Error("Invalid token");
  }
};
