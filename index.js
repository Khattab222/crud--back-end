
import express from "express"
import cors from 'cors'
import { connectionDb } from "./db/models/connection.js";
import * as allRoutes from './modules/index.routes.js'
const app = express();
app.use(cors())
app.use(express.json())
const port = 3000 ;
const baseurl = `/api/v1`
connectionDb()
app.use(`${baseurl}/user`,allRoutes.UserRouter)
app.use(`${baseurl}/product`,allRoutes.ProductRouter)





app.listen(port,() => {
  console.log('server is runnug ...........')
}
)

