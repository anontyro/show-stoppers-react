import React from 'react';
import GlobalVars from '../../data/GlobalVars';
import { Link } from 'react-router-dom';
import './ShowItem.css';

const ShowItem = (props) => {
    const imgUri = GlobalVars.apiPosterUri + props.show.poster_path;
    const showLink = '/show/' + props.show.id;
    return(
        <Link to={showLink}>
            <div className='show-container'>
                <div className="img-container">
                    <img className='poster' src={imgUri} alt=""/>
                </div>
                <p className='show-title'>{props.show.name}</p>
            </div>       
        </Link>
    )
}


export default ShowItem;