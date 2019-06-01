import React,{Component} from 'react';

class Book_row extends Component{

    constructor(props){
        super(props);
        this.state={
            book: props.book
        }
    }

    render(){

        return(

            <tr>
                <th>{this.state.book.isbn}</th>
                <td>{this.state.book.name}</td>
                <td>{this.state.book.author.lastName}</td>
                <td>{this.state.book.price}</td>
                <td>{this.state.book.yearOfPublication}</td>
                <td>{this.state.book.publisher}</td>
            </tr>
        )
    }
}

export default Book_row;