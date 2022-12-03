const express = require("express");
const {createUser, gotAllUsers} = require("./api.service")
const router = express.Router();

router.get("/", async (request, response) => {
    const getAllUsers = await gotAllUsers();
    response.status(200).send(getAllUsers)
})


router.post("/register", async (request, response) => {
    try {
        const {name, email, password} = request.body;
        const createdUser = await createUser(name, email, password);
        response.status(200).send(createdUser)
    } catch (error) {
        
    }
})

module.exports = router;