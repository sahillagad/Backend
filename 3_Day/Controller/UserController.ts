import { error } from "console";
import { Request, Response } from "express";
import { check, validationResult } from "express-validator";
import bcrypt from "bcryptjs"
import { json } from "stream/consumers";

let user={};


export const CreateUser=async(request:Request,response:Response)=>{
   try {
     let error=validationResult(request);
     if(!error.isEmpty()){
         return response.status(404).json({message:error.array()});
     }
    

    let data= request.body;
   
    var salt=bcrypt.genSaltSync(10);
    let hash=bcrypt.hashSync(data.password,salt);
    let info={
        username:data.username,
        password:hash,
        mobile:data.mobile,
     };
    if(data){
       user=info;
        return response.status(200).json(info)
      
        }
    else{
        return response.status(502).json({
            message:"Something went wrong"
        })
    } 


   } catch (error:any) {
      return response.status(502).json({message:error.message})
   }
}


export const getUser=async(request:Request,response:Response)=>{
    try {

        let error=validationResult(request);
        if(!error.isEmpty()){
            return response.status(404).json({message:error.array()});
        }
       
   
       let data= request.body;
       let info={
           username:data.username,
           password:data.password,         
        };

        bcrypt.compare(data.password,"$2a$10$3bpKyNTumYosSsbLhYf0T.31r2defKi4h1UI4f6Q3sHpTVLzFtMx6").then((res) => {
            // res === true
            if(res === true){
                return response.status(200).json()
            }
            else{
                return response.status(502).json(res)
            }
        }).catch((err:any)=>{
            return response.status(502).json(err)
        });
       
      
 
    } catch (error:any) {
       return response.status(502).json({message:error.message})
    }
 }
 