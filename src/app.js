import express from 'express';
import morgan from "morgan";
import cors from "cors";

import productRouter from "./routes/product.routes.js"


const app = express();

app.use(helmet());

app.use(cors());

app.use(morgan("dev"));

app.use(express.json());



app.use("/product", productRouter)


app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: "Route not found",
    });
});


app.use((err, req, res, next) => {
    res.status(500).json({
        success: false,
        message: err.message,
    });
});


export default app;

