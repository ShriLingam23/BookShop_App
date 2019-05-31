import React,{Component} from 'react';
import {Link} from "react-router-dom";

class Home extends Component{

    render() {
        return(
            <main role="main" className="container" style={{marginTop:'100px'}}>

                <div className="jumbotron">
                    <h1 className="display-4">Author!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                        attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                    <Link to='/author/view' className="btn btn-primary btn-lg" href="#" role="button">View</Link>
                </div>

                <div className="jumbotron">
                    <h1 className="display-4">Books!</h1>
                    <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                        attention to featured content or information.</p>
                    <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                    <Link to='/book/add' className="btn btn-primary btn-lg" type="button">ADD</Link>
                    <a className="btn btn-primary btn-lg" href="#" role="button" style={{margin:"50px"}}>VIEW</a>
                </div>

            </main>
        )
    }
}

export default Home;