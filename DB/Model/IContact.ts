export interface IContact{
    name:string;
    imageUri:string;
    mobile:string;
    email:string;
    company:string;
    title:string;
    groupId:string;
    _id?:string;
    createdAt?:Date; 
    updatedAt?:Date;
}