import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import "../../css/bootstrap.min.css";
import "../../css/bootstrap-datepicker.css";
import "../../css/jquery.fancybox.min.css";
import "../../css/owl.theme.default.min.css";
import "../../css/aos.css";
import "../../css/style.css";

  export default class header extends Component {
    render() {
        return (
        
  

  <div class="site-wrap" id="home-section">

  <div class="site-mobile-menu site-navbar-target">
    <div class="site-mobile-menu-header">
      <div class="site-mobile-menu-close mt-3">
        <span class="icon-close2 js-menu-toggle"></span>
      </div>
    </div>
    <div class="site-mobile-menu-body"></div>
  </div>



  <header class="site-navbar site-navbar-target" role="banner">

    <div class="container">
      <div class="row align-items-center position-relative">

        <div class="col-3 ">
          <div class="site-logo">
            <a href="index.html">Car Sell</a>
          </div>
        </div>

        <div class="col-9  text-right">


          <span class="d-inline-block d-lg-none"><a href="#"
              class="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span
                class="icon-menu h3 text-white"></span></a></span>



          <nav class="site-navigation text-right ml-auto d-none d-lg-block" role="navigation">


            <ul class="site-menu main-menu js-clone-nav ml-auto ">
              <li><a href="home" class="nav-link">Home</a></li>
              <li ><a href="addcar" class="nav-link">Add Car</a></li>
              <li><a href="addparameter" class="nav-link">Add Parameter</a></li>
              <li><a href="inventory" class="nav-link">Get Parameter</a></li>
              <li><a href="login" class="nav-link">Logout</a></li>
              {/* <li><a href="about.html" class="nav-link">About</a></li>
              <li><a href="blog.html" class="nav-link">Blog</a></li>
              <li><a href="contact.html" class="nav-link">Contact</a></li> */}
            </ul>
          </nav>

        </div>


      </div>
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <br></br>
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">
        <i class="fas fa-search"></i> Search
      </button>
      </div>
   
  </header>
  </div>

)
}
}
