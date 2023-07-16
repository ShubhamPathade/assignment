import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./connection.js";

import path from "path"

import { fileURLToPath } from "url";


if (process.env.NODE_ENV !== "PRODUCTION") {
  dotenv.config({ path: "Server/.env" });
}

import userRouter from "./routes/userRoutes.js";
import cookieParser from "cookie-parser";

connectDB();

const app = express();


app.use(express.json());



app.use(cookieParser())

app.listen(8000, "localhost", () => {
  console.log("Server is running");
});

app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.use("/api/v1", userRouter);



// Get the directory name using import.meta.url
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Access Front End Static Files
app.use(express.static(path.join(__dirname, "../elansol-technologies/build")));

// Access Front End All URLs
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../elansol-technologies/build/index.html"));
});

//Access Front End Static Files
app.use(express.static(path.join(__dirname, "../elansol-technologies/build")));

//Access Front End All URL
app.get("/*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../elansol-technologies/build/index.html"));
});