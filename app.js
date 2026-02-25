require('dotenv').config();
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("hello i am Danial khan");
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
})