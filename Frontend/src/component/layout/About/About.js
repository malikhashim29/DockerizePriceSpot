import React from "react";
import "./aboutSection.css";
// import {  Typography, Avatar } from "@material-ui/core";
import YouTubeIcon from "@material-ui/icons/YouTube";
import InstagramIcon from "@material-ui/icons/Instagram";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
const About = () => {
  const visitInstagram = () => {
    window.location = "https://instagram.com/";
  };
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>;
  return (
    <section style={{ color: "whitesmoke" }}>
      <Card className="aboutCard" sx={{ minWidth: 275 }}>
        <br />
        <br />
        <br />
        <CardContent className="color">
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography
            variant="h4"
            component="div"
            style={{ display: "flex", justifyContent: "center" }}
          >
            About Dockerize PriceSpot
          </Typography>
          <Typography
            style={{ display: "flex", justifyContent: "center" }}
            sx={{ mb: 1.5 }}
            color="text.secondary"
          ></Typography>
          <Typography
            variant="body2"
            style={{
              display: "flex",
              justifyContent: "center",
              fontSize: "1.5rem",
              fontWeight: "bold",
              fontFamily: "popins",
            }}
          >
            Faiz and Hashim are the proud owners of a marketing company that
            specializes in the sale of mobile phones and laptops.
            <br />
            The company is a well-known name in the market and has earned an
            excellent reputation for its quality products, exceptional <br />
            customer service, and competitive prices.The company has been in
            operation for several years, and under the leadership of <br /> Faiz
            and Hashim, it has grown and expanded considerably. They have a team
            of skilled and experienced professionals who are
            <br /> committed to providing the best products and services to
            their customers. Their customer-centric approach has been a
            significant
            <br /> factor in their success, and they have earned the trust and
            loyalty of their clients.Faiz and Hashim's marketing company is a
            shining <br /> example of what can be achieved with dedication, hard
            work, and a commitment to excellence. Their passion for providing
            high-quality
            <br /> products and services has earned them a loyal customer base
            and a well-deserved reputation for excellence in the market
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className="marginright">
            Contact us: +92 331 5576075
          </Button>
        </CardActions>
        <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br /> <br />
        <br />
        <br />
      </Card>
    </section>
    // <div className="aboutSection">
    //   {/* <div></div>
    //   <div className="aboutSectionGradient"></div> */}
    //   <div className="aboutSectionContainer">
    //     <Typography component="h1">About Dockerize PriceSpot</Typography>

    //     <div>
    //       <div>
    //         {/* <Avatar src="../../../public/Profile.png" alt="" />
    //         <Typography>Malik M Hashim</Typography> */}
    //         <span className="fs">
    //           Faiz and Hashim are the proud owners of a marketing company that
    //           specializes in the sale of mobile phones and laptops. The company
    //           is a well-known name in the market and has earned an excellent
    //           reputation for its quality products, exceptional customer service,
    //           and competitive prices.The company has been in operation for
    //           several years, and under the leadership of Faiz and Hashim, it has
    //           grown and expanded considerably. They have a team of skilled and
    //           experienced professionals who are committed to providing the best
    //           products and services to their customers. Their customer-centric
    //           approach has been a significant factor in their success, and they
    //           have earned the trust and loyalty of their clients.Faiz and
    //           Hashim's marketing company is a shining example of what can be
    //           achieved with dedication, hard work, and a commitment to
    //           excellence. Their passion for providing high-quality products and
    //           services has earned them a loyal customer base and a well-deserved
    //           reputation for excellence in the market
    //         </span>
    //         <h3>Contact us: +92 331 5576075</h3>
    //         <Button onClick={visitInstagram} color="primary"></Button>
    //       </div>
    //       <div className="aboutSectionContainer2">
    //         <Typography component="h2">Our Brands</Typography>
    //         <a href="https://www.youtube.com/" target="blank">
    //           <YouTubeIcon className="youtubeSvgIcon" />
    //         </a>

    //         <a href="https://instagram.com/" target="blank">
    //           <InstagramIcon className="instagramSvgIcon" />
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  );
};

export default About;
