import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const SECRET = "mernproject" //process.env.mernproject; // move to .env later
 const signToken = (user) => 
    jwt.sign({opid :user.opid , username : user.username}, SECRET ,{expiresIn:'7D'});

const verifyToken = (token) =>
    jwt.verify(token, SECRET);

export { signToken ,verifyToken}