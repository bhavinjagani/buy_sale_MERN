import { connection } from '../database.js'

// fetch user data with username from db
const getUser = (username) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users where username='${username}'`, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};

// validate username and password within DB
const loginValidate = (username, password) => {
    let sqlQuery = `select * from users where username = '${username}' AND password = '${password}'`;
    return new Promise((resolve, reject) => {
        connection.query(sqlQuery, (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
}

// add user to the database
const addUser = async (username, name, password) => {
    let is_exists;
    let userInDb = await getUser(username);
    if (userInDb.length == 0) { //if user exists in db or not
        is_exists = false;
    }
    else {
        is_exists = true;
    }

    // if user doesn't exist
    if (is_exists == false) {
        let sqlQuery = `insert into users set custname = '${name}',username = '${username}',password = '${password}'`;
        let isInsert = await new Promise((resolve, reject) => {
            connection.query(sqlQuery, (err, results) => {
                if (err) return reject(err);
                return resolve(results);
            });
        });
        console.log("isinsert", isInsert);
        return true;
    }
    else {
        return false;
    }

}

export { getUser, loginValidate, addUser };

