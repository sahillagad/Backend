import { Request, Response, Router, request } from "express";
import * as UserController from "../Controller/UserController";
import { body } from "express-validator";

let UserRouter:Router=Router();

UserRouter.post("/",[

    body("username").isLength({min:5}).notEmpty().withMessage("Enter Username Proper Formate"),
    body("password").notEmpty().isStrongPassword().withMessage("Enter Password Proper Formate"),
    body("mobile").isMobilePhone(["en-IN"]),
    
],async(request:Request,response:Response)=>{
    return await UserController.CreateUser(request,response); 
})


UserRouter.post("/getUser",[

    body("username").isLength({min:5}).notEmpty().withMessage("Enter Username Proper Formate"),
    body("password").notEmpty().isStrongPassword().withMessage("Enter Password Proper Formate"),
    
],async(request:Request,response:Response)=>{
    return await UserController.getUser(request,response); 
})






export default UserRouter;


