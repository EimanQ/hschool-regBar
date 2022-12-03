const {
    pool
} = require("../db");


const gotAllUsersDB = async () => {
    const client = await pool.connect();
    try {

        const sqlTakeAllUsers = `
        SELECT name, email FROM users
        `

        const result = (await client.query(sqlTakeAllUsers)).rows

        return result;
    } catch (error) {
        console.log(error.message);
    }
}

const createUserDB = async (name, email, password) => {
    const client = await pool.connect();
    try {
        await client.query(`BEGIN`)

        const sqlInsItmIntoTable = `
        INSERT INTO users (name, email, pass) 
        VALUES ($1, $2, $3)
        RETURNING users.*
    `;
        const result = (await client.query(sqlInsItmIntoTable, [name, email, password])).rows[0]

        await client.query(`COMMIT`)

        return result;
    } catch (error) {
        await client.query(`ROLLBACK`);
        console.log(error.message);
    }
}

module.exports = {
    createUserDB, gotAllUsersDB
};