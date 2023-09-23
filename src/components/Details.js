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
                      <img
                        src="data:image/jpeg;base64,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"
                        alt="Carousel Image"
                      />
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
                      <img
                        src="https://www.pewtrusts.org/-/media/post-launch-images/2020/05/debt-collectors/courtcollectorcover_900px.png?h=346&w=615&la=es&hash=E6CC6C3F730866450A6C8D3174418DED"
                        alt="Carousel Image"
                      />
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
                      <img
                        src="https://e0.365dm.com/22/12/2048x1152/skysports-argentina-lionel-messi_6000530.jpg"
                        alt="Carousel Image"
                      />
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
          <div class="feature" href="">
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
                          src="data:image/jpeg;base64,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"
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
