import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../action';
class Home extends React.Component{
    constructor(){
        super();
        this.handleGetUsers = this.handleGetUsers.bind(this);
    }
    handleGetUsers(){
        this.props.fetchUsers();
    }
    render(){
        const { users } = this.props;
        return(
            <div className = 'home'>
                {users && users.map((el,index) => (
                    <div key = {index}>{el.name}</div>
                ))}
                <button onClick = {this.handleGetUsers}>Fetch Users</button>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    api: state.HomeReducer.api,
    users: state.HomeReducer.users,
    error: state.HomeReducer.error,
    fetching: state.HomeReducer.error,
    fetched: state.HomeReducer.fetched
})

const mapDispatchToProps = dispatch => ({
    fetchUsers: () => dispatch(actions.fetchUsers())
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
