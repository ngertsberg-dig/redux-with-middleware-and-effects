import * as actions from '../action';
const initialState = {
    users: null,
    fetched: false,
    fetching: false,
    error: false,
    api: "https://jsonplaceholder.typicode.com/users"
}

export default (state = initialState, action) => {
    switch(action.type){
        case actions.FETCH_USERS:
            return { ...state, fetching: true, fetched: false }
        case actions.USERS_FETCHED:
            return { ...state, fetching: false, fetched: true, users: action.payload }

    }
    return state;
}