import React,{Component} from "react";
import { useParams } from "react-router-dom";
const MoviesForm=({match})=>{
    let {id}=useParams();
    return<div>MoviesForm {id}</div>
}
export default MoviesForm;