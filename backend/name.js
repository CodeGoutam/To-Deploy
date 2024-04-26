const express = require('express')
const route = express.Router()

const nameSchema = require('./NameSchema')

route.post("/name", async (req, res) => {
    console.log("api");
    await nameSchema.create({ name: req.body.name })
    .then((result) => {
        res.send({ success: true })
    }).catch((err) => {
        res.send({ success: false })
    });

})
module.exports = route;