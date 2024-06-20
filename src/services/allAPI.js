import commonAPI from "./commonApi";
import SERVERURL from "./serverurl";

export const registerAPI = async (reqBody) => {
    //console.log(reqBody);
    return await commonAPI("POST",`${SERVERURL}/register`,reqBody)
}

export const loginAPI = async (reqBody) => {
    //console.log(reqBody);
    return await commonAPI("POST",`${SERVERURL}/login`,reqBody)
}

export const addProjectAPI = async (reqBody,reqHeader) => {
    //project/add
     return await commonAPI("POST",`${SERVERURL}/project/add`,reqBody,reqHeader)
}

//HOME PROJECT
export const homeProjectAPI = async () => {
   // /get-home-projects
     return await commonAPI("GET",`${SERVERURL}/get-home-projects`,"")
}


//USER PROJECT
export const userProjectAPI = async (reqHeader) => {
    // /get-home-projects
      return await commonAPI("GET",`${SERVERURL}/user-projects`,"",reqHeader)
 }

//ALL PROJECT
export const allProjectAPI = async (searchKey,reqHeader) => {
    // /all-projects
      return await commonAPI("GET",`${SERVERURL}/all-projects?search=${searchKey}`,"",reqHeader)
 }

 // /project/:pid/edit
 export const editProjectAPI = async (pid,reqBody,reqHeader) => {
    return await commonAPI("PUT",`${SERVERURL}/project/${pid}/edit`,reqBody,reqHeader)
}


  // /project/:pid/remove
  export const removeProjectAPI = async (pid,reqHeader) => {
      return await commonAPI("DELETE",`${SERVERURL}/project/${pid}/remove`,{},reqHeader)
 }

   // /project/user/edit
   export const editUserAPI = async (reqBody,reqHeader) => {
    return await commonAPI("PUT",`${SERVERURL}/user/edit`,reqBody,reqHeader)
}

