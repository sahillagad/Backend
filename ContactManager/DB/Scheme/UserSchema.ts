import mongoose from "mongoose";
import { IUser } from "../Model/IUser";

const UserSchemas=new mongoose.Schema<IUser>({
    name:{type:String,required:true},
    email:{type:String,required:true},
    password:{type:String,required:true},
    imageUri:{
        data:{type:String},
        contentType:{type:String}
    }
},{timestamps:true});

const UserTable=mongoose.model<IUser>("users",UserSchemas);
export default UserTable;