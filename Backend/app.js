require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 6005; // Define PORT once

require("./db/conn");

app.use(cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true
}));

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json("server start");
});

app.listen(PORT, () => {
    console.log(`Server started at port no ${PORT}`);
});
