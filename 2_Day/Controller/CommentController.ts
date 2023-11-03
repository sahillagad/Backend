import { Request, Response, Router, request } from "express";
import path from "path";
import jsonfile from "jsonfile";
import { error } from "console";

export const getAllComment=async (request:Request,response:Response)=>{
     try {

        let filePath=path.join(__dirname,"..","Database","Comments.json");
           jsonfile.readFile(filePath,(error:any,data:any)=>{
             if(error){
             return response.status(502).json(error)
             }
             else if(data){
                 return response.status(200).json({
                    dataInfo:data
                 })
             }
           })

        
     } catch (error:any) {
         return response.status(502).json({
            message:error.message
         })
     }
}