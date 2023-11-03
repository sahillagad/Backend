import express,{Request,Response, Router, request} from 'express';
import * as CommentController from "../Controller/CommentController";

const CommentRoute:Router=Router();


CommentRoute.get("/",async(request:Request,response:Response)=>{
     return await CommentController.getAllComment(request,response); 
})


export default CommentRoute;
