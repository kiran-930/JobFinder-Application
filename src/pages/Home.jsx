import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import landingImage from '../landingImage.svg'
import ProjectCart from '../components/ProjectCart'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { homeProjectAPI } from '../services/allAPI';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';





const Home = () => {
  const [homeProjects,setHomeProjects] = useState([])
  const navigate =useNavigate()

  //console.log(homeProjects);
  useEffect(()=>{
    getHomeProjects()
  },[])

  const getHomeProjects = async ()=>{
    try{
      const result = await homeProjectAPI()
      console.log(result);
      if(result.status==200){
        setHomeProjects(result.data)
      }
    }catch(err){
      console.log(err);
    }
  }

  const handleProject = () => {
     if(sessionStorage.getItem("token")){
             navigate('/projects')
     }else{
      toast.warning("Please login to get full access to our projects!!")
     }
  }
  return (
    <>

<nav class="navbar navbar-expand-lg  bg-success ">
        <div class="mt-2 container-fluid">
          
          <a class="navbar-brand text-white fs-4 fst-italic" href="#"><i class="fa-solid fa-newspaper"></i>&nbsp;NewsBlog</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav fst-italic fs-5 ms-auto mb-2 mb-lg-0 ">
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">Home</a>
              </li>
          
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">Blogs</a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">Contact</a>
                
              </li>
              <li class="nav-item">
                <a class="nav-link text-white" aria-current="page" href="#">Login</a>
              </li>
              
              </ul>
              
          </div>
        </div>
      </nav>

    <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
                   <div className="row align-items-center">
                    <div className="col-lg-6">
                    <h1 style={{fontSize:'60px'}}> <i class="fa-solid fa-newspaper"></i>Read the most <br />Intresting article</h1>

                    <p style={{textAlign:'justify'}}>
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
                    </p>
                    {
                      sessionStorage.getItem("token") ?  <Link to="/dashboard" className='btn btn-success'>MANAGE YOUR BLOGS</Link> :  <Link to="/login" className='btn btn-success'>START TO EXPLORE</Link>
                    }
                   
                    </div>
                    <div className="col-lg-6">
                        <img style={{marginLeft:'130px'}} width={'400px'} src="https://cdn4.iconfinder.com/data/icons/academic-disciplines-color-sticker/64/current-events-512.png" alt="landing-image" className='img-fluid' />
                    </div>
                   </div>
        </div>
    </div>

    <div className="mt-5 text-center">
    <h1 className='mb-5'>Discover the Latest</h1>
  
    <div className="d-flex">
      {
        homeProjects?.length>0 &&(
        homeProjects?.map(project=>
        <div key={project?._id}  className="me-5">
          <ProjectCart displayData={project}/>
        </div>
        ))
      }
      </div>
<div>
  
</div>
      
    
    <button onClick={handleProject} className='btn btn-link mt-3'>EXPLORE FURTHER NEWS..</button>
    </div>
 

  
  <ToastContainer />
    </>
  )
}

export default Home
