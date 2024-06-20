import React, { useEffect, useState } from 'react'
import ProjectCart from '../components/ProjectCart'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'
import { allProjectAPI } from '../services/allAPI'



const Projects = () => {
  const [searchKey,setSearchKey]=useState("")
  const [allProjects,setAllProjects] = useState([])
  
  console.log(allProjects);

  useEffect(()=>{
    getAllProjects()
  },[searchKey])

  const getAllProjects = async ()=> {
    const token = sessionStorage.getItem("token")
    if(token){
      const reqHeader = {
        "Content-Type": "multipart/formdata",
        "Authorization": `Bearer ${token}`
      }
      //api call
      try{
           const result = await allProjectAPI(searchKey,reqHeader)
           //console.log(result);
           if(result.status==200){
            setAllProjects(result.data)
           }
      }catch(err){
        console.log(err);
      }
    }
  }
  return (
    <>
    <Header/>
    <div style={{marginTop:'150px'}} className="container-fluid">
          <div className="w-75 d-flex justify-content-between">
            <h1>All Projects</h1>
            <input onChange={e=>setSearchKey(e.target.value)} type="text" className='form-control w-50' placeholder='Search Projects By Language Used' />
          </div>

          <Row className='mt-3'>
        {
          allProjects?.length>0 ?
          allProjects?.map(project=>(
            <Col key={project?._id} className='mb-3' sm={12} md={6} lg={4} >
              <ProjectCart displayData={project} />
            </Col>
          ))
          :
          <div className="fw-bolder text-danger m-5 text-canter">
            Project Not found!!
          </div>
        }
          </Row>
    </div>
    </>
  )
}

export default Projects

