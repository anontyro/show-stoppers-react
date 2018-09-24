import React from 'react';
import './ShowSeasonList.css';
const ShowSeasonList = (props) => {
    console.log(props.season);

    const buildSeasonList = (list) => {
        const episodeList = [];

        if(!list) {
            return null;
        }

        for (let i = 0; i < list.length; i++) {
            episodeList.push(
                <div className="episode-item" key={list[i].id}>
                    <div className="episode epi-num">
                        {list[i].episode_number}
                    </div>
                    <div className="episode epi-name">
                        {list[i].name}     
                    </div>
                    <div className="episode epi-date">
                        {list[i].air_date}                        
                    </div>
                </div>
            )
        }

        return episodeList;

    }

    return (
        <div className="detail-seasons">
            <p>{props.season.overview}</p>

            <div className="episode-list">
                {buildSeasonList(props.season.episodes)}
            </div>
        </div>
    )
}

export default ShowSeasonList;