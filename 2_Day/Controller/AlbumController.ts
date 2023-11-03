import { error } from "console";
import { Request, Response, request } from "express";
import jsonfile from "jsonfile";
import path from "path";
import { IAlbum } from "../models/IAlbum";

export const getAllAlbum=async (request:Request,response:Response)=>{
     try {
      

        // _dirname it will give corrent directory path after that we go back in database folder in that albums.json
        const filePath=path.join(__dirname,"..","database","albums.json");
        jsonfile.readFile(filePath, function (err:any, obj:any) {
          if (err) {
             return response.status(502).json({
                 message:err
             })
          }
          else if(obj){
          
            
        return response.status(200).json({
            count:obj.length,
            data:obj //Global Veriable  we not diclare it global veriable 
            
        })

          }
        })              

    } catch (error:any) {
           return response.status(502).json({
             message:error.message
           })
         
     }
}

export const getAlbumById=async(request:Request,response:Response)=>{
     try {

        let filePath=path.join(__dirname,"..","Database","albums.json");
        jsonfile.readFile(filePath,(error:any,data:any)=>{
            if(error){
             return response.status(502).json(error);
            }
            else if(data){
                let id=request.params.albumId;
             let arr:IAlbum[]=[];
                for(var obj of data){
                    if(obj.userId == id){
                        arr.push(obj);
                    }                    
                 }
                 return response.status(200).json({dataInfo:arr})
            }
        })

        
     } catch (error:any) {
         return response.status(502).json({
            message:error.message
         })
     }
}