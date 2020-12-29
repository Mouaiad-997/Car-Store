import React, { Component } from "react";
import axios from "axios";
import Header from "../../component/pages/header"
import Footer from "../../component/pages/footer";
import wallpaper from "../../images/hero_2.jpg";
import { Link } from "react-router-dom";

export default class Sell extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      sale_price: "",
      buyer_name: "",
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
    var token = localStorage.getItem("Token");
    console.log(token)
    axios
      .post(
        "http://192.168.43.124:8080/api/cars/" + this.state.id,
        this.state,
        {
          headers: { Authorization: token },
        }
      )
      .then((response) => {
        var message = "Car is Sold"
        document.getElementById("alert").innerHTML = `<div class="alert alert-primary" role="alert">
        ${message}
      </div>`;
     
      });
  };
  render() {
    const { id , buyer_name, sale_price } = this.state;
    return (
      <div>
          <Header></Header>
              <div class="ftco-blocks-cover-1" >
                    <div class="ftco-cover-1 overlay" style={{ backgroundImage: `url(${wallpaper})` }}>
                        <div class="container">
                            <div class="row align-items-center">
                                <div class="col-lg-5">

                                </div>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                    
                </div>
                <br></br>
        <form onSubmit={this.submitHandler}>
          <div class="form-group">
            <label for="exampleInputEmail1">ID: </label>
            <input
              type="text"
              class="form-control car-name"
              id="exampleInputEmail1 car-name"
              aria-describedby="emailHelp"
              name="id"
              value={id}
              onChange={this.changeHandler}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">buyerName: </label>
            <input
              type="text"
              class="form-control car-name"
              id="exampleInputEmail1 car-name"
              aria-describedby="emailHelp"
              name="buyer_name"
              value={buyer_name}
              onChange={this.changeHandler}
            />
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">sellPrice: </label>
            <input
              type="text"
              class="form-control factory-model"
              id="exampleInputPassword1 factory-model"
              name="sale_price"
              value={sale_price}
              onChange={this.changeHandler}
            />
          </div>
          <button type="submit" class="btn btn-outline-primary">
            <i class="fas fa-clipboard-check"></i> Sell
          </button>
        </form>
        <div id="alert" name="alert" class="alert" > </div>
          <Link to="/home"> Go To Main Page </Link>
        <br></br>
        <br></br>
      <Footer></Footer>
      </div>
    );
  }
}