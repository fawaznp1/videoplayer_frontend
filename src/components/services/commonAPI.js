import axios from "axios"


export const commonApi = async(httpMethod,url,reqBody)=>{
    let reqConfig ={
        method: httpMethod,
        url,//both key value pair is url therfore we write only one
        data: reqBody,
          Headers: {
            "Content-Type":"Application/json"
          }
        }
        return await axios(reqConfig).then((result)=>{
            return result
        }).catch((err)=>{
            return err
        })
}