import { Request, Response, Router } from "express";



const adminRouter:Router=Router();

adminRouter.get("/",(request:Request,response:Response)=>{
    return response.status(200).json({
        message:"I am From Admin Router"
    })
})



export default adminRouter;
