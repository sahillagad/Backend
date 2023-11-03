

export interface IUser{
    email:string; 
    name:string;
    imageUri:{
         data:string,
         contentType:string,
    };
    password:string;
    _id?: string ;
    createdAt?:Date; 
    updatedAt?:Date;
}
