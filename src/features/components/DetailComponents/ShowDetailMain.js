import React from 'react';
import './ShowDetailMain.css';
import ShowSeasonList from './ShowSeasonList';
import ShowItem from '../../components/ShowItem';

const ShowDetailMain = (props) => {

    const onSeasonBtn = (number) => {
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

    /**
     * Conditional rendering for the show list when the similar show array has
     * values it will be rendered else null is returned
     */
    const displaySimilar = () => {
        if (props.similarShows.length > 0) {
            return (
            <div className="similar-shows show-title">
                <h3 className="my-subheader">Similar Shows</h3>
                <div className="showGrid">
                    {props.similarShows}
                </div>
            </div>
            );
        }
        return null;
    }

    return (
        <div className='detail-main-container'>
            <div className="header-tabs">

            </div>
            <p>
                Seasons: 
                {buildSeasonList(props.show.seasons)}
            </p>
            {/* <p>{props.show.name}</p> */}
            <div className="seasons">
                <ShowSeasonList season = {props.season}>
                </ShowSeasonList>
            </div>
            {displaySimilar()}
        </div>
    );
};

export default ShowDetailMain;