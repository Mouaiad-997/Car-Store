import React from 'react';
import { Component } from 'react/cjs/react.production.min';
import wallpaper from '../../images/post_1.jpg';
import "../../css/bootstrap.min.css";
import "../../css/bootstrap-datepicker.css";
import "../../css/jquery.fancybox.min.css";
import "../../css/owl.theme.default.min.css";
import "../../css/aos.css";
import "../../css/style.css";
import { Link } from "react-router-dom";
import axios from "axios";

  export default class singin extends Component {
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
        .post("http://192.168.43.124:8080/api/register", this.state)
        .then((response) => {console.log(response)
          var message = "User is Added"
          document.getElementById("alert").innerHTML = `<div class="alert alert-primary" role="alert">
          ${message}
        </div>`;
        
        })
        .catch((error) => {console.log(error)});
    };
    render() {
      const { username, password} = this.state;
        return (
          
        
 <div class="ftco-blocks-cover-1">
        <div class="ftco-cover-1 overlay innerpage"style={{ backgroundImage: `url(${wallpaper })` }} >
          <div class="container">
            <div class="row align-items-center justify-content-center">
              
              <div   class="col-lg-6 text-center">
                  

                <h1  style={{marginRight: '200px'}}>Singin Form</h1>
                <form action="#" method="post" onSubmit={this.submitHandler}>
        <div class="row">
            <div class="col-lg-8 mb-5" >
         
                    <div class="form-group">
                     <input type="text" class="form-control firstname" id="firstname" placeholder="Type Your Name"   name="username"
              value={username}
              onChange={this.changeHandler} required/>
                    </div>
                  
                    
                   
                   
                           
                             <div class="form-group">
                          
                              <input type="text" class="form-control" id="password" placeholder="Type Your password"  name="password"
              value={password}
              onChange={this.changeHandler} required/>
                             </div>
                             
                             
                                <div class="col">
                                    <br/>
                                    <button type="submit" class="btn btn-primary">
            <i class="fas fa-clipboard-check"></i> Submit Information
          </button>
          <div id="alert" name="alert" class="alert"></div>
          <Link to="/login">Login Now</Link>
                                </div>
                          
                          </div>
                </div>
          
        </form>
    
              </div>
            </div>
          </div>
        </div>
      </div>
    

    )
    }
}

