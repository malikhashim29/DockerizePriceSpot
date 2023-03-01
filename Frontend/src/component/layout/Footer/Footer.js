import React from "react";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import {
  MDBFooter,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
} from "mdb-react-ui-kit";
import logo from "../../../images/PriceSpot.png";

const Footer = () => {
  return (
    // <footer id="footer">
    //   <div className="leftFooter">
    //     <h4>DOWNLOAD Dockerize PriceSpot APP</h4>
    //     {/* <p>Download App for Android and IOS mobile phone</p> */}
    //     <img src={playStore} alt="playstore" />
    //     <img src={appStore} alt="Appstore" />
    //   </div>

    //   <div className="midFooter">
    //     <h1>Dockerize PriceSpot.</h1>
    //     <p>High Quality is our first priority</p>

    //     <p>Copyrights 2021 &copy; Dockerize PriceSpot</p>
    //   </div>

    //   <div className="rightFooter">
    //     <h5>Follow Us</h5>
    //     <i class="bi-whatsapp"></i>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       width="16"
    //       height="16"
    //       fill="currentColor"
    //       class="bi bi-telephone"
    //       viewBox="0 0 16 16"
    //     >
    //       <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
    //     </svg>
    //     <a href="http://instagram.com/">Instagram</a>
    //     <i class="bi bi-telephone"></i>
    //     <a href="http://youtube.com/">Youtube</a>
    //     <a href="http://instagram.com/">Facebook</a>
    //   </div>
    // </footer>
    <MDBFooter bgColor="light" className="text-center text-lg-start text-muted">
      <section className="">
        <MDBContainer className="text-center text-md-start mt-5">
          <MDBRow className="mt-3">
            <MDBCol className="mx-auto mb-md-0 mb-4">
              <div className="logoTopp">
                <img src={logo} alt="logo" />
              </div>
              <br />
              <p>
                <MDBIcon icon="home" className="me-2" /> &nbsp; &nbsp; Islamabad, Pakistan
              </p>{" "}
              <br />
              <p>
                <MDBIcon icon="envelope" className="me-3" /> &nbsp; &nbsp;
                dockerizepricespot@gmail.com
              </p>{" "}
              <br />
              <p>
                <MDBIcon icon="phone" className="me-3" /> &nbsp; &nbsp; +92 331 5576075
                
              </p>{" "}
              <br />
            </MDBCol>
          </MDBRow>
          <MDBRow className="mt-3">
            <MDBCol className="mx-auto mb-md-0 mb-4">
              <h2 className="text-uppercase fw-bold mb-4">Company</h2>
              <br />
              <p>
                <MDBIcon className="me-2" /> Dockerize Website
              </p>{" "}
              <br />
              <p>
                <MDBIcon className="me-3" /> Online sell
              </p>{" "}
              <br />
              <p>
                <MDBIcon className="me-3" /> App store
              </p>{" "}
              <br />
            </MDBCol>
          </MDBRow>{" "}
          <MDBRow className="mt-3">
            <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h2 className="text-uppercase fw-bold mb-4">Services</h2>
              <br />
              <p>
                <MDBIcon icon="mobile" className="me-2" />
                &nbsp; Mobile
              </p>{" "}
              <br />
              <p>
                <MDBIcon icon="mobile" className="me-3" />
                &nbsp; Iphones
              </p>{" "}
              <br />
              <p>
                <MDBIcon icon="mobile" className="me-3" />
                &nbsp; Samsung
              </p>{" "}
              <br />
              <p>
                <MDBIcon icon="laptop" className="me-3" />
                &nbsp; Laptops
              </p>{" "}
              <br />
            </MDBCol>
          </MDBRow>{" "}
          <MDBRow className="mt-3">
            <MDBCol className="mx-auto mb-4">
              <h2 className="text-uppercase fw-bold mb-4">Products</h2>
              <br />
              <p>
                <a className="text-reset clr">Iphones</a>
              </p>{" "}
              <br />
              <p>
                <a className="text-reset clr">Samsungs</a>
              </p>{" "}
              <br />
              <p>
                <a className="text-reset clr">Mobiles</a>
              </p>{" "}
              <br />
              <p>
                <a className="text-reset clr">Laptops</a>
              </p>{" "}
              <br />
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div
        className="text-center p-4 align"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
      >
        © 2021 Copyright:
        <a className="text-reset fw-bold">
          <strong> DockerizePriceSpot</strong>
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;
