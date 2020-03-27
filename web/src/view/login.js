import React, { Component } from 'react';

import { 
    Grid, Paper, Typography, TextField, Box, Button
} from '@material-ui/core';
import PassField from '../components/InputPass'

// import { history } from '../redux/_helpers'
import { alertActions } from '../redux/_actions';
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom'
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
            user: "",
            pass: ""
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
        if(this.state.pass && this.state.pass){
            if(this.state.pass){
                if(this.state.user){
                    
                }else{
                    alertActions.error('Missing User Name!');
                }
            }else{
                alertActions.error('Missing Password!');
            }
        }else{
            alertActions.error('Missing Password and User Name!');
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    render() { 
        const { classes } = this.props;
        const { pass, user } = this.state;
        return (
            <div className={classes.root}>
                <Grid container direction="column" justify="center" align='center' alignItems="center" className={classes.fh} >
                    <Grid item xs={12} className={classes.center}>
                        <Paper className={classes.paperR}>
                            <form onSubmit={this.handleSubmit} >
                                <Box p={1}>
                                    <Typography variant="h4" component="h2">
                                        Login
                                    </Typography>
                                </Box>
                                <Box p={1}>
                                    <TextField onChange={this.handleChange} className={classes.text} fullWidth value={user} label="User Name" name='user' variant="filled" />
                                </Box>
                                <Box p={1}>
                                    <PassField onChange={this.handleChange} className={classes.text} fullWidth value={pass} label="Password " name='pass' variant="filled" />
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
    const { loggedIn } = state.authentication
    return { loggedIn };
}

const actionCreators = {
};

export default withRouter(connect(mapState, actionCreators)(withStyles(styles, { withTheme: true })(Login)));
