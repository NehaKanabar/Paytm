// backend/index.js
const express = require('express');
const cors = require("cors");

const rootRouter = require("./routes/index");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {

    res.json({
        message: "Welcome to the DB!",
   });
})


app.use("/api/v1", rootRouter);

app.listen(4000);