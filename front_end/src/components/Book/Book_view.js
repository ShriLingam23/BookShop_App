import React,{Component} from 'react';
import axios from 'axios';

import BookRow from './Book_row'
import {Link} from "react-router-dom";
class Book_view extends Component{

    constructor(props){
        super(props);
        this.state={
            books:[],
            calculate:[],
            show:false,
            total:0.00,
            authors:[],
            filterData:[],
            filter:false
        }

        this.fillData= this.fillData.bind(this);
        this.calcTotal= this.calcTotal.bind(this);
        this.checkBill= this.checkBill.bind(this);

        this.filterAuthor= this.filterAuthor.bind(this);
        this.resetFilter= this.resetFilter.bind(this);
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


    fillAuthor(){

        return this.state.authors.map((author)=>{
            return(
                <option key={author._id}>{author.firstName +" "+author.lastName}</option>
            )
        })
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
        if(!this.state.filter){
            return this.state.books.map((book)=>{
                return <BookRow key={book._id} book={book} bookId={this.onCheckboxClicked.bind(this)}/>
            })
        }
        else{
            return this.state.filterData.map((book)=>{
                return <BookRow key={book._id} book={book} bookId={this.onCheckboxClicked.bind(this)}/>
            })
        }

    }

    calcTotal(){
        axios.post('http://localhost:8080/book/calculate/',this.state.calculate)
            .then(
                (res)=>{
                    console.log(res.data)
                    this.setState({
                                            total:res.data,
                                            show:true
                                        })

                }
            )
    }

    checkBill(){
        if(this.state.show){
            return(
                <div className="card mb-4 shadow-sm">
                    <div className="card-header">
                        <h4 className="my-0 font-weight-normal">Book Billing Invoice</h4>
                    </div>
                    <div className="card-body">
                        <h1 className="card-title pricing-card-title">Rs.{this.state.total} <small className="text-muted">/ mo</small>
                        </h1>
                        <ul className="list-unstyled mt-3 mb-4">
                            <li>20 users included</li>
                            <li>10 GB of storage</li>
                            <li>Priority email support</li>
                            <li>Help center access</li>
                        </ul>
                        <button
                            type="button"
                            className="btn btn-lg btn-primary"
                            onClick={()=>{this.setState({show:false,total:0.00})}}>Close</button>
                    </div>
                </div>
            )
        }
    }

    filterAuthor(){
        const authorOption = document.getElementById("author");
        const index = authorOption.selectedIndex;

        const AuthorId = this.state.authors[index-1]._id;
        console.log(AuthorId);


        axios.get('http://localhost:4000/book/filter/'+AuthorId)
            .then(
                (res)=>{
                    this.setState({
                        filterData:res.data.data,
                        filter:true
                    })
                }
            )

    }

    resetFilter(){
        this.setState({
            filter:false,
            filterData:[]
        })

        const authorOption = document.getElementById("author");
        authorOption.selectedIndex=0;
    }

    render(){

        return(
            <div className="container" style={{marginTop:'100px'}}>
                <div className="row">
                    <div className="col-md-8">
                        <select className="form-control" id="author">
                            <option>Choose an Author...</option>
                            {this.fillAuthor()}
                        </select>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-primary form-control" onClick={this.filterAuthor}>Filter</button>
                    </div>
                    <div className="col-md-2">
                        <button className="btn btn-danger form-control" onClick={this.resetFilter}>Reset</button>
                    </div>
                </div>

                <table className="table" style={{marginTop:'50px'}}>
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
                {this.checkBill()}
                <a className="btn btn-warning" style={{color:'#FFF'}} onClick={this.calcTotal}>Calculate Total</a>
                <hr className="col-md-4"/>
                <Link to="/book/add" className="btn btn-lg btn-info" style={{marginTop:'50px'}}>ADD NEW BOOK</Link>
            </div>
        )
    }
}

export default Book_view;