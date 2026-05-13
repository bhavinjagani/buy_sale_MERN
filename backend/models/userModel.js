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

const getUserById = (userId) => {
    return new Promise((resolve, reject) => {
        connection.query(`SELECT * FROM users WHERE user_id = ?`, [userId], (err, results) => {
            if (err) return reject(err);
            return resolve(results);
        });
    });
};

const updateUserProfile = (userId, data) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `UPDATE users SET custname=?, custphone=?, custaddress=?, aboutme=?, weblink=?, fblink=?, instalink=?, googlelink=?, twitterlink=?, youtubelink=? WHERE user_id=?`,
            [data.custname, data.custphone, data.custaddress, data.aboutme, data.weblink, data.fblink, data.instalink, data.googlelink, data.twitterlink, data.youtubelink, userId],
            (err, result) => {
                if (err) return reject(err);
                return resolve(result);
            }
        );
    });
};

const changeUserPassword = (userId, currentPassword, newPassword) => {
    return new Promise((resolve, reject) => {
        connection.query(
            `SELECT user_id FROM users WHERE user_id=? AND password=?`,
            [userId, currentPassword],
            (err, results) => {
                if (err) return reject(err);
                if (results.length === 0) return resolve({ success: false, message: 'Current password is incorrect' });
                connection.query(`UPDATE users SET password=? WHERE user_id=?`, [newPassword, userId], (err2) => {
                    if (err2) return reject(err2);
                    return resolve({ success: true, message: 'Password changed successfully' });
                });
            }
        );
    });
};

export { getUser, loginValidate, addUser, getUserById, updateUserProfile, changeUserPassword };

