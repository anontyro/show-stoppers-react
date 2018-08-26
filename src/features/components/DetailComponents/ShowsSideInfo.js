import React from 'react';
import GlobalVar from '../../../data/GlobalVars';

const ShowSideInfo = (props) => {

    const imgUri = GlobalVar.apiPosterUri + props.show.poster_path;

    return (
        <div className='detail-left-container'>
            <div className="show-image">
                <img src={imgUri} alt=""/>
            </div>
            <h3 className="my-subheader show-title">
                {props.show.name}
            </h3>
            <p>
              {props.show.overview}  
            </p>
        </div>
    );
}

export default ShowSideInfo;