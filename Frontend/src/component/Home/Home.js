import React, { Fragment, useEffect } from "react";
import { CgMouse } from "react-icons/all";
import "./Home.css";
import ProductCard from "./ProductCard.js";
import MetaData from "../layout/MetaData";
import { clearErrors, getProduct } from "../../actions/productAction";
import { useSelector, useDispatch } from "react-redux";
import Loader from "../layout/Loader/Loader";
import { useAlert } from "react-alert";

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
          <MetaData title="ECOMMERCE" />

          <div className="banner">
            <p>Welcome to Dockerize Price Spot</p>
            <h1>FIND AMAZING PRODUCTS BELOW</h1>

            <a href="#container">
              <button>
                Scroll <CgMouse />
              </button>
            </a>
          </div>  
          <br></br>
          <br></br>
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
            Dockerize PriceSpot that is mainly developed for providing comfort and ease to people by facilitating them to achieve their goals in one touch access. Normally people must go out to Accessories or other similar products and mostly they are out for work and females have to get this headache. Sometimes they don’t feel secure and safe to go out for shopping. It will also help the customers to check price of every item online and they can easily check product availability, so it makes easy for them to check everything on our platform. Our system depends upon the places where internet service is available. This system also helps the people and especially females who are afraid of stepping out for buying items and gives a paperless process greatly reducing human labor, which is of the utmost need in these modern times.
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
    </Fragment>
  );
};

export default Home;
