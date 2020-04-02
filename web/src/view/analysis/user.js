import React, { Component } from 'react';

import { entregadorActions } from '../../redux/_actions';

// import { history } from '../../redux/_helpers'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';

class UsersDetails extends Component {
    constructor(props) {
        super(props);

        this.props.getEntregador(this.props.match.params.id)
    }

    // componentDidMount(){
    //     if(!this.props.loggedIn){
    //         alert('Você não está logado! Realize o Login e tente novamente!')
    //         history.push('/')
    //     }
    // }

    render() { 
        return (
            <>
                <h1 onClick={() => {console.log(this.props)}}> User Datails </h1>
            </>
        );
    }
}

function mapState(state) {
    const { loggedIn } = state.authentication
    const { entregador } = state.listEntregador
    return { loggedIn, entregador };
}

const actionCreators = {
    getEntregador: entregadorActions.getEntregador
};

export default withRouter(connect(mapState, actionCreators)(UsersDetails));