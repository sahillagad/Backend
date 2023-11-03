import  express,{ Application, Request, Response, request } from "express";
import { json } from "stream/consumers";


const app:Application=express();


const hostName:string="192.168.97.201"; // Host Name  here You Can Also Write Ip Address
const port:number=9999; // Port Number 

// Generally WE Not Menstion Whichever Server We Hposted That  Host Name And Port Number Come 




app.use(express.json());


// Request Clint TO SErver 
// Response is Server To Client
// HTTP response status codes indicate whether a specific HTTP request has been successfully completed


app.get("/",(request:Request,response:Response)=>{
    return response.status(200).json({
        "message":"Hello World",
        data:{
            "name":"Sahil Lagad",
            "Address":"A-301 Tirth Vrindavan" 
        }
    })
})


app.get("/users",(request:Request,response:Response)=>{
    return response.status(200).json({
        data:[{
            "name":"Sahil Lagad",
            "Address":"A-301 Tirth Vrindavan" 
        },{
            "name":"Sahil Lagad",
            "Address":"A-301 Tirth Vrindavan" 
        }
     ]
    })
})

// Application Start Here 
// Listen Function Inside That  Start up Logic

app.listen(port,hostName,()=>{
    console.log(`http://${hostName}:${port}`)
})