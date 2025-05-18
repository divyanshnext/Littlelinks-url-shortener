import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
dotenv.config({ path: "./.env" });
import connectDB from "./src/config/mongo.config.js";
import urlSchema from "./src/models/short_url.model.js";
import short_url from "./src/routes/short_url.route.js";
import { redirectFromShortUrl } from "./src/controllers/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";


const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use("/api/create",short_url)
app.get("/:id", redirectFromShortUrl);

app.use(errorHandler);

connectDB().then(() => {
    app.listen(3000, () => {
        console.log("Server is running on port 3000");
    });
}).catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
});

//GET
