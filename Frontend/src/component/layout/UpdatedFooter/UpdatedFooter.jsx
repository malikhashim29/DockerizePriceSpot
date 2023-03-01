import React from "react";
import "../Footer/Footer.css";
import { MDBContainer, MDBRow, MDBCol, MDBIcon } from "mdb-react-ui-kit";
import logo from "../../../images/PriceSpo.png";
const UpdatedFooter = () => {
  return (
    <>
      <div
        bgColor="light"
        className="text-center text-lg-start text-muted"
        style={{
          backgroundColor: " rgba(15, 15, 15, 0.26)",
        }}
      >
        <section
          className=""
          style={{
            backgroundColor: " rgba(15, 15, 15, 0.26)",
          }}
        >
          <br />
          <MDBContainer className="text-center text-md-start mt-5">
            <br />
            <MDBRow className="mt-3">
              <MDBCol className="mx-auto mb-md-0 mb-4">
                <div className="logoTopp">
                  <img src={logo} alt="logo" />
                </div>
                <br />
                <p className="whiteColor ">
                  <MDBIcon
                    icon="home"
                    className="me-2"
                    style={{ color: "white" }}
                  />{" "}
                  &nbsp; &nbsp; Islamabad,Pakistan
                </p>{" "}
                <br />
                <p className="whiteColor ">
                  <MDBIcon
                    icon="envelope"
                    className="me-3"
                    style={{ color: "white" }}
                  />{" "}
                  &nbsp; &nbsp; dockerize@gmail.com
                </p>{" "}
                <br />
                <p className="whiteColor ">
                  <MDBIcon
                    icon="phone"
                    className="me-3"
                    style={{ color: "white" }}
                  />{" "}
                  &nbsp; &nbsp; +92 331 5576075
                </p>{" "}
                <br />
              </MDBCol>
            </MDBRow>
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;{" "}
            <MDBRow className="mt-3">
              <MDBCol className="mx-auto mb-md-0 mb-4">
                <h2
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "white" }}
                >
                  Company
                </h2>
                <br />
                <p className="whiteColor ">
                  <MDBIcon className="me-2" style={{ color: "white" }} />{" "}
                  Dockerize
                </p>{" "}
                <br />
                <p className="whiteColor ">
                  <MDBIcon className="me-3" style={{ color: "white" }} /> Online
                  sell
                </p>{" "}
                <br />
                <p className="whiteColor ">
                  <MDBIcon className="me-3" style={{ color: "white" }} /> App
                  store
                </p>{" "}
                <br />
              </MDBCol>
            </MDBRow>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;{" "}
            <MDBRow className="mt-3">
              <MDBCol md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
                <h2
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "white" }}
                >
                  Services
                </h2>
                <br />
                <p className="whiteColor ">
                  <MDBIcon
                    icon="mobile"
                    className="me-2"
                    style={{ color: "white" }}
                  />
                  &nbsp; Mobile
                </p>{" "}
                <br />
                <p className="whiteColor ">
                  <MDBIcon
                    icon="mobile"
                    className="me-3"
                    style={{ color: "white" }}
                  />
                  &nbsp; Iphones
                </p>{" "}
                <br />
                <p className="whiteColor ">
                  <MDBIcon
                    icon="mobile"
                    className="me-3"
                    style={{ color: "white" }}
                  />
                  &nbsp; Samsung
                </p>{" "}
                <br />
                <p className="whiteColor ">
                  <MDBIcon
                    icon="laptop"
                    className="me-3"
                    style={{ color: "white" }}
                  />
                  &nbsp; Laptops
                </p>{" "}
                <br />
              </MDBCol>
            </MDBRow>{" "}
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
            &nbsp; &nbsp;{" "}
            <MDBRow className="mt-3">
              <MDBCol className="mx-auto mb-4">
                <h2
                  className="text-uppercase fw-bold mb-4"
                  style={{ color: "white" }}
                >
                  Products
                </h2>
                <br />
                <p className="whiteColor ">
                  <a className="text-reset clr">Iphones</a>
                </p>{" "}
                <br />
                <p className="whiteColor ">
                  <a className="text-reset clr">Samsungs</a>
                </p>{" "}
                <br />
                <p className="whiteColor ">
                  <a className="text-reset clr">Mobiles</a>
                </p>{" "}
                <br />
                <p className="whiteColor ">
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
            <strong> Dockerize</strong>
          </a>
        </div>
      </div>
    </>
  );
};

export default UpdatedFooter;
