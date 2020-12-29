import React from 'react';
import { Component } from 'react/cjs/react.production.min';

import "../../css/bootstrap.min.css";
import "../../css/bootstrap-datepicker.css";
import "../../css/jquery.fancybox.min.css";
import "../../css/owl.theme.default.min.css";
import "../../css/aos.css";
import "../../css/style.css";
import { Link } from "react-router-dom";
import wallpaper from "../../images/hero_1.jpg";
import img_1 from "../../images/img_1.jpg";
import img_2 from "../../images/img_2.jpg";
import img_3 from "../../images/img_3.jpg";
import img_4 from "../../images/img_4.jpg";
import img_5 from "../../images/img_5.jpg";
import img_6 from "../../images/img_6.jpg";
import hero_2 from "../../images/hero_2.jpg";
import Header from "../../component/pages/header"
import Footer from "../../component/pages/footer";
import axios from "axios"

export default class home extends Component {
    state = {
        posts: [],
    };

    componentDidMount() {

        axios.get('http://192.168.43.124:8080/api/cars?sold=false', {
            headers: {
                "Authorization": 'Bearer ' + localStorage.getItem("Token")  //the token is a variable which holds the token
            }
        })
            .then((response) => {
                this.setState({
                    posts : response.data.response,
                    
                })
            });
    }
    submitHandler = (e) => {
        e.preventDefault();
        console.log(e.target.id)
       console.log(this.state);
        var token = localStorage.getItem("Token")
        console.log(token)
        
        axios.delete("http://192.168.43.124:8080/api/cars/"+e.target.id, {
          headers: {
            "Authorization": token  //the token is a variable which holds the token
          }
         
        })
          .then((response) => { console.log(response)
            window.location.href="/home"
           })
      };
    render() {
        const { posts } = this.state;
        console.log(posts);
        console.log(posts.name)
        const postList = posts.length ? (
            posts.map( (post) => {
                return (
    
           
                    <div class="col-lg-4 col-md-6 mb-4" key={post.id}>
                        <div class="item-1">
                            <a href="#"><img src={img_1} alt="Image" class="img-fluid" /></a>
                            <div class="item-1-contents">
                                <div class="text-center">
                                    <h3><a href="#">{post.name}</a></h3>
                                    <div class="rating">
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                        <span class="icon-star text-warning"></span>
                                    </div>
                                    <div class="rent-price">   <span>Price : </span> <span>{post.price} $</span></div>
        
                                </div>
                                <br></br>
                                <Link to={"/sell/" + post.id}   class="btn btn-secondary  ">Sell Car </Link>
                                <br></br>
                                <br></br>
                                <ul class="specs">
                            
                                    <li>
                                        <span style={{ marginRight: '250px' }} >Seats</span>
                                        <span class="spec">{post.seats} seat</span>
                                    </li>
                                
                                </ul>
                                <br></br>
                                <div class="d-flex action">
                                    <Link to={"/update/" + post.id} class="btn btn-primary     ">Update Car </Link>
                                  
                                    <button style={{ marginLeft: '95px' }} onClick={this.submitHandler} id={post.id} class="btn btn-danger">Delete Car</button>
                                 
                                </div>
                               
                            </div>
                        </div>
                    </div>
           

                );
            })
        ) : (
                <div>Error</div>
            );
        return (
            <div className="home">
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
                <div class="d-grid gap-2">
                <Link  to={"/sellcar"} type="button" class="btn btn-secondary btn-lg btn-block">Sold Cars</Link>
  
</div>

                <div class="site-section bg-light">
            <div class="container">
                <div class="row">
                {postList}
                     
                </div>
            </div>
        </div>


                <div class="container site-section mb-5">
                    <div class="row justify-content-center text-center">
                        <div class="col-7 text-center mb-5">
                            <h2>How it works</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo assumenda, dolorum necessitatibus eius earum voluptates sed!</p>
                        </div>
                    </div>
                    <div class="how-it-works d-flex">
                        <div class="step">
                            <span class="number"><span>01</span></span>
                            <span class="caption">Singin</span>
                        </div>
                        <div class="step">
                            <span class="number"><span>02</span></span>
                            <span class="caption">Login</span>
                        </div>
                        <div class="step">
                            <span class="number"><span>03</span></span>
                            <span class="caption">Home</span>
                        </div>
                        <div class="step">
                            <span class="number"><span>04</span></span>
                            <span class="caption">Sell Or Delete Or Update</span>
                        </div>
                        <div class="step">
                            <span class="number"><span>05</span></span>
                            <span class="caption">Done</span>
                        </div>

                    </div>
                </div>
                
                
          
                <Footer></Footer>
                
            </div>
        )
    }
}