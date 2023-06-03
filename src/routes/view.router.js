const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
    try {
        res.render("home");
    } catch (error) {
        console.log(error);
    }
})

module.exports = {viewRouter:router};