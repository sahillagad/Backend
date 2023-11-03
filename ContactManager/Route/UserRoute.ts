import { Request, Response, Router, request } from "express";
import * as UserController from "../Controller/UserController"

const UserRoute:Router=Router();

UserRoute.post("/",async(request:Request,response:Response)=>{
   return  await UserController.CreateUser(request,response);
})


export default UserRoute;