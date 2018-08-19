import React from 'react';
import HomeView from '../features/HomeView';
import AboutView from '../features/AboutView';
import SearchView from '../features/SearchView';
import ShowDetailView from '../features/ShowDetailView';
import { Switch, Route } from 'react-router-dom';
import './Main.css';
const Main = () =>{
    return(
        <main>
            <Switch>
                <Route exact path='/' component={HomeView} />
                <Route exact path='/about' component={AboutView} />
                <Route path='/search' component={SearchView} />
                <Route path='/show/:id' component={ShowDetailView} />
            </Switch>
        </main>
    );
};


export default Main;