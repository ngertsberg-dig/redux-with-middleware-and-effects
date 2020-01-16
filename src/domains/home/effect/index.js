import * as actions from '../action';

const fetchUsers = async ( store, { type } ) => {
    if(type == actions.FETCH_USERS){
        const api = store.getState().HomeReducer.api;
        const data = await fetch(api).then(res=>res.json());
        store.dispatch(actions.usersFetched(data));
    }
}

export default [
    fetchUsers
];