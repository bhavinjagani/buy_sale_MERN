import { loginValidate, addUser } from "../models/userModel.js";

// login
const login = async (req, res) => {
   
    let userName = req.body.username;
    let password = req.body.password;
    let userObject = await loginValidate(userName, password).then((results) => {
        return results;
    });

    //user exists or not
    if (userObject.length == 0) {
        res.status(403);
        res.send("Invalid Username or Password");
    }
    else {
        let user = userObject[0]
        res.send({
            "user_id": user.opid,
            "username": user.username,
            "status": user.status,
            "email": user.custemail
        });
    }
}

// register
const register = async (req, res) => {
    let userName = req.body.username;
    let password = req.body.password;
    let name = req.body.name;
    let newUser = await addUser(userName, name, password);

    // user exist or not
    if (newUser == false) {
        res.status(409);
        res.send("Already Registered With This Email OR Phone.");
    }
    else {
        res.status(200);
        res.send("Registration Successful");
    }
}

export { login, register }