import React, { Component } from "react";
import Header from "../../component/pages/header"
import Footer from "../../component/pages/footer"
import hero_2 from "../../images/hero_2.jpg";
import axios from "axios";
export default class update extends Component {
    constructor(props) {
        super(props);
        this.canvas = null;
        this.state = {
          name: "",
          price: "",
          seats: "",
          id: "",
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
      
        var URL = "http://192.168.43.124:8080/api/cars/" +this.state.id
        axios .put(URL, this.state, { headers: { Authorization: token } })
          .then((response) => {
            console.log(response);
            window.location.href="/home"
          })
          .catch((error) => {
            console.log(error);
          });
      };
    render() {
       const { id , name , seats , price} = this.state
    return (<div>
        <Header></Header>
  
        <div class="ftco-blocks-cover-1">
          <div class="ftco-cover-1 overlay innerpage" style={{ backgroundImage: `url(${hero_2})` }}>
            <div class="container">
              <div class="row align-items-center justify-content-center">
                <div class="col-lg-6 text-center">
                  <h1>Update Car</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>



        <form onSubmit={this.submitHandler}>
  
  <table class="table table-striped">
    <thead>
      <tr>
        <th style={{width: "150px"}}>Name Of Row</th>
        <th>Data</th>
        <th style={{width: "400px"}}>Do Edit</th>
     
      </tr>
    </thead>
    <tbody>
    <tr>

<td>ID</td>
<td ></td>
<td>

    
        
      <div  class="input-group input-group-sm mb-3">
        <div class="input-group-prepend">
          <span class="input-group-text" id="inputGroup-sizing-sm">Update to</span>
        </div>
        <input type="text" name="id" value={id} onChange={this.changeHandler} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
      </div>


</td>

</tr>
      
      <tr>

        <td>name</td>
        <td ></td>
        <td>
        
            
                
              <div  class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Update to</span>
                </div>
                <input type="text" name="name" value={name} onChange={this.changeHandler} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
              </div>

       
        </td>
     
      </tr>
      <tr>
        <td>Seats</td>
        <td></td>
        <td>
          
              <div  class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Update to</span>
                </div>
                <input  type="text" name="seats" value={seats} onChange={this.changeHandler} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
              </div>

           
        
        </td>
      
      </tr>
      <tr>
        <td>price</td>
        <td></td>
        <td>
         
              <div  class="input-group input-group-sm mb-3">
                <div class="input-group-prepend">
                  <span class="input-group-text" id="inputGroup-sizing-sm">Update to</span>
                </div>
                <input   type="text" name="price" value={price} onChange={this.changeHandler} class="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-sm"/>
              </div>

           
        </td>
     
      </tr>
    
     

      </tbody>
    
  </table>
  <button type="submit" style={{marginRight: "110px"}} class="btn btn-primary btn-lg btn-block"> Update </button> 
</form>  
<br></br>
        <br></br>
        <br></br>
        
      <Footer></Footer>
      </div>)
    }
  }