import React,{Component} from 'react';
import axios from 'axios';
import{Link} from "react-router-dom";

import AuthorRow from './Author_row'
class Author_view extends Component{

    constructor(props){
        super(props);
        this.state={
            authors:[]
        }

        this.fillData= this.fillData.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/author/')
            .then(
                (authors)=>this.setState({
                    authors:authors.data.data
                })
            )
            .catch(
                (err)=>console.log(err)
            )
    }

    fillData(){
        console.log(this.state.authors)
        return this.state.authors.map((author)=>{
            return <AuthorRow key={author._id} author={author} />
        })

    }

    render(){

        return(
            <div className="container" style={{marginTop:'100px'}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Author ID</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">Nationality</th>
                    </tr>
                    </thead>
                    <tbody>
                        {this.fillData()}
                    </tbody>
                </table>
                <Link to="/author/add" className="btn btn-lg btn-info">ADD NEW AUTHOR</Link>
            </div>
        )
    }
}

export default Author_view;