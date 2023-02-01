const express = require("express");
const connection = require("./Connection/db");
const bodyParser = require("body-parser")
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();
const homerouter=require("./Routes/user")
const app = express();

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api",homerouter);

const PORT = process.env.PORT || 8080;

app.listen(PORT, async () => {
  try {
    await connection, console.log("connected to database");
  } catch {
    console.log("something went wrong.");
  }
  console.log(`Server started on port http://localhost/${PORT}`);
});