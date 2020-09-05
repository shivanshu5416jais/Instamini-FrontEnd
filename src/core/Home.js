import React from 'react';
import Posts from '../post/Posts'
import {isAuthenticated} from "../auth"

const Home=()=>(
   <div>
        <div className="jumbotron"> 
        <h2>Home</h2>
        <p className="lead">Welcome to InstaMini</p>
    </div>
   
    <div className="container">
        <Posts />
    </div>
  
    
   </div>
);

export default Home;