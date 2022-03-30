import _ from "lodash";
import React,{Component} from "react";
import { getMovies } from "../services/fakeMovieService";
import { getGenres } from "../services/fakeGenreService";
import Like from "./like";
import Pagination from "./Pagination";
import ListGroup from "./listgroup";
import { Link } from "react-router-dom";
class Movies extends Component{
    state={
        movies:[],
        pageSize:4,
        currentPage:1,
        genres:[],
        currentGenre:"Action",
        isAll:true
        
    
    };
    componentDidMount(){
        this.setState({movies:getMovies(),genres:getGenres()});
    
    }
    
    handleDelete=(movie)=>{
    const movieslist=this.state.movies.filter(m=>m._id!==movie._id)
    this.setState({movies:movieslist})
    }
    handleClick=(id)=>{
     // this.state.clicked===true?this.setState({clicked:false}):this.setState({clicked:true})
       const index=this.state.movies.findIndex(m=>m._id===id);
    const movies=[...this.state.movies]
   // movies[index]={...movies[index]}
    movies[index].liked=!movies[index].liked

     this.setState({movies})
        
       console.log(index)}

    handlePageChange=(page)=>{
    this.setState({currentPage:page})
    }
    handleGenre=(genre)=>{
        console.log(genre)
        console.log(this.state.currentGenre)
        
    this.setState({currentGenre:genre,currentPage:1,isAll:false})
    console.log(this.state.isAll)
    }
     
    allMovies=()=>{
      this.setState({isAll:true})
      console.log("this.state.isAll")
        console.log(this.state.isAll)
    }
   numberOfItems=(movies)=>{
       let nItems=0;
   movies.forEach(movie=>nItems+=movie.length)
   return nItems;
   }  
    render(){
        const movies=(this.state.isAll===true)?_.chunk([...this.state.movies],this.state.pageSize):_.chunk([...this.state.movies.filter(m=>m.genre.name===this.state.currentGenre)],this.state.pageSize);
         
       
        console.log(movies)
        console.log(movies.length)
        if(this.state.movies.length===0)
        return <h3>there is no movies</h3>
        return  <div className="row"><div className="col-2" ><ListGroup genreHandle={this.handleGenre} genres={this.state.genres} allMovies={this.allMovies}/></div> <div className="col"><p>showing {this.numberOfItems(movies)} element</p>  <table className="table">
             <thead>
                 <th>Title</th>
                 <th>Genre</th>
                 <th>Number In Stock</th>
                 <th>Daily Rental Rate</th>
             </thead>
             <tbody>
             
                {movies[this.state.currentPage-1].map(movie=>(
                    <tr key={movie._id}>
                        <td><Link to={`/movies/${movie._id}`}>{movie.title}</Link></td>
                        <td>{movie.genre.name}</td>
                        <td>{movie.numberInStock}</td>
                        <td>{movie.dailyRentalRate}</td>
                        <td><Like like={movie.liked} ifClicked={this.handleClick} id={movie._id}/></td>
                        
                        <td><button className="btn btn-danger btn-sm" onClick={()=>this.handleDelete(movie)}>Delete</button></td>
                    </tr>
                ))}
                </tbody>
            
        </table>
        <Pagination itemCount={ this.numberOfItems(movies)} pageSize={this.state.pageSize} pageChange={this.handlePageChange}/></div> </div>
    }
}
export default Movies