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
            authors:[]
        }

        this.fillAuthor= this.fillAuthor.bind(this);
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

    render() {
        return(
            <div className="container col-md-8 order-md-1" style={{marginTop:'100px',marginBottom:'50px'}}>
                <h4 className="mb-3">New Book Add</h4>
                <form className="needs-validation" novalidate>
                    <div className="row">
                        <div className="col-md-6 mb-3">
                            <label htmlFor="username">Book Name</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text"><IoIosBook/></span>
                                </div>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="username"
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
                                    type="text"
                                    className="form-control"
                                    id="username"
                                    placeholder="ISBN"
                                    required />
                                <div className="invalid-feedback" style={{width: '100%'}}>
                                    ISBN is required.
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="username">Author</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text"><IoIosPerson/></span>
                            </div>
                            <select type="text" className="form-control" id="author" placeholder="Username" required >
                                {this.fillAuthor()}
                            </select>
                                <div className="invalid-feedback" style={{width: '100%'}}>
                                    Author is required.
                                </div>
                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="email">Price <span className="text-muted">in Rupees</span></label>
                        <div className='input-group'>
                            <div className='input-group-prepend'>
                                <span className="input-group-text"><IoIosPricetag/></span>
                            </div>
                            <input
                                type="number"
                                className="form-control"
                                id="price"
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
                                placeholder="Publisher"
                                required/>
                            <div className="invalid-feedback" style={{width: '100%'}}>
                                Publisher is required.
                            </div>

                        </div>
                    </div>


                    <hr className="mb-4" />
                    <button className="btn btn-primary btn-lg btn-block" type="submit">Continue to checkout</button>
                </form>
            </div>
        )
    }
}

export default Book_Add;