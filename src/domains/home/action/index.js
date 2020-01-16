export const FETCH_USERS = "FETCH_USERS";
export const USERS_FETCHED = "USERS_FETCHED";


export const fetchUsers = () => ({type:FETCH_USERS})
export const usersFetched = users => ({type:USERS_FETCHED,payload:users})
