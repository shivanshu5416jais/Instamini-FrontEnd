import React from 'react'
import {Link,withRouter} from 'react-router-dom'
import {signout,isAuthenticated} from "../auth"





const Footer=()=>(
  <>
  <div className="" style={{fontSize:"30px",color:"Red",float:"bottom",backgroundColor:"black",width:"100vw",textAlign:"center",marginTop:"2vh",
  bottom: "10px"}}>
     <center>Made By Shivanshu Jaiswal</center>
    </div>
    <div style={{clear:"both"}}>
     
     
   
    </div>
   
    </>
);

export default withRouter(Footer)
