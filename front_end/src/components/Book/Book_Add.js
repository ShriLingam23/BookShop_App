import React,{Component} from 'react';
import axios from "axios";

import {IoIosBook} from 'react-icons/io'
import {IoIosKey} from "react-icons/io";
import {IoIosPerson} from "react-icons/io";



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
              <option key={author._id}>{author.firstName}</option>
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
                                <span></span>
                            </div>

                        </div>
                    </div>

                    <div className="mb-3">
                        <label for="address">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                            <div className="invalid-feedback">
                                Please enter your shipping address.
                            </div>
                    </div>

                    <div className="mb-3">
                        <label for="address2">Address 2 <span className="text-muted">(Optional)</span></label>
                        <input type="text" className="form-control" id="address2" placeholder="Apartment or suite" />
                    </div>


                    <hr className="mb-4" />
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="same-address" />
                                <label className="custom-control-label" for="same-address">Shipping address is the same as my billing address</label>
                        </div>
                        <div className="custom-control custom-checkbox">
                            <input type="checkbox" className="custom-control-input" id="save-info" />
                                <label className="custom-control-label" for="save-info">Save this information for next time</label>
                        </div>
                        <hr className="mb-4" />

                            <h4 className="mb-3">Payment</h4>

                            <div className="d-block my-3">
                                <div className="custom-control custom-radio">
                                    <input id="credit" name="paymentMethod" type="radio" className="custom-control-input" checked required />
                                        <label className="custom-control-label" for="credit">Credit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="debit" name="paymentMethod" type="radio" className="custom-control-input" required />
                                        <label className="custom-control-label" for="debit">Debit card</label>
                                </div>
                                <div className="custom-control custom-radio">
                                    <input id="paypal" name="paymentMethod" type="radio" className="custom-control-input" required />
                                        <label className="custom-control-label" for="paypal">PayPal</label>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6 mb-3">
                                    <label for="cc-name">Name on card</label>
                                    <input type="text" className="form-control" id="cc-name" placeholder="" required />
                                        <small className="text-muted">Full name as displayed on card</small>
                                        <div className="invalid-feedback">
                                            Name on card is required
                                        </div>
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="cc-number">Credit card number</label>
                                    <input type="text" className="form-control" id="cc-number" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Credit card number is required
                                        </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-3 mb-3">
                                    <label for="cc-expiration">Expiration</label>
                                    <input type="text" className="form-control" id="cc-expiration" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Expiration date required
                                        </div>
                                </div>
                                <div className="col-md-3 mb-3">
                                    <label for="cc-cvv">CVV</label>
                                    <input type="text" className="form-control" id="cc-cvv" placeholder="" required />
                                        <div className="invalid-feedback">
                                            Security code required
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