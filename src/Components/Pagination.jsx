import React,{Component} from "react";
import _ from 'lodash';
export default class Pagination extends Component{

    render(){
        const {itemCount,pageSize}=this.props;
        const pageCount=itemCount/pageSize;
        const pages=_.range(1,pageCount+1);
        return <React.Fragment>
            <nav aria-label="Page navigation example"> 
  <ul className="pagination">
    {pages.map(page=>{
      return <div>
        <li className="page-item" key={page} >
          <a className="page-link" onClick={()=>this.props.pageChange(page)} href="#" >{page}</a>
        </li>
           </div>})}
    

    
  </ul>
</nav>
        </React.Fragment>
    }
}