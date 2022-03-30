import React, { Component } from "react";
import Input from "./Input";
import { Joi } from "joi-browser";
export default class Login extends Component{
    state={account:{
        email:"",
        password:""
    },
      errors:{
          email:"",
          password:""
        }
    }
     
 
       
    validate=()=>{
         
        const errors={};
        if(this.state.account.email.trim()==="")
        errors.email="email fied is empty";
        if(this.state.account.password.trim()==="")
        errors.password="password fied is empty";
        
        this.setState({errors:errors})
       
       return Object.keys(errors).length===0?null:errors;


        
    }
    handleSubmit=e=>{
        e.preventDefault();
        const errors=this.validate();
       

    }
    handleOnChange=e=>{
         
        const account={...this.state.account};
        account[e.target.name]=e.target.value;
        this.setState({account});
        
        
        

    }
    
    render(){
        return<div> 
             <h2>Login</h2>
             <form action="">
             <Input val={this.state.account.email} error={this.state.errors.email}label={"Email"}type={"text"}  name={"email"} onChanger={this.handleOnChange} />
             <Input val={this.state.account.email} error={this.state.errors.password} label={"Password"}  type={"password"}name={"password"} onChanger={this.handleOnChange} />
            
                     <button className="btn btn-success" onClick={(e)=>this.handleSubmit(e)} >Login</button>
                    
                
             </form>
           </div>
    }
}