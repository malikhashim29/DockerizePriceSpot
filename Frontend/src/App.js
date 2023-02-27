import "./App.css";
import { useEffect, useState } from "react";
import Header from "./component/layout/Header/Header.js";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import WebFont from "webfontloader";
import React from "react";
import Footer from "./component/layout/Footer/Footer";
import Home from "./component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import Products from "./component/Product/Products";
import Search from "./component/Product/Search";
import LoginSignUp from "./component/User/LoginSignUp";
import store from "./store";
import { loadUser } from "./actions/userAction";
import UserOptions from "./component/layout/Header/UserOptions";
import { useSelector } from "react-redux";
import Profile from "./component/User/Profile";
import ProtectedRoute from "./component/Route/ProtectedRoute";
import UpdateProfile from "./component/User/UpdateProfile";
import UpdatePassword from "./component/User/UpdatePassword";
import ForgotPassword from "./component/User/ForgotPassword";
import ResetPassword from "./component/User/ResetPassword";
import Cart from "./component/Cart/Cart";
import Shipping from "./component/Cart/Shipping";
import ConfirmOrder from "./component/Cart/ConfirmOrder";
import axios from "axios";
import Payment from "./component/Cart/Payment";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import OrderSuccess from "./component/Cart/OrderSuccess";
import MyOrders from "./component/Order/MyOrders";
import OrderDetails from "./component/Order/OrderDetails";
import Dashboard from "./component/Admin/Dashboard.js";
import VendorDashboard from "./component/Vendor/Dashboard.js"; //vendor
import ProductList from "./component/Admin/ProductList.js";
import NewProduct from "./component/Admin/NewProduct";
import UpdateProduct from "./component/Admin/UpdateProduct";
import OrderList from "./component/Admin/OrderList";
import ProcessOrder from "./component/Admin/ProcessOrder";
import UsersList from "./component/Admin/UsersList";
import UpdateUser from "./component/Admin/UpdateUser";
import ProductReviews from "./component/Admin/ProductReviews";
import Contact from "./component/layout/Contact/Contact";
import About from "./component/layout/About/About";
import NotFound from "./component/layout/Not Found/NotFound";
import UpdatedFooter from "./component/layout/UpdatedFooter/UpdatedFooter";

function App() {
  const { isAuthenticated, user } = useSelector((state) => state.user);

  const [stripeApiKey, setStripeApiKey] = useState("");

  async function getStripeApiKey() {
    const { data } = await axios.get("/api/v1/stripeapikey");

    setStripeApiKey(data.stripeApiKey);
  }

  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "Chilanka"],
      },
    });

    store.dispatch(loadUser());

    getStripeApiKey();
  }, []);

  // window.addEventListener("contextmenu", (e) => e.preventDefault());

  return (
    <>
      <Router>
        <Header />

        {isAuthenticated && <UserOptions user={user} />}

        {stripeApiKey && (
          <Elements stripe={loadStripe(stripeApiKey)}>
            <Route exact path="/process/payment" component={Payment} />
          </Elements>
        )}

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/product/:id" component={ProductDetails} />
          <Route exact path="/products" component={Products} />
          <Route path="/products/:keyword" component={Products} />

          <Route exact path="/search" component={Search} />

          <Route exact path="/contact" component={Contact} />

          <Route exact path="/about" component={About} />

          <Route exact path="/account" component={Profile} />

          <Route exact path="/me/update" component={UpdateProfile} />

          <Route exact path="/password/update" component={UpdatePassword} />

          <Route exact path="/password/forgot" component={ForgotPassword} />

          <Route exact path="/password/reset/:token" component={ResetPassword} />

          <Route exact path="/login" component={LoginSignUp} />

          <Route exact path="/cart" component={Cart} />

          <Route exact path="/shipping" component={Shipping} />

          <Route exact path="/success" component={OrderSuccess} />

          <Route exact path="/orders" component={MyOrders} />

          <Route exact path="/order/confirm" component={ConfirmOrder} />

          <Route exact path="/order/:id" component={OrderDetails} />

          <Route exact path="/vendor/dashboard" component={VendorDashboard} />

          <Route exact path="/admin/dashboard" component={Dashboard} />

          <Route exact path="/admin/products" component={ProductList} />
          <Route exact path="/admin/product" component={NewProduct} />

          <Route exact path="/admin/product/:id" component={UpdateProduct} />
          <Route exact path="/admin/orders" component={OrderList} />

          <Route exact path="/admin/order/:id" component={ProcessOrder} />
          <Route exact path="/admin/users" component={UsersList} />

          <Route exact path="/admin/user/:id" component={UpdateUser} />

          <Route exact path="/admin/reviews" component={ProductReviews} />

          <Route
          // component={
          //   window.location.pathname === "/process/payment" ? null : NotFound
          // }
          />
        </Switch>

        {/* <Footer /> */}
        <UpdatedFooter />

        {/* WhatsApp icon */}
        <a
          href="https://wa.me/923455240889"
          className="whatsapp_float"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i class="fa fa-whatsapp whatsapp-icon"></i>
        </a>
      </Router>
    </>
  );
}

export default App;
