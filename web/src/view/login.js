import React, { Component } from 'react';

import { 
    Grid, Paper, Typography, TextField, Box, Button
} from '@material-ui/core';
import PassField from '../components/InputPass';
import BackDrop from '../components/BackDrop';

// import { history } from '../redux/_helpers'
import { alertActions, userActions } from '../redux/_actions';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        height: "100%"
    },
    fh:{
        height: "100%",
    },
    paperL:{
        width: "5em",
        height: "5em",
        borderTopLeftRadius: 0,
        borderBottomLeftRadius: 0,
        background: theme.body.color,
    },
    paperR:{
        width: "16em",
        height: "auto",
        textAlign: "center",
        padding: theme.spacing(1),
    },
    text:{
        borderBottomLeftRadius: 5,
        borderBottomRightRadius: 5,
    },
    button:{
        width: "100%",
        height: "3em"
    },
    center:{
        flexBasis: 0,
    }
});

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: "",
            password: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // componentDidMount(){
    //     if(!this.props.loggedIn){
    //         alert('Você não está logado! Realize o Login e tente novamente!')
    //         history.push('/')
    //     }
    // }

    handleSubmit(e){
        e.preventDefault();
        if(this.state.password && this.state.email){
            if(this.state.password){
                if(this.state.email){
                    this.props.login({email: this.state.email, password: this.state.password})
                }else{
                    alertActions.error('Missing Email!');
                }
            }else{
                alertActions.error('Missing Password!');
            }
        }else{
            alertActions.error('Missing Password and Email!');
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() { 
        const { classes, submitted } = this.props;
        const { password, email } = this.state;
        return (
            <div className={classes.root}>
                <BackDrop open={submitted} />
                <Grid container direction="column" justify="center" align='center' alignItems="center" className={classes.fh} >
                    <Grid item xs={12} className={classes.center}>
                        <Paper className={classes.paperR} elevation={10} >
                            <form onSubmit={this.handleSubmit} >
                                <Box p={1}>
                                    <Typography variant="h4" component="h2">
                                        Login
                                    </Typography>
                                </Box>
                                <Box p={1}>
                                    <TextField onChange={this.handleChange} className={classes.text} fullWidth value={email} label="Email" name='email' variant="filled" />
                                </Box>
                                <Box p={1}>
                                    <PassField onChange={this.handleChange} className={classes.text} fullWidth value={password} label="Password " name='password' variant="filled" />
                                </Box>
                                <Box p={1} pb={2}>
                                    <Button type="submit" className={classes.button} variant="contained" color='primary' >
                                        Sign In
                                    </Button>
                                </Box>
                            </form>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        );
    }
}

function mapState(state) {
    const { loggedIn, submitted } = state.authentication
    return { loggedIn, submitted };
}

const actionCreators = {
    login: userActions.login
};

export default withRouter(connect(mapState, actionCreators)(withStyles(styles, { withTheme: true })(Login)));
