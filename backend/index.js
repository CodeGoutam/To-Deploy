const express = require('express')
const mongoose = require('mongoose')
const route = express();
// const cors = require('cors');
// route.use(cors())
route.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
});
route.use(express.json());
express.urlencoded({ extended: true });
mongoose.connect("mongodb+srv://hgoutam2001:deploy@cluster0.dvwuj0d.mongodb.net/", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log("db connected");
})
route.use("/api", require('./name.js'))
route.listen(5000, () => {
    console.log("port connected")
});