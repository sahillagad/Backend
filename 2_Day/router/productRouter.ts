import { Request, Response, Router } from "express";

const ProductRouter:Router=Router();

ProductRouter.get("/",(request:Request,response:Response)=>{
    return response.status(200).json({
        message:"I am From Product Router"
    })
})




export default ProductRouter;