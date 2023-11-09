import cors from "cors";
import express from "express";

import cookieParser from "cookie-parser";
import router from "./src/app/routes/index.js";

const app = express();

app.use(cors());
app.use(cookieParser());

//parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", router);

app.get("/", (req, res) =>{
    res.send("Hello World!");
})


export default app;
