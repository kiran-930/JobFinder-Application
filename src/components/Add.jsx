import { useState, React, useEffect, useContext } from "react";
import { Modal, Button } from "react-bootstrap";
import uploadImg from "../assets/upload.png";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addProjectAPI } from "../services/allAPI";
import { addResponseContext } from "../contexts/ContextAPI";

function Add() {
  const {addResponse,setAddResponse} = useContext(addResponseContext)
  const [preview,setPreview] = useState(uploadImg)
  const [imageFileStatus, setImageFileStatus] = useState(false);
  const [JobDetails, setJobDetails] = useState({
    title: "",
    languages: "",
    github: "",
    website: "",
    overview: "",
    projectImg: ""
  });

  //console.log(JobDetails);

  const [show, setShow] = useState(false);
  const handleClose = () =>{
    setShow(false);
    setJobDetails({ title: "",
      languages: "",
      github: "",
      website: "",
      overview: "",
      projectImg: ""
    })
  }
  const handleShow = () => setShow(true);

  useEffect(() => {
    if (
      JobDetails.projectImg.type == "image/png" ||
      JobDetails.projectImg.type == "image/jpg" ||
      JobDetails.projectImg.type == "image/jpeg"
    ) {
      setImageFileStatus(true);
      setPreview(URL.createObjectURL(JobDetails.projectImg))
    } else {
      setImageFileStatus(false);
      setPreview(uploadImg)
      setJobDetails({ ...JobDetails, projectImg: "" });
    }
  }, [JobDetails.projectImg]);

  const handleAddProject = async () => {
    const {title,languages,github,website,overview,projectImg
    } = JobDetails
    if(JobDetails.title && JobDetails.languages && JobDetails.github && JobDetails.website && JobDetails.overview && JobDetails.projectImg)
    {
      //api call-reqbody, reqheader
      //reqbody - add items to form data
      const reqBody = new FormData()
         reqBody.append("title",title)
         reqBody.append("languages",languages)
         reqBody.append("overview",overview)
         reqBody.append("github",github)
         reqBody.append("website",website)
         reqBody.append("projectImg",projectImg)
     
         const token = sessionStorage.getItem("token")
         if(token){
          const reqHeader = {
            "Content-Type": "multipart/formdata",
            "Authorization": `Bearer ${token}`
          }
          //api call - reqBody, reqheader
          try{
            const result = await addProjectAPI(reqBody,reqHeader)
            console.log(result);
            if(result.status==200){
              handleClose()
              //toast.success("Project added successfully")
              setAddResponse(result)
            }else{
              toast.warning(result.response.data)
            }
          }catch(err){
            console.log(err);
          }
         }

    }else{
      toast.info("Please fill the form completely!!")
    }
  }

  return (
    <>
      <button onClick={handleShow} className="btn btn-warning">
        <i className="fa-solid fa-plus"></i>Post New Job
      </button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size="lg"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>View Job Details!!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
                <img className="img-fluid" src={preview} alt=""   />
              </label>
              {!imageFileStatus && (
                <div className="text-dark fw-bolder my-2">
                 &nbsp;  &nbsp;   &nbsp;   &nbsp;   &nbsp;   Upload image here!!
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
                  placeholder="Company Website Link"
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
              placeholder="Skills Needed"
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
          <Button onClick={handleAddProject} variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer />
    </>
  );
}

export default Add;