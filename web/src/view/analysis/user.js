import React, { Component } from 'react';

import { entregadorActions } from '../../redux/_actions';
import { 
    Box, Grid, Paper, Divider, Typography
 } from '@material-ui/core';
import BackDrop from '../../components/BackDrop';

// import { history } from '../../redux/_helpers'
import { withStyles } from '@material-ui/core/styles';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';

const styles = theme => ({
    root: {
        height: "100%"
    },
    divider:{
        width: '100%',
    },
    paper:{
        height: "100%",
        padding: theme.spacing(2)
    }
});

class EntregadorDetails extends Component {
    constructor(props) {
        super(props);
        
    }

    componentDidMount(){
        this.props.getEntregador(this.props.match.params.id)
        // if(!this.props.loggedIn){
        //     alert('Você não está logado! Realize o Login e tente novamente!')
        //     history.push('/')
        // }
    }

    render() { 
        const { submitted, classes } = this.props;
        // const { name } = this.props.entregador;
        return (
            <>
            {!this.props.entregador?
            <BackDrop open={submitted} />
            :
            <Box p={2} className={classes.root} display='flex' alignItems="center" justifyContent="center">
                <Grid container direction="row" justify="center" alignItems="center" className={classes.root}>
                    <Grid item xs={12} md={12} sm={12} className={classes.root}>
                        <Paper elevation={5} className={classes.paper} >
                            <Grid container direction="row" className={classes.root}>
                                <Grid item xs={8}> 
                                    <Grid container direction="row" className={classes.root}>
                                        <Grid item xs={12}>
                                            <Typography variant="h5">{this.props.entregador.name}</Typography>
                                            <Divider className={classes.divider} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    <Divider style={{height: "100%"}} orientation="vertical" flexItem />
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
            }
            </>
        );
    }
}

function mapState(state) {
    const { loggedIn } = state.authentication
    const { entregador, submitted } = state.listEntregador
    return { loggedIn, entregador, submitted };
}

const actionCreators = {
    getEntregador: entregadorActions.getEntregador
};

export default withRouter(connect(mapState, actionCreators)(withStyles(styles, { withTheme: true })(EntregadorDetails)));
