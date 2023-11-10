import { commonApi } from "./commonAPI"
import { serverURL } from "./serverURL"

export const uploadAllVideo=async(reqBody)=>{
    return await commonApi('POST',`${serverURL}/videos`,reqBody)
}
//get all videos from json server
export const getAllVideos=async()=>{
    return await commonApi('GET',`${serverURL}/videos`,'')
}
export const deleteVideo=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/videos/${id}`,{})
}

 export const addToHistory=async(videoDetails)=>{
    return await commonApi('POST',`${serverURL}/history`,videoDetails)
}
//api to get al history from json-server
export const getAllHistory=async()=>{
    return await commonApi('GET',`${serverURL}/history`,'')
}

//api to add categories
export const addToCategory=async(body)=>{
    return await commonApi('POST',`${serverURL}/categories`,body)
}


//to delete an item from watch history


export const removeFromWatch=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/history/${id}`,{})
 }

 //api to get category
export const getAllCategory=async()=>{
    return await commonApi('GET',`${serverURL}/categories`,'')
 }
 
 //to delete a category
export const deleteACategory=async(id)=>{
    return await commonApi('DELETE',`${serverURL}/categories/${id}`,{})
   
 }

 //to get a particular video
export const cVideo=async(id)=>{
    return await commonApi('GET',`${serverURL}/videos/${id}`,"")
 }

//to update category
export const updatCategory=async(id,body)=>{
    return await commonApi('put',`${serverURL}/categories/${id}`,body)
}