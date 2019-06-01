import React,{Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component{

    render() {
        return(
            <main role="main" className="container" style={{marginTop:'100px'}}>

                <div className="jumbotron">
                    <h1 className="display-4">Author!</h1>
                    <p className="lead">Here we maintain all information of the Author who have published their books in our <b>Loops' Bookshop</b></p>
                    <hr className="my-4" />
                    <p>User can view the details of Authors</p>
                    <Link to='/author/view' className="btn btn-primary btn-lg" role="button">View</Link>
                </div>

                <div className="jumbotron">
                    <h1 className="display-4">Books!</h1>
                    <p className="lead">Here we maintain all information of the Books that we sell in our <b>Loops' Bookshop</b></p>
                    <hr className="my-4" />
                    <p>User can view and add new book details</p>
                    <Link to='/book/add' className="btn btn-primary btn-lg" role="button">ADD</Link>
                    <Link to='/book/view' className="btn btn-primary btn-lg" role="button" style={{margin:"50px"}}>VIEW</Link>
                </div>

            </main>
        )
    }
}

export default Home;