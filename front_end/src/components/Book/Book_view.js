import React,{Component} from 'react';
import axios from 'axios';

import BookRow from './Book_row'
class Book_view extends Component{

    constructor(props){
        super(props);
        this.state={
            books:[]
        }

        this.fillData= this.fillData.bind(this);
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

    fillData(){
        console.log(this.state.books)
        return this.state.books.map((book)=>{
            return <BookRow key={book._id} book={book} />
        })

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
            </div>
        )
    }
}

export default Book_view;