import { Request, Response, request } from "express";
import { validationResult } from "express-validator";



export const CreateUser=async(request:Request,response:Response)=>{
     try {
        var error=validationResult(request);
        if(!error.isEmpty()){
           return response.status(502).json({message:error.array()})
        }

        let UserObj=request.body;
        


     } catch (error:any) {
         return response.status(502).json({
             message:error.message 
         })
     }
}