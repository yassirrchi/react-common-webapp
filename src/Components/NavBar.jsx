import React,{Component} from "react";
import {Link} from 'react-router-dom'

 const NavBar =(props)=>{
     
        return (<nav class="navbar navbar-light bg-light">
          
        <Link to="/movies">Movies</Link>
        <Link to="/costumers">Costumers</Link>
        <Link to="/rentals">Rentals</Link>
        <Link to="/login">Login</Link>
      
         
      </nav>);
    
} 
export default NavBar;