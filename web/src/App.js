import React, { Component } from 'react';
import "react-toastify/dist/ReactToastify.css";

import { MuiThemeProvider } from '@material-ui/core/styles';
import { ToastContainer } from "react-toastify";
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from './utils/global';

import * as routes from './utils/routes.json';
import { themeL } from './utils/theme'
import { history } from './redux/_helpers';
import { Router } from 'react-router-dom';
import { connect } from 'react-redux';

import Login_Page from './view/login';
import Dash_Page from './view/dashboard';

import UsersList from './view/analysis/list';
import UserDatails from './view/analysis/user';

import PublicRoute from './components/routes/public';
import LayoutRoute from './components/routes/private_layout';

class App extends Component {
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
            <ThemeProvider theme={themeL}>
              <MuiThemeProvider theme={themeL}>
                <GlobalStyles />
                <Router history={history}>
                  <PublicRoute restricted={false} component={Login_Page} path="/" exact />
                  <LayoutRoute restricted={false} title={routes.dash.title} component={Dash_Page} path={routes.dash.route} exact />
                  <LayoutRoute restricted={false} title={routes.analysis.title} component={UsersList} path={routes.analysis.route} exact />
                  <LayoutRoute restricted={false} title={routes.analysis.user.title} component={UserDatails} path={routes.analysis.user.route + "/:id"} exact />
                </Router>
                <ToastContainer autoClose={3000} />
              </MuiThemeProvider>
            </ThemeProvider>
            </>
        );
    }
}

function mapState(state) {
    return {};
}

const actionCreators = {
};

export default connect(mapState, actionCreators)(App);
