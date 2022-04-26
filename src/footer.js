import React from "react";
import { Link } from "react-router-dom";
const Footer = ()=>{
   return(
       <footer>
           <div className="p-5 bg-warning text-white mt-5">
            <div className="container">
        <div className="row">
            <div className="col-lg-12 text-center">
                <p>REACT JS  APPLICATION </p>
                <Link to ="/item">ITEM</Link> 
                        <br/>
                <Link to ="/user">USER</Link>
                
            </div>
        </div>

       </div>
       </div>
       </footer>


   )

}
export default Footer;