import React, { Component } from "react";
export default class Input extends Component{
    render(){
        return <div className="form-group bg-dark">
        <label htmlFor={this.props.name} style={{color:"red"}}>{this.props.label}</label>

        <input id={this.props.name}
               name={this.props.name}
               type={this.props.type}
               onChange={ (e)=>this.props.onChanger(e)} 
               
               className="form-control"
               
                />
        {this.props.error&&<p style={{color:"red"}}>{this.props.error} </p>}

   </div>
    }
}