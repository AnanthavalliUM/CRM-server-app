import express, { response } from "express";
import { MongoClient } from "mongodb";
import * as dotenv from 'dotenv';
import { usersRouter } from "./routes/crmusers.js";
dotenv.config();


const app = express()
const PORT = process.env.PORT;


const MONGO_URL = process.env.MONGO_URL;
async function createConnection() 
{
  const client = new MongoClient(MONGO_URL); 
  client.connect();
  console.log("Mongo is connected ✨🎊😎");
  return client;
}
  export const client = await createConnection();
   
  app.use(express.json());


app.get('/', function (req, res) {
  res.send('Hello World 😊😜')
}) 





app.use("/crmusers", usersRouter);




app.listen(PORT, () => console.log(`The server started in: ${PORT}`));

