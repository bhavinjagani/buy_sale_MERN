import jwt from 'jsonwebtoken';
import { config } from 'dotenv';
config();

const SECRET = "mernproject" //process.env.mernproject; // move to .env later
console.log("this is SECRET",SECRET)
 const signToken = (user) => 
    jwt.sign({user_id :user.user_id , username : user.username}, SECRET ,{expiresIn:'7D'});

 const verifyToken = (token) =>
    jwt.verifyToken(token,SECRET);

export { signToken ,verifyToken}