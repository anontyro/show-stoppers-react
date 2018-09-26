import React from 'react';
import { Link } from 'react-router-dom';
import GlobalVars from '../../data/GlobalVars';
import './ShowItem.css';

const ShowItem = (props) => {
  const imgUri = GlobalVars.apiPosterUri + props.show.poster_path;
  const showLink = `/show/${props.show.id}`;

  const renderImg = () => {
    let renderImg;

    if (props.show.poster_path === null) {
      renderImg = (
        <img className='poster' src="https://via.placeholder.com/150x255" alt="placeholder image"/>
      );
    } else {
        renderImg = (
          <img className='poster' src={imgUri} alt=""/>
        );
    }

    return renderImg;
  }

  return (

    <Link to={showLink}>
      <div className='show-container'>
        <div className="img-container">
          {renderImg()}
        </div>
        <p className='show-title'>{props.show.name}</p>
          </div>       
    </Link>
  );
};


export default ShowItem;
