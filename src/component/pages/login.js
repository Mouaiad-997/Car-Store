import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import wallpaper from "../../images/post_1.jpg";
import "../../css/bootstrap.min.css";
import "../../css/bootstrap-datepicker.css";
import "../../css/jquery.fancybox.min.css";
import "../../css/owl.theme.default.min.css";
import "../../css/aos.css";
import "../../css/style.css";
import Home from './home';
import { Link } from "react-router-dom";
import ReactDOM from "react-dom";
import { useHistory } from "react-router-dom";

import axios from "axios";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";


export default class login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: "",

        };
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        });
    };


    submitHandler = (e) => {
        e.preventDefault();
        console.log(this.state);
        axios
            .post("http://192.168.43.124:8080/login", this.state)
            .then((response) => {
                console.log(response)
                if (response.status === 200) {
                    console.log("ok");
                    var Token = "Bearer " + response.data;
                    localStorage.setItem("Token", Token);
                    this.props.history.push('/home')
                }
            })
            .catch((error) => {
                var message = "User Not Found"
                document.getElementById("alert").innerHTML = `<div class="alert alert-danger" role="alert">
                ${message}
              </div>`;
            });
    };



    render() {
        const { username, password } = this.state;

        return (<div>

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
                                    <a href="home">Car Sell</a>
                                </div>
                            </div>
                            <div class="col-9  text-right">
                                <span class="d-inline-block d-lg-none"><a href="#" class="text-white site-menu-toggle js-menu-toggle py-5 text-white"><span class="icon-menu h3 text-white"></span></a></span>
                            </div>
                        </div>
                    </div>
                </header>
                <div class="ftco-blocks-cover-1">
                    <div class="ftco-cover-1 overlay innerpage" style={{ backgroundImage: `url(${wallpaper})` }}>
                        <div class="container">
                            <div class="row align-items-center justify-content-center">
                                <div class="col-lg-6 text-center">
                                    <h1 style={{ marginRight: '200px', marginTop: '80px;' }} >Login Form</h1>
                                    <div class="row">
                                        <div class="col-lg-8 mb-5" >
                                            <form action="#" method="post" onSubmit={this.submitHandler}>


                                                <div class="form-group row">
                                                    <div class="col-md-12">
                                                        <input type="text" class="form-control" placeholder="User Name" name="username"
                                                            value={username}
                                                            onChange={this.changeHandler} />
                                                    </div>
                                                </div>

                                                <div class="form-group row">
                                                    <div class="col-md-12">
                                                        <input type="password" class="form-control" placeholder="Password" name="password"
                                                            value={password}
                                                            onChange={this.changeHandler} />

                                                    </div>

                                                </div>

                                                <div class="forgot-password"><a href="#" style={{ color: "blanchedalmond;" }}>Forgot Password ?</a></div>
                                                <div class="form-group row">
                                                    <div class="col-md-6 mr-auto">
                                                        <button type="submit" class="btn btn-primary">
                                                            <i class="fas fa-clipboard-check" ></i> Submit</button>
                                                    </div>
                                                    <div style={{ color: "blanchedalmond" }} class="signup">Not A Member?
              <Link to="/singin">Signin Now</Link>
                                                        <div id="alert" name="alert" class="alert"></div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>)
    }
}

