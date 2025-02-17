import express from 'express';
import cors from 'cors'
import productRouter from './router/productRouter.js'
import wishRouter from './router/wishRouter.js'
import  {configDotenv} from 'dotenv'
import { connectDB } from './config/config.js';
configDotenv()

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors('*'))
connectDB()

app.use('/wishlist',wishRouter)
app.use('/product', productRouter)
app.listen(5500, () => {
    console.log("backend running");
})