import React from 'react';
import GlobalVar from '../../../data/GlobalVars';



const ShowDetailMain = (props) => {

    return (
        <div className='detail-main-container'>
            <p>Main section</p>
            <p>{props.show.name}</p>
        </div>
    );
};

export default ShowDetailMain;