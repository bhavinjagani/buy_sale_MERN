import { verifyToken } from '../utils/jwt.js';

export const getUser = (req) => {
    const authHeader = req.headers.authorization || '';
    const token = authHeader.replace('Bearer ', '');
    if (!token) return null;
    try {
        return verifyToken(token);   // returns { user_id, username }
    } catch {
        return null;
    }
};
