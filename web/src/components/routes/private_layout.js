import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isLogin } from '../../utils';
import Layout from '../Layout'
const LayoutRoute = ({ title, toogleTheme, getTheme, component: Component, ...rest }) => {
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isLogin() ?
                <Layout toogleTheme={toogleTheme} getTheme={getTheme} title={title}>
                    <Component {...props} />
                </Layout>
                : <Redirect to="/" />
        )} />
    );
};

export default LayoutRoute;