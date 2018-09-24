import React from 'react';
import GlobalVar from '../../../data/GlobalVars';
import './ShowDetailMain.css';


const ShowDetailMain = (props) => {

    const onSeasonBtn = (number) => {
        console.log(number);
        props.updateSeason(props.show.id, number);
    }

    const buildSeasonList = (list) => {
        const seasonList = [];
        
        if(!list) {
            return null;
        }

        for (let i = 1; i < list.length; i++) {
            seasonList.push(
            <span className='season-link' key={list[i].id} onClick={() => onSeasonBtn(i)}>{i}</span>
            )
        }

        return seasonList;
    }



    return (
        <div className='detail-main-container'>
            <div className="header-tabs">

            </div>
            <p>
                Seasons: 
                {buildSeasonList(props.show.seasons)}
            </p>
            <p>{props.show.name}</p>
        </div>
    );
};

export default ShowDetailMain;