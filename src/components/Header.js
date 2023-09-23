import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import { NavLink } from 'react-router-dom'
import "./header.css";



const Header = () => {
    const [logindata, setLoginData] = useState([]);

  const history = useNavigate();

  const [show, setShow] = useState(false);

  var todayDate = new Date().toISOString().slice(0, 10);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const Birthday = () => {
    const getuser = localStorage.getItem("user_login");
    if (getuser && getuser.length) {
      const user = JSON.parse(getuser);

      setLoginData(user);

      const userbirth = logindata.map((el, k) => {
        return el.date === todayDate;
      });

      if (userbirth) {
        setTimeout(() => {
          console.log("ok");
          handleShow();
        }, 3000);
      }
    }
  };

  const userlogout = () => {
    localStorage.removeItem("user_login");
    history("/");
  };

  useEffect(() => {
    Birthday();
  }, []);
  const history1 = useNavigate();
  const pauseChat = () => {
    history1(
      "/https://650829965d971a5524e2698a--peppy-banoffee-a4b0e8.netlify.app/"
    );
  };
  const openWebsite = () => {
    const websiteURL =
      "https://6509b0e9de9fe80a3850d8e8--incredible-arithmetic-0acf38.netlify.app/"; // Replace with your desired URL
    window.open(websiteURL, "_blank");
  };
  const openWebsite1 = () => {
    const websiteURL = "https://bdiocallbysameer.netlify.app/"; // Replace with your desired URL
    window.open(websiteURL, "_blank");
  };
    return (
        <>
        {logindata.length === 0 ? (
        "errror"
      ) : (
        <>
        <div class="nav-bar">
                <div class="container-fluid">
                    <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
                        <a href="#" class="navbar-brand">MENU</a>
                        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                            <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse justify-content-between" id="navbarCollapse">
                            <div class="navbar-nav mr-auto">
                                <a href="details" class="nav-item nav-link ">Home</a>
                                <a href="about.html" class="nav-item nav-link">About</a>
                                <a href="service.html" class="nav-item nav-link">Practice</a>
                                <a href="team.html" class="nav-item nav-link">Attorneys</a>
                                <a href="portfolio.html" class="nav-item nav-link">Case Studies</a>
                                <div class="nav-item dropdown">
                                    <a href="" class="nav-link dropdown-toggle" data-toggle="dropdown">Pre Trial</a>
                                    <div class="dropdown-menu">
                                        <a href="blog.html" class="dropdown-item">Blog Page</a>
                                        <a href="single.html" class="dropdown-item">Single Page</a>
                                    </div>
                                </div>
                                <a href="contact.html" class="nav-item nav-link">Contact</a>
                            </div>
                            <div class="ml-auto">
                                <a class="btn" >{logindata[0].name}</a>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>

        </>
      )
    }
      </>
    )
}

export default Header