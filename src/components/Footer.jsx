import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div
    className="footer rounded shadow "
    style={{ padding: "30px ", color: "black", h5: "black" }}
  >
    <div style={{ height: "300px" }} className="container mt-5 w-100 ">
      <div className="d-flex justify-content-between">
        <div style={{ width: "400px" }} className="intro">
          <h5 style={{ color: "black" }}>
          <i class="fa-solid fa-newspaper"></i>
            &nbsp; NewsGlobe
          </h5>
          <p>
          Never miss a headline with our news blog app. Get the latest updates, in-depth articles, and breaking news alerts right at your fingertips. Download now and stay connected to the stories that matter most to you!
          </p>
          <p> ipsum dolor sit amet, consectetur adipiscing elit</p>
          <p>Currenlty v1.0.0.</p>
        </div>
        <div className="links d-flex flex-column">
          <h5>Links</h5>
          <Link to={"/"} style={{ textDecoration: "none", color: "black" }}>
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
          <h5>Guides</h5>
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
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input
              type="text"
              placeholder="Enter Your email here "
              className="form-control"
            />
            <button style={{border:'none',marginLeft:'5px'}} className="btns bg-success p-2">
              {" "}
              <i className="fa-solid fa-arrow-right"></i>
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
  
  )
}

export default Footer
