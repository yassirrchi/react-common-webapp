import React,{Component} from "react";
import {AiFillHeart,AiOutlineHeart} from 'react-icons/ai'
export default class Like extends Component{
     
    
    render(){
        if(this.props.like)
        return(<div onClick={()=>this.props.ifClicked(this.props.id)}><AiFillHeart/></div>)
        return(<div onClick={()=>this.props.ifClicked(this.props.id)}><AiOutlineHeart/></div>)
    }
}