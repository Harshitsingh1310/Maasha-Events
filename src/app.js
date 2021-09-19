const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3500;
require("./db/conn");
const Detail = require("./models/form");


const staticPath = path.join(__dirname, "../public");
app.use(express.static(staticPath));

// Data parsing
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send();
});

app.post("/", async (req, res) => {
    try {

    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`Server is listening the port at ${port}`);
});