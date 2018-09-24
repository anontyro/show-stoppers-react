import * as actions from '../data/actions';
import React from 'react';
import ShowItem from '../features/components/ShowItem';
import ApiHandler from '../services/http/ApiHandler';

// set teh now showing list in the Redux store
export const getNowShowing = (list) => {
    return {
        type: actions.SET_NOW_SHOWING,
        value: list
    };
}

/**
 * Get a list of the top 20 items now showing on that day
 * this will create the list of ShowItems to be used to display
 * the output
 */
export const nowShowingList = () => {
    const apiHandler = new ApiHandler();
    const showList = [];

    return dispatch => {
        apiHandler.getNowAiring()
            .then(response => response.response.results)
            .then((shows) => {
                for (let i = 0; i < shows.length; i += 1) {
                  showList.push(<ShowItem show={shows[i]} key={shows[i].id} />);
                }
                dispatch(getNowShowing(showList));
              });
        
    }
}
// pass the similarShowList value to redux store to update
export const getSimilarShows = (list) => {
    return {
        type: actions.GET_SIMILAR_SHOWS,
        value: list
    }
}

/**
 * Method used to update redux state for similar shows to that of
 * the title passed via its id, returns a complete
 * list of ShowItems to be displayed
 * @param {*} id 
 */
export const similarShowList = (id) => {
    const apiHandler = new ApiHandler();
    const showList = [];

    return dispatch => {
        apiHandler.getSimilarShows(id)
            .then(response => response.response.results)
            .then(shows => {
                for (let i=0; i< shows.length; i+=1) {
                    showList.push(<ShowItem show={shows[i]} key={shows[i].id} />);
                }
                dispatch(getSimilarShows(showList));
            });
    }
}

export const setShowDetail = (show) => {
    return {
        type: actions.SET_SHOW_DETAIL,
        value: show
    }
}

export const getShowSeasonDetail = (list) => {
    return {
        type: actions.GET_SEASON_DETAIL,
        value: list
    }
}

export const showSeasonDetail = (showId, season) => {
    const apiHandler = new ApiHandler();

    return dispatch => {
        apiHandler.getSeasonDetail(showId, season)
            .then(response => response.response)
            .then(season => {
                console.log(season);
                dispatch(getShowSeasonDetail(season));
            });
    }

}