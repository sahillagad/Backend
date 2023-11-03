import { Request, Response, Router, request } from "express";


const userRouter:Router=Router();


userRouter.get("/",(request:Request,response:Response)=>{
    return response.status(200).json({
        message:"I am From User Router"
    })
})


userRouter.post("/",(request:Request,response:Response)=>{
    let data=request.body;
    let header=request.headers;
    return response.status(200).json({
       dataInfo:data,
    })  
})

export default userRouter;