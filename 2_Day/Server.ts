import  express,{ Application, Request, Response, request } from "express";
import userRouter from "./router/userRouter";
import adminRouter from "./router/adminRouter";
import ProductRouter from "./router/productRouter";
import albumRoute from "./routers/albumRoute";
import CommentRoute from "./routers/commentRoute";

const app:Application=express();

const hostName:string="192.168.97.201";
const port:number=9999;


// Configure express to read the form data 
app.use(express.json());

app.get("/",(request:Request,response:Response)=>{
      return response.status(200).json({
          message:"Good Morning"
      })
})




// Configure the Routers
// app.use("/user",userRouter)
// app.use("/admin",adminRouter)
// app.use("/product",ProductRouter)


app.use("/albums",albumRoute);
app.use("/Comments",CommentRoute);


app.listen(port,hostName,()=>{
     console.log(`http://${hostName}:${port}`);
     
})