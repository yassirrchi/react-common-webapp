import React,{Component} from "react";
import Movies from "./Components/Movie";
import Counter from "./Components/Counter";
import { Route ,Routes,BrowserRouter } from "react-router-dom";
import NavBar from "./Components/NavBar";
import MoviesForm from "./Components/MoviesForm";
import Counters from "./Components/Counters";
import MoviesNavBar from "./MoviesNavBar";
import Costumers from "./Components/Costumers";
import WpAdmin from "./Components/wpadmin";
import Rentals from "./Components/Rentals";
import Login from "./Components/Login";
export default class App extends Component{
    state={
        counters:[{id:1,value:0},{id:3,value:8},{id:4,value:2},{id:5,value:22}]
    }
    deleteHandler=(id)=>{
    console.log(id)
    const countersh=this.state.counters.filter(counter=>counter.id!==id)
    this.setState({counters:countersh})
    }
    handleIncrement=(ob)=>{
        let counterlist=[...this.state.counters]
        
        const index = counterlist.findIndex(counter => counter.id ===ob.id);
         
        counterlist[index].value++;
        this.setState({counters:counterlist})
       
    
    
    }
    handleDecrement=(ob)=>{
        let counterlist=[...this.state.counters]
        const index = counterlist.findIndex(counter => counter.id ===ob.id);
        if(counterlist[index].value>0){
        counterlist[index].value--;
        this.setState({counters:counterlist})
    }
     }
    render(){
        
        return(
        <React.Fragment>
        
       
       
        <main className="container">
        <NavBar/>
        <Routes>
        <Route path="/" exact element={<Movies />}/> 
        <Route path="/movies/:id" element={<MoviesForm/>}/>
        <Route path="/costumers" element={<Costumers />}/> 
        <Route path="/movies" element={<Movies />}/> 
        <Route path="/wp-admin" element={<WpAdmin />}/> 
        <Route path="/rentals" element={<Rentals />}/> 
        <Route path="/login" element={<Login />}/> 
         
        </Routes>    
        
        </main>
        </React.Fragment>)
    }
}