import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import logo from "../../images/DOCKEERIZE.png";
import logo1 from "../../images/front.jpg";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";
import Carousel from "react-material-ui-carousel";
import { Paper, Typography, Button } from "@mui/material";
import Footer from "../layout/Footer/Footer";
const Home = () => {
  const alert = useAlert();
  const dispatch = useDispatch();
  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <Fragment>
      {loading ? (
        <Loader />
      ) : (
        <Fragment>
          <MetaData title="PriceSpot" />
          <section className="height">
            <Carousel>
              <Paper>
                <Typography>
                  <div className="logoTop">
                    <img src={logo} alt="logo" />
                  </div>
                </Typography>
                {/* <Button variant="outlined">Click me please!</Button> */}
              </Paper>
              <Paper>
                <Typography>
                  <div className="logoTop1">
                    <img src={logo1} alt="logo" />
                  </div>
                </Typography>
                {/* <Button variant="outlined">Click me please!</Button> */}
              </Paper>
              <Paper>
                <Typography>
                  <div className="logoTop">
                    <img src={logo} alt="logo" />
                  </div>
                </Typography>
                {/* <Button variant="outlined"></Button> */}
              </Paper>
            </Carousel>
          </section>

          {/* <section className="sec1">
            <div className="sec1"></div>
            <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br /> <br />
            <br /> <br /> <br />
            <br /> <br /> <br />
            <br /> <br /> <br />
            <br /> <br /> <br />
            <br /> <br /> <br />
            <br /> <br /> <br />
            <br /> <br /> <br />
            <br /> <br /> <br />
          </section> */}
          {/* <div className="banner">
            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div> */}

          <div className="ban2">
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
          </div>

          <div className="ban1">
            <h2 className="homeHeading">ABSTRACT</h2>
            <p>
              Dockerize PriceSpot that is mainly developed for providing comfort
              and ease to people by facilitating them to achieve their goals in
              one touch access. Normally people must go out to Accessories or
              other similar products and mostly they are out for work and
              females have to get this headache. Sometimes they don’t feel
              secure and safe to go out for shopping. It will also help the
              customers to check price of every item online and they can easily
              check product availability, so it makes easy for them to check
              everything on our platform. Our system depends upon the places
              where internet service is available. This system also helps the
              people and especially females who are afraid of stepping out for
              buying items and gives a paperless process greatly reducing human
              labor, which is of the utmost need in these modern times.
            </p>
          </div>
          <br></br>
          <br></br>

          <h2 className="homeHeading">Featured Products</h2>

          <div className="container" id="container">
            {products &&
              products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
          </div>
        </Fragment>
      )}
      <Footer />
    </Fragment>
  );
};

export default Home;
