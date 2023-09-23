import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import OpenWebsiteButton from "../components/OpenWebsiteButton";
import OpenWebsiteButton1 from "./OpenWebsiteButton1";
import "./detail.css";

const Details = () => {
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
          <div className="h-100 d-flex align-items-center justify-content-center">
            {/* <div>
              <h1 className="text-center">detials page</h1>
              <h1>WelCome back {logindata[0].name}</h1>
              <div className="d-flex justify-content-center mt-5">
                <Button className="col-lg-4 mx-3" onClick={openWebsite1}>
                  VideoCall
                </Button>
                <Button onClick={openWebsite} className="col-lg-4 mx-3">
                  Live Chat
                </Button>
                <Button onClick={userlogout} className="col-lg-4 mx-3">
                  LogOut
                </Button>
              </div>
              {logindata[0].date === todayDate ? (
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{logindata[0].name} 😄</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    Wish you many many happy returns of the day ! 🍰
                  </Modal.Body>
                  <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                      Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                      Save Changes
                    </Button>
                  </Modal.Footer>
                </Modal>
              ) : (
                ""
              )}
            </div> */}
          </div>
          <div id="carousel" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
              <li data-target="#carousel" data-slide-to="0" class="active"></li>
              <li data-target="#carousel" data-slide-to="1"></li>
              <li data-target="#carousel" data-slide-to="2"></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://media.istockphoto.com/id/489544923/photo/judge-holding-documents.jpg?s=612x612&w=0&k=20&c=9_4XnH3uYHVI73CzQJL5QW70lGcjKLWnp-nIcH_wm1c="
                  alt="Carousel Image"
                />
                <div class="carousel-caption">
                  <h1 class="animated fadeInLeft">We fight for your justice</h1>
                  <p class="animated fadeInRight">
                    Lorem ipsum dolor sit amet elit. Mauris odio mauris...
                  </p>
                  <a class="btn animated fadeInUp" href="#">
                    Get free consultation
                  </a>
                </div>
              </div>

              <div class="carousel-item">
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Grand_Hall_de_Justice_de_Palais_de_La_Paix_%C3%A0_La_Haye_Pays-Bas.jpg/220px-Grand_Hall_de_Justice_de_Palais_de_La_Paix_%C3%A0_La_Haye_Pays-Bas.jpg"
                  alt="Carousel Image"
                />
                <div class="carousel-caption">
                  <h1 class="animated fadeInLeft">
                    We prepared to oppose for you
                  </h1>
                  <p class="animated fadeInRight">
                    Lorem ipsum dolor sit amet elit. Mauris odio mauris...
                  </p>
                  <a class="btn animated fadeInUp" href="#">
                    Get free consultation
                  </a>
                </div>
              </div>

              <div class="carousel-item">
                <img
                  src="https://blog.ipleaders.in/wp-content/uploads/2020/01/Screen-Shot-2020-01-02-at-2.26.25-PM.png"
                  alt="Carousel Image"
                />
                <div class="carousel-caption">
                  <h1 class="animated fadeInLeft">
                    We fight for your privilege
                  </h1>
                  <p class="animated fadeInRight">
                    Lorem ipsum dolor sit amet elit. Mauris odio mauris...
                  </p>
                  <a class="btn animated fadeInUp" href="#">
                    Get free consultation
                  </a>
                </div>
              </div>
            </div>

            <a
              class="carousel-control-prev"
              href="#carousel"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carousel"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
              ></span>
              <span class="sr-only">Next</span>
            </a>
          </div>
          <div class="feature-top">
            <div class="container-fluid">
              <div class="row align-items-center">
                <div class="col-md-3 col-sm-6">
                  <div class="feature-item">
                    <i class="far fa-check-circle"></i>
                    <h3>Legal</h3>
                    <p>Govt Approved</p>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="feature-item">
                    <i class="fa fa-user-tie"></i>
                    <h3>Attorneys</h3>
                    <p>Expert Attorneys</p>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="feature-item">
                    <i class="far fa-thumbs-up"></i>
                    <h3>Success</h3>
                    <p>99.99% Case Won</p>
                  </div>
                </div>
                <div class="col-md-3 col-sm-6">
                  <div class="feature-item">
                    <i class="far fa-handshake"></i>
                    <h3>Support</h3>
                    <p>Quick Support</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="about">
            <div class="container">
              <div class="row align-items-center">
                <div class="col-lg-5 col-md-6">
                  <div class="about-img">
                    <img
                      src="https://as1.ftcdn.net/v2/jpg/02/98/26/04/1000_F_298260401_tZySnegSPMSpJf5LsLVyqh96qCv0GoRz.jpg"
                      alt="Carousel Image"
                    />
                  </div>
                </div>
                <div class="col-lg-7 col-md-6">
                  <div class="section-header">
                    <h2>Learn About Us</h2>
                  </div>
                  <div class="about-text">
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non vulputate. Aliquam metus tortor, auctor id gravida
                      condimentum, viverra quis sem.
                    </p>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Phasellus nec pretium mi. Curabitur facilisis ornare velit
                      non vulputate. Aliquam metus tortor, auctor id gravida
                      condimentum, viverra quis sem. Curabitur non nisl nec nisi
                      scelerisque maximus. Aenean consectetur convallis
                      porttitor. Aliquam interdum at lacus non blandit.
                    </p>
                    <a class="btn" href="">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="service">
            <div class="container">
              <div class="section-header">
                <h2>Our Practices Areas</h2>
              </div>
              <div class="row">
                <div class="col-lg-4 col-md-6">
                  <div class="service-item">
                    <div class="service-icon">
                      <img
                        src="https://1.bp.blogspot.com/-KVRrU5lYBX8/X2EOIyimdlI/AAAAAAAAAvQ/LiQOgeApND4r96HMPFU-g4ZbbZIy8WKiQCLcBGAsYHQ/s800/introduction-to-business-law-certificate-program_129467_large.jpg"
                        alt="Carousel Image"
                      />

                      {/* <i class="fa fa-landmark"></i> */}
                    </div>
                    <h3>Civil Law</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non
                    </p>
                    <a class="btn" href="">
                      Learn More
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="service-item">
                    <div class="service-icon">
                      <img
                        src="https://blog.ipleaders.in/wp-content/uploads/2021/01/family-courts.jpg"
                        alt="Carousel Image"
                      />
                    </div>
                    <h3>Family Law</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non
                    </p>
                    <a class="btn" href="">
                      Learn More
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="service-item">
                    <div class="service-icon">
                      <img
                        src="https://sociallawstoday.com/wp-content/uploads/2021/02/4-Main-Types-of-Law-Which-One-Is-the-Best-For-You-1170x614-1-e1633610839631-1.jpg"
                        alt="Carousel Image"
                      />
                    </div>
                    <h3>Business Law</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non
                    </p>
                    <a class="btn" href="">
                      Learn More
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="service-item">
                    <div class="service-icon">
                      <img
                        src="https://sociallawstoday.com/wp-content/uploads/2021/02/4-Main-Types-of-Law-Which-One-Is-the-Best-For-You-1170x614-1-e1633610839631-1.jpg"
                        alt="Carousel Image"
                      />
                    </div>
                    <h3>Education Law</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non
                    </p>
                    <a class="btn" href="">
                      Learn More
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="service-item">
                    <div class="service-icon">
                      <img
                        src="https://blog.ipleaders.in/wp-content/uploads/2020/03/General-Criminal-Law.png"
                        alt="Carousel Image"
                      />
                    </div>
                    <h3>Criminal Law</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non
                    </p>
                    <a class="btn" href="">
                      Learn More
                    </a>
                  </div>
                </div>
                <div class="col-lg-4 col-md-6">
                  <div class="service-item">
                    <div class="service-icon">
                      <img
                        src="https://qph.cf2.quoracdn.net/main-qimg-0d4f7ddc71d304c1de63b3a87dc969d7-lq"
                        alt="Carousel Image"
                      />
                    </div>
                    <h3>Cyber Law</h3>
                    <p>
                      Lorem ipsum dolor sit amet elit. Phasellus nec pretium mi.
                      Curabitur facilisis ornare velit non
                    </p>
                    <a class="btn" href="">
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="feature">
            <div class="container">
              <div class="row">
                <div class="col-md-7">
                  <div class="section-header">
                    <h2>Why Choose Us</h2>
                  </div>
                  <div class="row align-items-center feature-item">
                    <div class="col-5">
                      <div class="feature-icon">
                        <i class="fa fa-gavel"></i>
                      </div>
                    </div>
                    <div class="col-7">
                      <h3>Best law practices</h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium
                        mi. Curabitur facilisis ornare velit non vulputate.
                      </p>
                    </div>
                  </div>
                  <div class="row align-items-center feature-item">
                    <div class="col-5">
                      <div class="feature-icon">
                        <i class="fa fa-balance-scale"></i>
                      </div>
                    </div>
                    <div class="col-7">
                      <h3>Efficiency & Trust</h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium
                        mi. Curabitur facilisis ornare velit non vulputate.
                      </p>
                    </div>
                  </div>
                  <div class="row align-items-center feature-item">
                    <div class="col-5">
                      <div class="feature-icon">
                        <i class="far fa-smile"></i>
                      </div>
                    </div>
                    <div class="col-7">
                      <h3>Results you deserve</h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium
                        mi. Curabitur facilisis ornare velit non vulputate.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="feature-img">
                    <img
                      src="https://m.media-amazon.com/images/I/6159Bn6upxL.jpg"
                      alt="Carousel Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="team">
            <div class="container">
              <div class="section-header">
                <h2>Meet Our Expert Attorneys</h2>
              </div>
              <div class="row">
                <div class="col-lg-3 col-md-6">
                  <div class="team-item">
                    <div class="team-img">
                      <img
                        src="https://media.licdn.com/dms/image/C5603AQH6mpOUO9uIXg/profile-displayphoto-shrink_400_400/0/1553873199402?e=1700697600&v=beta&t=PvgHYxA2AO4oeq23ECSFRP88hhuFZUQFyPqpPtI0uHg"
                        alt="Carousel Image"
                      />
                    </div>
                    <div class="team-text">
                      <h2>SHREYA SHRIVASTAVA</h2>
                      <p>Business Consultant</p>
                      <div class="team-social">
                        <a class="social-tw" href="">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a class="social-fb" href="">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="social-li" href="">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="social-in" href="">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="team-item">
                    <div class="team-img">
                      <img
                        src="https://media.licdn.com/dms/image/D4D03AQEuHOJ_8Fx_Cw/profile-displayphoto-shrink_800_800/0/1675267318373?e=2147483647&v=beta&t=G5vz1jPrj1xRpuNKxYOHOpge6zPOuL4FkhgysevZz9g"
                        alt="Carousel Image"
                      />
                    </div>
                    <div class="team-text">
                      <h2>KAILASH PANDEY</h2>
                      <p>Criminal Consultant</p>
                      <div class="team-social">
                        <a class="social-tw" href="">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a class="social-fb" href="">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="social-li" href="">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="social-in" href="">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="team-item">
                    <div class="team-img">
                      <img
                        src="https://content.jdmagicbox.com/comp/delhi/z4/011pxx11.xx11.220415184810.t8z4/catalogue/-pret9r6d0x.jpg?clr="
                        alt="Carousel Image"
                      />
                    </div>
                    <div class="team-text">
                      <h2>SEEMA SAMRIDHI</h2>
                      <p>Divorce Consultant</p>
                      <div class="team-social">
                        <a class="social-tw" href="">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a class="social-fb" href="">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="social-li" href="">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="social-in" href="">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-lg-3 col-md-6">
                  <div class="team-item">
                    <div class="team-img">
                      <img
                        src="https://media.licdn.com/dms/image/C4E03AQHdXksGi4yr0A/profile-displayphoto-shrink_800_800/0/1606094205746?e=2147483647&v=beta&t=MB2ivHmrnhYm7Tg_Sq74U9FACo5EqfOEJTlj4c9wEAM"
                        alt="Carousel Image"
                      />
                    </div>
                    <div class="team-text">
                      <h2>ANUGRAH EKKA</h2>
                      <p>Immigration Consultant</p>
                      <div class="team-social">
                        <a class="social-tw" href="">
                          <i class="fab fa-twitter"></i>
                        </a>
                        <a class="social-fb" href="">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                        <a class="social-li" href="">
                          <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a class="social-in" href="">
                          <i class="fab fa-instagram"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="faqs">
            <div class="container">
              <div class="row">
                <div class="col-md-5">
                  <div class="faqs-img">
                    <img
                      src="https://as1.ftcdn.net/v2/jpg/02/32/31/06/1000_F_232310636_dYP4kJZPyuh4ztrjBF86MjSMHDj3gVrA.jpg"
                      alt="Carousel Image"
                    />
                  </div>
                </div>
                <div class="col-md-7">
                  <div class="section-header">
                    <h2>Have A Questions?</h2>
                  </div>
                  <div id="accordion">
                    <div class="card">
                      <div class="card-header">
                        <a
                          class="card-link collapsed"
                          data-toggle="collapse"
                          href="#collapseOne"
                          aria-expanded="true"
                        >
                          <span>1</span> Lorem ipsum dolor sit amet?
                        </a>
                      </div>
                      <div
                        id="collapseOne"
                        class="collapse show"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec pretium mi. Curabitur facilisis
                          ornare velit non.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header">
                        <a
                          class="card-link"
                          data-toggle="collapse"
                          href="#collapseTwo"
                        >
                          <span>2</span> Lorem ipsum dolor sit amet?
                        </a>
                      </div>
                      <div
                        id="collapseTwo"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec pretium mi. Curabitur facilisis
                          ornare velit non.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header">
                        <a
                          class="card-link"
                          data-toggle="collapse"
                          href="#collapseThree"
                        >
                          <span>3</span> Lorem ipsum dolor sit amet?
                        </a>
                      </div>
                      <div
                        id="collapseThree"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec pretium mi. Curabitur facilisis
                          ornare velit non.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header">
                        <a
                          class="card-link"
                          data-toggle="collapse"
                          href="#collapseFour"
                        >
                          <span>4</span> Lorem ipsum dolor sit amet?
                        </a>
                      </div>
                      <div
                        id="collapseFour"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec pretium mi. Curabitur facilisis
                          ornare velit non.
                        </div>
                      </div>
                    </div>
                    <div class="card">
                      <div class="card-header">
                        <a
                          class="card-link"
                          data-toggle="collapse"
                          href="#collapseFive"
                        >
                          <span>5</span> Lorem ipsum dolor sit amet?
                        </a>
                      </div>
                      <div
                        id="collapseFive"
                        class="collapse"
                        data-parent="#accordion"
                      >
                        <div class="card-body">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Phasellus nec pretium mi. Curabitur facilisis
                          ornare velit non.
                        </div>
                      </div>
                    </div>
                  </div>
                  <a class="btn" href="">
                    Ask more
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="feature">
            <div class="container">
              <div class="row">
                <div class="col-md-7">
                  <div class="section-header">
                    <h2>Pre Trial</h2>
                  </div>
                  <div class="row align-items-center feature-item">
                    <div class="col-5">
                      <div class="feature-icon">
                        <img
                          onClick={openWebsite}
                          src="https://www.caspianservices.net/wp-content/uploads/2013/08/partner-livechat.jpg"
                          alt="Carousel Image"
                        />
                      </div>
                    </div>
                    <div class="col-7">
                      <h3 onClick={openWebsite}>Live Chat</h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium
                        mi. Curabitur facilisis ornare velit non vulputate.
                      </p>
                    </div>
                  </div>
                  <div class="row align-items-center feature-item">
                    <div class="col-5">
                      <div class="feature-icon">
                        <img
                          src="https://images.ctfassets.net/cpumif18y1gd/3eKQDniB5cF9tuAtyRuAfN/3929339d8379f3ebd396452352eba415/wordpress-imported-image-26125.jpg"
                          onClick={openWebsite1}
                          alt="Carousel Image"
                        />
                      </div>
                    </div>
                    <div class="col-7">
                      <h3 onClick={openWebsite1}>Video Conference</h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium
                        mi. Curabitur facilisis ornare velit non vulputate.
                      </p>
                    </div>
                  </div>
                  <div class="row align-items-center feature-item">
                    <div class="col-5">
                      <div class="feature-icon">
                        <img
                          src="https://www.online-tech-tips.com/wp-content/uploads/2019/03/locations-on-map.png"
                          alt="Carousel Image"
                        />
                      </div>
                    </div>
                    <div class="col-7">
                      <h3>Share Your locations</h3>
                      <p>
                        Lorem ipsum dolor sit amet elit. Phasellus nec pretium
                        mi. Curabitur facilisis ornare velit non vulputate.
                      </p>
                    </div>
                  </div>
                </div>
                <div class="col-md-5">
                  <div class="feature-img">
                    <img
                      src="https://www.myfloridalaw.com/wp-content/uploads/2013/06/steps-in-criminal-case-florida.jpg"
                      alt="Carousel Image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="testimonial"></div>

          <div class="blog"></div>

          <div class="newsletter">
            <div class="container">
              <div class="section-header">
                <h2>Subscribe Our Newsletter</h2>
              </div>
              <div class="form">
                <input class="form-control" placeholder="Email here" />
                <button class="btn">Submit</button>
              </div>
            </div>
          </div>

          <div class="footer">
            <div class="container">
              <div class="row">
                <div class="col-md-6 col-lg-4">
                  <div class="footer-about">
                    <h2>About Us</h2>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Quisque eu lectus a leo tristique dictum nec non quam.
                      Suspendisse convallis, tortor eu placerat rhoncus, lorem
                      quam iaculis felis, sed eleifend lacus neque id eros.
                      Integer convallis volutpat neque
                    </p>
                  </div>
                </div>
                <div class="col-md-6 col-lg-8">
                  <div class="row">
                    <div class="col-md-6 col-lg-4">
                      <div class="footer-link">
                        <h2>Services Areas</h2>
                        <a href="">Civil Law</a>
                        <a href="">Family Law</a>
                        <a href="">Business Law</a>
                        <a href="">Education Law</a>
                        <a href="">Immigration Law</a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                      <div class="footer-link">
                        <h2>Useful Pages</h2>
                        <a href="">About Us</a>
                        <a href="">Practices</a>
                        <a href="">Attorneys</a>
                        <a href="">Case Studies</a>
                        <a href="">FAQs</a>
                      </div>
                    </div>
                    <div class="col-md-6 col-lg-4">
                      <div class="footer-contact">
                        <h2>Get In Touch</h2>
                        <p>
                          <i class="fa fa-map-marker-alt"></i>123 Street, New
                          York, USA
                        </p>
                        <p>
                          <i class="fa fa-phone-alt"></i>+012 345 67890
                        </p>
                        <p>
                          <i class="fa fa-envelope"></i>info@example.com
                        </p>
                        <div class="footer-social">
                          <a href="">
                            <i class="fab fa-twitter"></i>
                          </a>
                          <a href="">
                            <i class="fab fa-facebook-f"></i>
                          </a>
                          <a href="">
                            <i class="fab fa-youtube"></i>
                          </a>
                          <a href="">
                            <i class="fab fa-instagram"></i>
                          </a>
                          <a href="">
                            <i class="fab fa-linkedin-in"></i>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="container footer-menu">
              <div class="f-menu">
                <a href="">Terms of use</a>
                <a href="">Privacy policy</a>
                <a href="">Cookies</a>
                <a href="">Help</a>
                <a href="">FQAs</a>
                <a onClick={userlogout}>LogOut</a>
              </div>
            </div>
            <div class="container copyright">
              <div class="row">
                <div class="col-md-6">
                  <p>
                    &copy;{" "}
                    <a href="https://htmlcodex.com/law-firm-website-template">
                      HTML Codex
                    </a>
                    , All Right Reserved.
                  </p>
                </div>
                <div class="col-md-6">
                  <p>
                    Designed By <a href="https://htmlcodex.com">HTML Codex</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Details;
