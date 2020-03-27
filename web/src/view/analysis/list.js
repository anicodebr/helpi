import React, { Component } from 'react';

// import { history } from '../../redux/_helpers'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class UsersList extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount(){
    //     if(!this.props.loggedIn){
    //         alert('Você não está logado! Realize o Login e tente novamente!')
    //         history.push('/')
    //     }
    // }

    render() { 
        return (
            <>
                <h1 onClick={() => {console.log(this.props)}}> User List </h1>
            </>
        );
    }
}

function mapState(state) {
    const { loggedIn } = state.authentication
    return { loggedIn };
}

const actionCreators = {
};

export default withRouter(connect(mapState, actionCreators)(UsersList));