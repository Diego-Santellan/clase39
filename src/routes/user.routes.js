const express = require("express");
const {userManager} = require("../model/index")
const router = express.Router();

router.post("/users", async (req, res) =>  {
    try {
        const user = req.body;
        const userCreated = await userManager.createUser(user);
        res.redirect("/");
        
    } catch (error) {
        console.log(error.message);
        res.send("Hubo un error al crear el usuario")
    }
})

module.exports = {userRouter:router}