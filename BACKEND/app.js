import express from "express";
import {nanoid} from "nanoid";
import dotenv from "dotenv";
import connectDB from "./src/config/mongo.config.js";
import short_url from "./src/routes/short_url.route.js";
import { redirectFromShortUrl } from "./src/controllers/short_url.controller.js";
import { errorHandler } from "./src/utils/errorHandler.js";
import cors from "cors"; // cors is a middleware that allows cross-origin requests means it connects the frontend and backend

dotenv.config({ path: "./.env" });

const app = express();

app.use(cors()) // hmne kuch set nhi kiya hai, toh ye default settings ke sath chalega
// it is good for development but in production we should set the origin


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
