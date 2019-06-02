import React,{Component} from 'react';
import axios from 'axios';

import BookRow from './Book_row'
import {Link} from "react-router-dom";
class Book_view extends Component{

    constructor(props){
        super(props);
        this.state={
            books:[],
            calculate:[]
        }

        this.fillData= this.fillData.bind(this);
        this.calcTotal= this.calcTotal.bind(this);
    }

    componentDidMount(){
        axios.get('http://localhost:4000/book/')
            .then(
                (books)=>this.setState({
                    books:books.data.data
                })
            )
            .catch(
                (err)=>console.log(err)
            )
    }

    onCheckboxClicked(id){
        console.log(id)
        const temp=this.state.calculate
        temp.push(id);


        this.setState({
            calculate:temp
        })

        console.log(this.state.calculate)

    }

    fillData(){
        //console.log(this.state.books)
        return this.state.books.map((book)=>{
            return <BookRow key={book._id} book={book} bookId={this.onCheckboxClicked.bind(this)}/>
        })

    }

    calcTotal(){
        axios.post('http://localhost:8080/book/calculate/',this.state.calculate)
            .then(
                (res)=>console.log(res.data)
            )
    }

    render(){

        return(
            <div className="container" style={{marginTop:'100px'}}>
                <table className="table">
                    <thead>
                    <tr>
                        <th scope="col">Book ISBN</th>
                        <th scope="col">Book Name</th>
                        <th scope="col">Author Name</th>
                        <th scope="col">Price</th>
                        <th scope="col">Year of Published</th>
                        <th scope="col">Publication</th>
                    </tr>
                    </thead>
                    <tbody>
                    {this.fillData()}
                    </tbody>
                </table>
                <hr className="col-md-4"/>
                <a className="btn btn-warning" style={{color:'#FFF'}} onClick={this.calcTotal}>Calculate Total</a>
                <hr className="col-md-4"/>
                <Link to="/book/add" className="btn btn-lg btn-info" style={{marginTop:'50px'}}>ADD NEW BOOK</Link>
            </div>
        )
    }
}

export default Book_view;