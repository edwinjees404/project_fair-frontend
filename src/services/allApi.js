import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

// Register API function
export const registerApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/register`, reqBody,"");
};

//login
export const loginApi = async(reqBody)=>{
    return await commonApi('POST', `${serverUrl}/login`, reqBody,"")
}

//add project
export const addProjectApi = async(reqBody, reqHeader)=>{
    return await commonApi('POST', `${serverUrl}/add-project`,reqBody, reqHeader)
}
//gethome
export const homeProjectApi=async()=>{
    return await commonApi('GET',`${serverUrl}/home-project`)
}
//all project
export const allprojectApi = async(searchKey,reqHeader)=>{
    return await commonApi('GET', `${serverUrl}/all-project?search=${searchKey}`,"",reqHeader)
}

// api to get user project
export const userProjectApi = async(reqHeader)=>{
    return await commonApi('GET', `${serverUrl}/user-project`,"",reqHeader)

}


    //api to remove user project
    export const removeUserProjectApi = async(id, reqHeader)=>{
        return await commonApi('DELETE', `${serverUrl}/remove-userproject/${id}`,{},reqHeader)
    }

    //api to update project
    export const updateUserProjectApi = async(id, reqBody, reqHeader) =>{
        return await commonApi('PUT', `${serverUrl}/update-userProject/${id}`, reqBody, reqHeader)
    }

    //api to update profile
    export const updateUserProfileApi = async(reqBody, reqHeader)=>{
        return await commonApi('PUT', `${serverUrl}/update-userProfile`,reqBody, reqHeader)
    }
