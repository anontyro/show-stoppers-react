import React from 'react';
import './AboutView.css';

const AboutView = () => {

    return(
        <div className='main-about-container'>
            <h3 className='show-header'>Show Stoppers</h3>
            <p>
                Show Stoppers is about all the show stopping TV show that are
                found internationally. Show stoppers gets all its information
                from <a href="http://themoviedb.org" rel="noopener noreferrer" target='_blank'>The Movie DB </a>
                and displays them here to be viewed. Each show is broken down into
                their seasons and episode to make it easier to find what you are after
            </p>
            <h3 className='show-header'>The Stack</h3>
            <p>
                This version of the site is a rewrite of my <a href="http://shows.alexwilkinson.co" rel="noopener noreferrer" target='_blank'>original Angular site </a> 
                only this time in react and hopefully a bit expanded upon from that version whilst still using the same lambda
                expressions on the backend to connect to the API and serve the data.
            </p>
        </div>
    );
}


export default AboutView;