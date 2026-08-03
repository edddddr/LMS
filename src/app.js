import express from 'express';
import logger from "./middleware/logger.js"
import productRouter from "./routes/product.routes.js"

const app = express();

app.use(logger)
app.use("/product", productRouter)


// function home(req, res){
//     res.send('Hello World!');
// }

// app.get('/', home);




export default app;

