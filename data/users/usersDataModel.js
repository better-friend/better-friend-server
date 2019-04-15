const db = require("../dbConfig.js");
const bcrypt = requre("bcryptjs");

module.exports = {
    register,
    login
}

function register(userData) {
    return db("users").insert(userData);
}

function login(username, password) {
    return db("users").where({"username": username, "password": password});
}