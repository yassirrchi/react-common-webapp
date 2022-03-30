import React,{Component} from "react";
export default class ListGroup extends Component{
    render(){
        return<div><ul className="list-group"><li  className="list-group-item" onClick={this.props.allMovies} >All</li>
            {this.props.genres.map(genre=><li key={genre._id} className="list-group-item" onClick={()=>this.props.genreHandle(genre.name)}>{genre.name}</li>)}
        
        
      </ul></div>
    }
}