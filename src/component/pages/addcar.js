import React, { Component } from "react";
import Header from "../../component/pages/header"
import Footer from "../../component/pages/footer"
import hero_2 from "../../images/hero_2.jpg";
import axios from "axios";
import { Link } from "react-router-dom";
export default class addcar extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      seats: "",
      price: "",
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
    var token = localStorage.getItem("Token")
    console.log(token)
    axios.post("http://192.168.43.124:8080/api/cars", this.state, {
      headers: {
        "Authorization": token  //the token is a variable which holds the token
      }
    })
      .then((response) => { console.log(response)
         var message = "Car is Added"
      document.getElementById("alert").innerHTML = `<div class="alert alert-primary" role="alert">
      ${message}
    </div>`; })
  };
  render() {
    const { name, seats, price } = this.state;
    return (<div>
      <Header></Header>

      <div class="ftco-blocks-cover-1">
        <div class="ftco-cover-1 overlay innerpage" style={{ backgroundImage: `url(${hero_2})` }}>
          <div class="container">
            <div class="row align-items-center justify-content-center">
              <div class="col-lg-6 text-center">
                <h1>Add Car</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>


      <form style={{ marginLeft: '370px' }} method="post" onSubmit={this.submitHandler}>
        <div class="row">
          <div class="col-lg-8 mb-5" >

            <div class="form-group">
              <input type="text" class="form-control firstname"  name="name" placeholder="Type The Name Of Car"
                value={name}
                onChange={this.changeHandler} required />
            </div>
            <div class="form-group">

              <input type="text" class="form-control" placeholder="Type The Seats" name="seats"
                value={seats}
                onChange={this.changeHandler} />
            </div>

            <div class="form-group">

              <input type="text" class="form-control" placeholder="Type The Price" name="price"
                value={price}
                onChange={this.changeHandler} required />
            </div>


            <div class="col">
              <br />
              <button type="submit" class="btn btn-primary">
                <i class="fas fa-clipboard-check"></i> Submit Information
          </button>
          <div id="alert" name="alert" class="alert" > </div>
          <Link to="/home">Go To Main Page </Link>

            </div>

          </div>
        </div>

      </form>

      <Footer></Footer>
    </div>)
  }
}