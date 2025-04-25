import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import SERVERURL from '../services/serverurl';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { editProjectAPI } from '../services/allAPI';
import { editResponseContext } from '../contexts/ContextAPI';

const Edit = ({project}) => {
  const {editResponse,setEditResponse} = useContext(editResponseContext)
  const [imageFileStatus, setImageFileStatus] = useState(true);
  const [JobDetails,setJobDetails] = useState({
    id:project?._id,
    title:project?.title ,
    languages: project?.languages,
    github: project?.github,
    website: project?.website,
    overview: project?.overview,
    projectImg: ""
  });

  const [preview,setPreview] = useState("")
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false)
    setJobDetails({id: project?._id, title: project?.title,
      languages: project?.languages,
      github: project?.github,
      website: project?.website,
      overview: project?.overview,
      projectImg: ""
    });

  };
  const handleShow = () => {
    setShow(true);
    setJobDetails({id: project?._id, title: project?.title,
      languages: project?.languages,
      github: project?.github,
      website: project?.website,
      overview: project?.overview,
      projectImg: ""
    });
   
  }

  useEffect(() => {
    if(JobDetails.projectImg.type == "image/png" ||
      JobDetails.projectImg.type == "image/jpg" ||
      JobDetails.projectImg.type == "image/jpeg")
      {
      setPreview(URL.createObjectURL(JobDetails.projectImg))
      setImageFileStatus(true)
    }else{
      setImageFileStatus(false)
      setPreview("")
      setJobDetails({...JobDetails,projectImg:""})
    }
  },[JobDetails.projectImg])

  const handleUpdateProject = async ()=>{
     const {id,title,
      languages,
      github,
      website,
      overview,
      projectImg} = JobDetails
      if(title &&
        languages &&
        github &&
        website &&
        overview)
        {
          //api call proceed
          //reqbody - add items to form data
          const reqBody = new FormData()
          reqBody.append("title",title)
          reqBody.append("languages",languages)
          reqBody.append("overview",overview)
          reqBody.append("github",github)
          reqBody.append("website",website)
          preview?reqBody.append("projectImg",projectImg):reqBody.append("projectImg",project.projectImg)
      
          const token = sessionStorage.getItem("token")

          if(token){
            const reqHeader = {
              "Content-Type": preview ? "multipart/form-data":"application/json",
              "Authorization": `Bearer ${token}`
            };
           //api call - reqBody, reqheader
           try{
             const result = await editProjectAPI(id,reqBody,reqHeader)
             console.log(result);
             if(result.status==200){
              handleClose()
              //pass response view
              setEditResponse(result)
             }else{
              console.log(result.response.data);
             }
           }catch(err){
            console.log(err);
           }
          }

      }else{
        toast.warning("Please fill the form completely!!")
      }
  }
  return (
    <div>
       <button onClick={handleShow} className="btn">
       <i class="fa-solid fa-pen-to-square"></i> 
    </button>

      <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Job Details!!</Modal.Title>
        </Modal.Header>
       \  <Modal.Body>
          <div className="row align-items-center ">
            <div className="col-lg-4">
              <label>
                <input
                  type="file"
                  style={{ display: "none" }}
                  onChange={(e) =>
                    setJobDetails({
                      ...JobDetails,
                      projectImg: e.target.files[0],
                    })
                  }
                />
                <img className="img-fluid" src={preview?preview:`${SERVERURL}/uploads/${project?.projectImg}`} alt="project-image"   />
              </label>
              {!imageFileStatus && (
                <div className="text-dark fw-bolder my-2">
                  &nbsp; &nbsp; &nbsp; Upload image here!!!
                </div>
              )}
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Title"
                  value={JobDetails.title}
                  onChange={(e) =>
                    setJobDetails({
                      ...JobDetails,
                      title: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Position"
                  value={JobDetails.languages}
                  onChange={(e) =>
                    setJobDetails({
                      ...JobDetails,
                      languages: e.target.value,
                    })
                  }
                />
              </div>

              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Job Apply Link"
                  value={JobDetails.github}
                  onChange={(e) =>
                    setJobDetails({
                      ...JobDetails,
                      github: e.target.value,
                    })
                  }
                />
              </div>
    

              <div className="mb-2">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Company Link"
                  value={JobDetails.website}
                  onChange={(e) =>
                    setJobDetails({
                      ...JobDetails,
                      website: e.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          <div>
            <input
              type="text"
              className="form-control"
              placeholder="Skills"
              value={JobDetails.overview}
              onChange={(e) =>
                setJobDetails({
                  ...JobDetails,
                  overview: e.target.value,
                })
              }
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpdateProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
