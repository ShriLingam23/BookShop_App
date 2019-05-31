import React,{Component} from 'react';

class Author_row extends Component{

    constructor(props){
        super(props);
        this.state={
            author: props.author
        }
    }

    render(){

        return(

                <tr>
                    <th>{this.state.author._id}</th>
                    <td>{this.state.author.firstName}</td>
                    <td>{this.state.author.lastName}</td>
                    <td>@{this.state.author.nationality}</td>
                </tr>
        )
    }
}

export default Author_row;