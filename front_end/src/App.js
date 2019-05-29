import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div className="App">
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
            <a className="navbar-brand" href="#">Navbar</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarsExampleDefault">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                    </li>
                </ul>

            </div>
        </nav>

        <main role="main" className="container" style={{marginTop:'100px'}}>

            <div className="jumbotron">
                <h1 className="display-4">Author!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>

            <div className="jumbotron">
                <h1 className="display-4">Books!</h1>
                <p className="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra
                    attention to featured content or information.</p>
                <hr className="my-4" />
                    <p>It uses utility classes for typography and spacing to space content out within the larger
                        container.</p>
                    <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
            </div>

        </main>
    </div>
  );
}

export default App;
