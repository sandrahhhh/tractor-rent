import React from 'react';
import {Link} from "react-router-dom";
import "./api.css";



function confirm() {
  return (
    <div className="page">
            <h1 className='e1'>Your Order Has Been Placed, Please Wait for A confirmaion </h1>
            <img className='t5' src='https://www.bing.com/th/id/OGC.30c98631c8ad10eac2264b08ce421e2e?pid=1.7&rurl=https%3a%2f%2fsssc.vic.edu.au%2fwp-content%2fuploads%2f2018%2f08%2fcheckmark.gif&ehk=0C9%2fIY7qqsBRurTasBv%2bzoc9%2fW3gVfyVS43NQ0sbmII%3d'/>
      <div className='y6'>
      <Link to= "./">
      <button className='btn'>Okay</button>
      </Link>
    
      </div>
            
    </div>

    
  )
}

export default confirm;