import React, { Component } from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';
import Home from './Home';
import { Characters, Episodes, Register } from './components';

class Main extends Component{
    render(){
        return(
            <HashRouter>
                <div>
                    <h1>Simple SPA</h1>
                    <ul className="header">
                        <li><NavLink to="/">Inicio</NavLink></li>
                        <li><NavLink to="/characters">Personajes</NavLink></li>
                        <li><NavLink to="/episodes">Episodios</NavLink></li>
                        <li><NavLink to="/register">Registro</NavLink></li>
                    </ul>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route path="/characters" component={Characters}/>
                        <Route path="/episodes" component={Episodes}/>
                        <Route path="/register" component={Register}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default Main;