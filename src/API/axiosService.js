import axiosInstance from "./axiosInstance"

const axiosService=async(httpReq,url,reqData)=>{
    try{
        const response=await axiosInstance({
            method:httpReq,
            url,
            data:reqData
        })
        return response
    }catch(err){
        throw(err)
    }
}

export default axiosService