import React from "react";
import "./Contact.css";
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import { Button } from "@material-ui/core";
// import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Contact = () => {
  return (
    <>
      <section>
        <div className="contact">
          <h1 className="boldsize">Dockerize PriceSpot.</h1>
          <br /> <br /> <br />
          <h4 className="boldsize1">DOWNLOAD Dockerize PriceSpot APP</h4>
          <br></br>
          <div className="leftFooter">
            <img src={playStore} alt="playstore" />
            <br></br>
            <img src={appStore} alt="Appstore" />
          </div>
          <a className="mailBtn" href="mailto:dockerizeEcommerce@gmail.com">
            <Button className="MuiButton-label">
              Contact: dockerizePriceSpot@gmail.com
            </Button>
          </a>
        </div>
      </section>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="../../../public/Profile.png" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card> */}
    </>
  );
};

export default Contact;
