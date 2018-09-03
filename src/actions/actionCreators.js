import * as actions from '../data/actions';
import React from 'react';
import ShowItem from '../features/components/ShowItem';
import ApiHandler from '../services/http/ApiHandler';

export const getNowShowing = (list) => {
    return {
        type: actions.SET_NOW_SHOWING,
        value: list
    };
}

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

export const getSimilarShows = (list) => {
    return {
        type: actions.GET_SIMILAR_SHOWS,
        value: list
    }
}

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