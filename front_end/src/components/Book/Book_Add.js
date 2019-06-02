import React,{Component} from 'react';
import axios from "axios";

import {IoIosBook} from 'react-icons/io'
import {IoIosKey} from "react-icons/io";
import {IoIosPerson} from "react-icons/io";
import {IoIosPricetag} from "react-icons/io";
import {IoIosCalendar} from "react-icons/io";
import {IoIosPrint} from 'react-icons/io'

class Book_Add extends Component{

    constructor(props){
        super(props);
        this.state={
            authors:[],
            bookName:'',
            isbn:'',
            author:'',
            price:'',
            year:'',
            publisher:'',
            aid:''

        }

        this.fillAuthor= this.fillAuthor.bind(this);
        this.fieldValueChange= this.fieldValueChange.bind(this);
        this.onFormSubmit= this.onFormSubmit.bind(this);

        this.setAuthor= this.setAuthor.bind(this);
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

    fillAuthor(){

        return this.state.authors.map((author)=>{
          return(
              <option key={author._id}>{author.firstName +" "+author.lastName}</option>
          )
        })
    }

    fieldValueChange(e){
        this.setState(
            {[e.target.name]:e.target.value}
        )
    }

    setAuthor(e){

        var authorOption = document.getElementById('author');
        var authorId=authorOption.selectedIndex;
        this.setState(
            {
                author:e.target.value,
                aid:this.state.authors[authorId-1]._id

            }
        )
    }

    onFormSubmit(e){
        e.preventDefault();

        const book={
            name: this.state.bookName,
            isbn: parseInt(this.state.isbn),
            author: this.state.aid,
            price:parseInt(this.state.price),
            yearOfPublication:parseInt(this.state.year),
            publisher: this.state.publisher
        }

        console.log(book)
        axios.post('http://localhost:4000/book/',book)
            .then(
                (res)=>{
                    console.log(res.data.message,res.data.data)
                }
            )


    }

    render() {
        return(
            <div className="container col-md-8 order-md-1" style={{marginTop:'100px',marginBottom:'50px'}}>
                <h4 className="mb-3">New Book Add</h4>
                <form className="needs-validation" onSubmit={this.onFormSubmit}>
                    <div className="row">

                        <div className="col-md-6 mb-3">
                            <label>Book Name</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><IoIosBook/></span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="bookName"
                                    name="bookName"
                                    value={this.state.bookName}
                                    onChange={this.fieldValueChange}
                                    placeholder="Book Name"
                                    required />
                                <div className="invalid-feedback" style={{width: '100%'}}>
                                    Your Book Name is required.
                                </div>
                            </div>
                        </div>

                        <div className="col-md-6 mb-3">
                            <label htmlFor="username">ISBN Number</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><IoIosKey/></span>
                                </div>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="isbn"
                                    name="isbn"
                                    value={this.state.isbn}
                                    onChange={this.fieldValueChange}
                                    placeholder="ISBN"
                                    required />
                                <div className="invalid-feedback" style={{width: '100%'}}>
                                    ISBN is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label >Author</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><IoIosPerson/></span>
                            </div>
                            <select
                                className="form-control"
                                name="author"
                                id="author"
                                value={this.state.author}
                                onChange={this.setAuthor}
                                required >
                                <option>Choose an Author...</option>
                                {this.fillAuthor()}
                            </select>
                                <div className="invalid-feedback" style={{width: '100%'}}>
                                    Author is required.
                                </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Price <span className="text-muted">in Rupees</span></label>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                                <span className="input-group-text"><IoIosPricetag/></span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
                                name="price"
                                value={this.state.price}
                                onChange={this.fieldValueChange}
                                placeholder="Rs."
                                required />
                            <div className="invalid-feedback" style={{width: '100%'}}>
                                Price is required.
                            </div>

                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Year of publication</label>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                                <span className="input-group-text"><IoIosCalendar/></span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="year"
                                name="year"
                                value={this.state.year}
                                onChange={this.fieldValueChange}
                                placeholder="Year"
                                required/>
                            <div className="invalid-feedback" style={{width: '100%'}}>
                                Year is required.
                            </div>

                        </div>
                    </div>

                    <div className="mb-3">
                        <label>Publisher</label>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                                <span className="input-group-text"><IoIosPrint/></span>
                            </div>
                            <input
                                type="text"
                                className="form-control"
                                id="publisher"
                                name="publisher"
                                value={this.state.publisher}
                                onChange={this.fieldValueChange}
                                placeholder="Publisher"
                                required/>
                            <div className="invalid-feedback" style={{width: '100%'}}>
                                Publisher is required.
                            </div>

                        </div>
                    </div>


                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to Add</button>
                </form>
            </div>
        )
    }
}

export default Book_Add;