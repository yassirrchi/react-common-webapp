import React,{Component} from "react";
import Counter from "./Counter";
export default class Counters extends Component{

render(){
    return <div>{
        this.props.counters.map(counter=>
        <Counter key={counter.id}
         onIncrement={this.props.onIncrement}
         onDecrement={this.props.onDecrement}
         onDelete={this.props.onDelete}
         counter={counter} >
             Counter #{counter.id}
        </Counter>)}</div>
}


}