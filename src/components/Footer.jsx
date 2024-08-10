import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <section id='contact'>
      <div
    className="footer rounded shadow "
    style={{ padding: "30px ", color: "black", h5: "black" }}
  >
    <div style={{ height: "300px" }} className="container mt-5 w-100 ">
      <div className="d-flex justify-content-between">
        <div style={{ width: "400px" }} className="intro">
          <h5 style={{ color: "black" }}>
          <i class="fa-solid fa-briefcase"></i>
            &nbsp;CareerConnect
          </h5>
          <p>
          "Explore a wide range of job categories, manage your job postings effortlessly, and stay updated with the latest career advice. Join us today and take the next step in your career journey."
          </p>
          <p> ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p>Currenlty v1.0.0.</p>
        </div>
        <div className="links d-flex flex-column">
          <h5 className='text-info'>Links</h5>
          <Link to={"/home"} style={{ textDecoration: "none", color: "black" }}>
            Home
          </Link>
          <Link
            to={"/login"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Login
          </Link>

          <Link
            to={"/register"}
            style={{ textDecoration: "none", color: "black" }}
          >
            Register
          </Link>
        </div>
        <div className="guides d-flex flex-column">
          <h5 className='text-info'>Guides</h5>
          <a
            href="https://react.dev/"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            React
          </a>

          <a
            href="https://react-bootstrap.github.io/"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            React Bootstrap
          </a>

          <a
            href="https://reactrouter.com/en/main"
            style={{ textDecoration: "none", color: "black" }}
            target="_blank"
          >
            Routing
          </a>
        </div>
        <div className="contact  d-flex flex-column">
          <h5 className='text-info'>Contact Us</h5>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Enter Your email here "
              className="form-control"
            />
            <button style={{border:'none',marginLeft:'5px'}} className="btns bg-info p-2">
              {" "}
              <i className="fa-solid fa-arrow-right text-white"></i>
            </button>
          </div>
          <div className="icons d-flex justify-content-between mt-3">
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-twitter"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </a>
            <a
              href=""
              style={{ textDecoration: "none", color: "black" }}
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>
          </div>      
        </div>
      </div>
      <p className="text-center mt-5">
      Feel free to customize the links and contact details as needed!
</p>
    </div>
  </div>
  
    </section>
    
    
  )
}

export default Footer
