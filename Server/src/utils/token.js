require('dotenv').config();

const { compare } = require('bcrypt');
const { sign } = require('jsonwebtoken');
const { get } = require('./handleUser');

const generate = async(username, password) => {
    if (!username || !password) return {
        code: 401
    };

    const User = await get(username, password);

    if (!User) return {
        code: 401
    }

    const correctPassword = await compare(password, User.password);

    if (!correctPassword) return {
        code: 401
    };

    const UserObject = {...User}

    delete UserObject.password;

    const token = sign(UserObject, process.env.SECRET, { expiresIn: '1h' });

    return {
        code: 200,
        token: token
    };
}


module.exports = {
    generate
}