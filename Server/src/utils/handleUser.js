require('dotenv').config();

const UserModel = require('../models/user');
const { genSalt, hash } = require('bcrypt');
const { v5 } = require('uuid');

const users = new Map();

const create = async (firstname, lastname, username, email, password) => {
    const UUID = v5(`${username}-${password}`, process.env.DOMAIN_UUID);

    if (users.get(UUID)) {
        return false;
    }

    const salt = await genSalt(Number(process.env.SALT_ROUNDS));
    const hashed = await hash(password, salt);

    const data = {
        money: 0,
    }

    const NewUser = new UserModel(UUID, firstname, lastname, username, email, hashed, data);

    users.set(UUID, NewUser)

    return NewUser;
}

create("Isaac", "Wallace", "username", "goosewal@gmail.com", "password");

const get = async (username, password) => {
    const UUID = await v5(`${username}-${password}`, process.env.DOMAIN_UUID)

    return users.get(UUID) || false;
}

const remove = async () => {

}

const modify = async () => {

}

module.exports = {
    create,
    get,
    remove,
    modify
};