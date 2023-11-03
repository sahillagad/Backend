import express,{ Application, Request, Response, request } from 'express';
import UserRouter from './Router/UserRouter';
import dotenv from 'dotenv'
import { Server } from 'http';
const app:Application=express();



app.use(express.json());
app.get("/",async(request:Request,response:Response)=>{
    return response.status(200).json({
         message:"Server is Start"
    })
})
dotenv.config({path:"./.env"})

const host:string|undefined|null=process.env.EXPRESS_SERVER_HOST;
const port:string|undefined|null=process.env.EXPRESS_SERVER_PORT ;


app.use("/user",UserRouter);



if(host && port){
  app.listen(Number(port),host,()=>{
    console.log("http://192.168.97.201:9999");
  })

}
else{
  
  console.log("Server Is Close");  
  
}
