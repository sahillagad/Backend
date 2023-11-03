import express,{ Application, Request, Response, request } from "express";
import dotenv from "dotenv";
import cors from "cors";
import  {DBUtil}  from "./DB/Utills/DBUtill";
import { validationResult } from "express-validator";
import path from "path";
import UserTable from "./DB/Scheme/UserSchema";
import { IUser } from "./DB/Model/IUser";
const app:Application=express();
import fs from "fs";
import mongoose from "mongoose";
dotenv.config({path: "./.env"})
const port:string | undefined | number =process.env.PORT || 9000; // it is dynamic port number underlining the deploying server 
app.use(express.json());
app.use(cors());

const databaseName:string|undefined=process.env.EXPRESS_MONGO_DB_DATABASE_NAME;
const databaseUrl:string|undefined=process.env.EXPRESS_MONGO_DB_CLOUD_URL;

app.get("/",(request:Request,response:Response)=>{
     response.status(200).json({
        msg:"Server Start",
     })
})


const multer  = require('multer')
const storage = multer.diskStorage({
    //  request 
    // File That We Send 
    // Cb -> Call back Function 
    destination: function (req:any, file:any, cb:any) {
      cb(null, 'uploads') 
      // Call BackFunction have two Filed Error If Error Come and Distination Folder 

    },
    
    // unique file namewe save with this avoid confustion 

    filename: function (req:any, file:any, cb:any) {
      const uniqueSuffix = Date.now();
      cb(null, uniqueSuffix+file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
// const upload = multer({ dest: 'uploads/' })

// upload.single("image") in that we pass of variable That Contain Image 

app.post("/upload-image",upload.single("image"),async(request:Request,response:Response)=>{
   
    let obj=request.body;
   
     
     if(request.file?.filename){
     
        let objCreate={
            name:request.body.name,
            email:request.body.email,
            password:request.body.password,
            imageUri:{
                data:request.file?.filename,
                contentType:"image/png"
            }
        }
        let TheUser:IUser|null|undefined=await new UserTable<IUser>(objCreate).save();
     }
     else{


     }
     
     

     response.status(200).json({
         data:request.file?.filename
     })
})

app.get('/image/:filename', (req, res) => {
    const { filename } = req.params;
    const imagePath = path.join(__dirname, 'uploads', filename);
  
    // Check if the file exists
    if (fs.existsSync(imagePath)) {
      
        res.sendFile(imagePath);
      
    } else {
      res.status(404).send('Image not found');
    }
  });


  app.get("/user/:userId",async(request:Request,response:Response)=>{
      let userId=request.params.userId;
      let moongoseId=new mongoose.Types.ObjectId(userId);
      let theUser:IUser|undefined|null=await UserTable.findOne(moongoseId);
      if(theUser){
        return response.status(200).json({
          user:theUser,
      })


  
      }
      else{
        return response.status(502).json({
            message:"Something went wrong"
        })
      }
  })


  app.get('/userObj/:userId', async (req, res) => {
    const userId = req.params.userId;
  
    try {
      const user:IUser|undefined|null = await UserTable.findById(userId);
  
      if (!user) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Construct the full file path using the image file name
      const imagePath = path.join(__dirname, 'uploads', user.imageUri.data);
  
     
      res.sendFile(imagePath);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });
  

if(port){
    app.listen(Number(port),()=>{
       if(databaseName && databaseUrl ){
           DBUtil.connectToDB(databaseName,databaseUrl).then((result) => {
               console.log(databaseName +" "+databaseUrl);
               console.log(result);
             

           }).catch((err) => {
                console.log(err);
               //   If Error Is Come You Stop Your Whole Application
                process.exit(1); //FORCE EXIT /Force Exit express server               
           });
        }    
        
       console.log(`Express Server is Started at http://localhost:${port}`);
    })
}

