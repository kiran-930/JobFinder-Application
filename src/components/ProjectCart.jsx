import React, { useState } from 'react'
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import SERVERURL from '../services/serverurl';

const ProjectCart = ({displayData}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
    <section id='jobs'>
    <Card onClick={handleShow} className='shadow btn m-5 p-3'>
      <Card.Img variant="top" height={'200px'} src={`${SERVERURL}/uploads/${displayData?.projectImg}`} />
      <Card.Body>
        <Card.Title>{displayData.title}</Card.Title>
      </Card.Body>
      
    </Card>
   
    

    <Modal size='lg' show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Job Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='row'>
          <div className="col-lg-6">
            <img className='img-fluid' src={`${SERVERURL}/uploads/${displayData?.projectImg}`} alt='title'/>
          </div>

          <div className="col-lg-6">
            <h3>{displayData?.title}</h3>
            <h6><span className='fw-bolder text-dark'>Position: </span> <span className='text-danger'>{displayData?.languages}</span></h6>
          <span className='fw-bolder'>Skills: </span>
          <p style={{textAlign:'justify'}}> {displayData?.overview}</p>
          </div>
        </div>

        <div className="float-start mt-2 align-item">
       <br/>
        Apply Now <i class="fa-solid fa-arrow-right"></i>

       <a href={displayData?.github} target='_blank' className='btn btn-success ms-2'> <i class="fa-solid fa-link"></i></a>
       About Company <i class="fa-solid fa-arrow-right"></i>

       <a href={displayData?.website} target='_blank' className='btn btn-danger ms-2'> <i class="fa-solid fa-link"></i></a>

        </div>
        
        </Modal.Body>
        <Modal.Footer>
        </Modal.Footer>
      </Modal>
    </section>
       
    </>
  )
}

export default ProjectCart
