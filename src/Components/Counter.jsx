import React,{Component} from 'react'
class Counter extends Component{
     
    handleIncrement=()=>{
        
        this.setState({count:this.state.count+1});
    }
    handleDecrement=()=>{
        if(this.state.count>=1)
        this.setState({count:this.state.count-1});
    }
    styles={fontSize:20,fontWeight:"bold"}
    render(){ 
         
        let classes="badge m-2 badge-";
        classes+=(this.props.counter.value===0)?"warning":"primary";
         
        
        return <div className='row'>
            <div className='col-1'><span style ={this.styles} className={classes+" mx-4 px-3"} >{this.formatCount()}</span></div>
            <div className='col'>
            <button onClick={()=>this.props.onIncrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'>+</button>
            <button onClick={()=>this.props.onDecrement(this.props.counter)} className='btn btn-secondary btn-sm m-2'disabled={this.props.counter.value===0?"disabled":""} >-</button>
            <button className="btn btn-danger btn-sm m-2" onClick={()=>this.props.onDelete(this.props.counter.id) }  >x</button>
            
            </div>
           
            </div>
    }
   
    
    formatCount(){
        const count=this.props.counter.value;
        return count===0?"zero":count;
    }
}
export default Counter;