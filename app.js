const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const { myDataSource } = require("./src/models/dataSource");
const router = require("./src/routes")

const app = express();
app.use(express.json());
app.use(cors());
app.use(router);

app.get("/ping", async (req, res) => {
  try {
    res.status(200).json({
      message: "pong",
    });
  } catch (error) {
    console.error(error)
  }
});

const start = async() => {
    try {
        await myDataSource.initialize().then(() => 
        console.log("Data Source has been initialized!"));

        const port = process.env.SERVER_PORT
        app.listen(port, () => console.log(`server is listening in PORT ?`, [port]))
    } catch (error) {
        console.log(error)
    }
};

start();