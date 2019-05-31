import React from 'react';
import {BrowserRouter,Route,Link} from 'react-router-dom';

import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

import Home from './components/Home';

import BookAdd from './components/Book/Book_Add';

import AuthorView from './components/Author/Author_view';

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

        <BrowserRouter>
            <Route exact path="/" component={Home}/>

            <Route path="/book/add" component={BookAdd}/>

            <Route path="/author/view" component={AuthorView}/>

        </BrowserRouter>

    </div>
  );
}

export default App;
