import express from "express";
import morgan from "morgan";
import cors from "cors";

import productRouter from "./routes/product.routes.js";
import { errorHandler } from "./middleware/errorHandler.js";

const app = express();

app.use(helmet()); // is a middleware configuration used to secure Express applications by automatically setting appropriate HTTP response headers

app.use(cors());

app.use(morgan("dev")); // automatically log concise, color-coded details of every incoming HTTP request to the terminal console

app.use(express.json());

app.use("/product", productRouter);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.use(errorHandler);

export default app;
