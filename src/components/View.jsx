import React, { useContext, useEffect, useState } from 'react'
import Add from './Add'
import Edit from './Edit'
import { removeProjectAPI, userProjectAPI } from '../services/allAPI'
import { addResponseContext, editResponseContext } from '../contexts/ContextAPI'



const View = () => {
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const [userProjects,setUserProjects]=useState([])
  const {addResponse,setAddResponse}=useContext(addResponseContext)

    console.log(userProjects);

  useEffect(()=>{
    getUserProjects()
  },[addResponse,editResponse])




  const getUserProjects = async ()=>{
    const token = sessionStorage.getItem("token")

    if(token)
      {
        const reqHeader = {
          "Content-Type": "multipart/formdata",
          "Authorization": `Bearer ${token}`
        }
        //api call
        try{
         const result = await userProjectAPI(reqHeader)
         console.log(result);
         if(result.status==200){
          setUserProjects(result.data)
         }
        }catch(err){
          console.log(err);
        }
      }
  }

  const handleDeleteProject = async (pid,reqHeader) => {
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`
      }
      try{
        const result = await removeProjectAPI(pid,reqHeader)
        if(result.status==200){
          getUserProjects()
        }else{
          console.log(result);
        }
      }catch(err){
        console.log(err);
      }
    }

  }
  return (
    <>
      <div className="d-flex justify-content-between mt-5">
        <h2 className="text-dark">
         Your Posted Jobs
         <i class="fa-solid fa-turn-down"></i>
        </h2>
        <div><Add/></div>
      </div>
      <div className="mt-2">
        {
          userProjects?.length>0 ?
          userProjects.map(project=>(
            <div key={project?._id} className="border rounded p-2 d-flex justify-content-between mt-3">
            <h3>{project?.title}</h3>
            <div className="d-flex align-items-center">
              <div><Edit project={project} /></div>
              
              <button onClick={()=>handleDeleteProject(project?._id)} className='btn text-danger'>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          ))
          :
          <div className="fw-bolder text-warning">No Jobs uploaded yet!!</div>
        }
      
      </div>
    </>
  )
}

export default View
