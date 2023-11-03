import express,{ Router,Request,Response} from "express";
import * as AlbumController from "../Controller/AlbumController";
const albumRoute:Router=Router();


albumRoute.get("/",async (request:Request,response:Response)=>{
      return await  AlbumController.getAllAlbum(request,response);
})

albumRoute.get("/:albumId",async(request:Request,response:Response)=>{
     return await AlbumController.getAlbumById(request,response);
})





export default albumRoute;