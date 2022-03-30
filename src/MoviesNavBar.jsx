import React,{Component} from "react";
import { Link } from "react-router-dom";
import Costumers from "./Components/Costumers";

const MoviesNavBar=()=>{
     return (
        <div>
          <h1>Home</h1>
          <nav>
            <ul>
              <li><Link to="/wp-admin">Costumer</Link></li>
            </ul>
          </nav>
        </div>
      );
}
export default MoviesNavBar;