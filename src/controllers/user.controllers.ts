import { Request,Response } from "express"

export const getUsuarios  = (req : Request, res : Response)=>{
    console.log("getUsuarios");
   return res.send('getUsuarios')

}