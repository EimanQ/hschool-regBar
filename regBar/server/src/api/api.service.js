const {createUserDB, gotAllUsersDB} = require("./api.repository");

const gotAllUsers = async () => {
    const getAllUsersDB = await gotAllUsersDB();
    return getAllUsersDB
}

const createUser = async (name, email, password) => {
    const createdUserDB = await createUserDB(name, email, password);
    return createdUserDB
};


module.exports = {
    createUser, gotAllUsers
}