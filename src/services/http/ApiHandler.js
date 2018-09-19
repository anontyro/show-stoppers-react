import GlobalVars from '../../data/GlobalVars';

class ApiHandler {

    publicGetHeader() {
        let myHeaders = new Headers();
        myHeaders.set('Content-Type', 'application/json');
        let options = {
            method: 'GET',
            mode: 'cors',
            headers: myHeaders
        }
        return options;
    }

    /** Buidling block method that is used by the other methods to make requests */
    genericFetchGet(endpoint) {
        const uri = GlobalVars.apiRoot + endpoint;

        return fetch(uri, this.publicGetHeader())
            .then(response => response.json())
            .catch(ex => console.error(ex));
    }

    /** Get the currently airing show list first page */
    getNowAiring() {
        return this.genericFetchGet(GlobalVars.tvRoutes.getNowAiring);
    }

    /**
     * Search for the detailed view of a show using the unique showID
     * @param {*} showId 
     */
    getShowDetails(showId) {
        const endpoint = GlobalVars.tvRoutes.getShowDetail + showId;
        return this.genericFetchGet(endpoint);
    }

    /**
     * Get the search for the show with a user defined query string
     * @param {*} q must be URL Encoded query string
     */
    getShowSearch(q) {
        const endpoint = GlobalVars.tvRoutes.getShowSearch + q;
        return this.genericFetchGet(endpoint);
    }

    /**
     * Get a list of similar shows based on the showId of the selected show
     * @param {*} showId unique showId related to that specific show
     */
    getSimilarShows(showId) {
        const endpoint = GlobalVars.tvRoutes.getSimilarShows + showId;
        return this.genericFetchGet(endpoint);
    }

    /**
     * Get the season detail from a specific show which will outline all the episodes in that season
     * @param {*} showId specific unique showId number
     * @param {*} season specific season number
     */
    getSeasonDetail(showId, season) {
        const endpoint = GlobalVars.tvRoutes.getSeasonDetail + showId + '/' + season;
        return this.genericFetchGet(endpoint);
    }

    /**
     * Get the episode detail for a specific season for a specific show
     * @param {*} showId specific unique showId number
     * @param {int} season specific season number
     * @param {*} episode specific episode number
     */
    getEpisodeDetail(showId, season, episode) {
        const endpoint = GlobalVars.tvRoutes.getEpisodeDetail + showId + '/' + season + '/' + episode;
        return this.genericFetchGet(endpoint);
    }

}

export default ApiHandler;