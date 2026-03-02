import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
const app = express();

// app.use is used when we use middleware or configuration settings
app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);
// earlier we use body parse to gert json elements now we dont need it
// multer for file uploading
app.use(express.json({ limit: "16kb" }));
// extended for nested objects
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
// for public assets
app.use(express.static("public"));
app.use(cookieParser());
// checks before responding on urls are middleware

export default app;
