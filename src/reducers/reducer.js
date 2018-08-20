const initalState = {
    nowShowingList: []
};

const reducer = (state = initalState, action) => {

    if(action.type === 'GET_NOW_SHOWING') {
        if(state.nowShowingList.length === 0){
            return {
                nowShowingList: [{item: 'test1'}, {item: 'test2'}]
            }
        } else {
            console.log('cached data');
            return {
                nowShowingList: state.nowShowingList
            }
        }
    }

    return state;
}

export default reducer;