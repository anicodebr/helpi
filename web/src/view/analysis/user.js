import React, { Component } from 'react';

import { entregadorActions } from '../../redux/_actions';
import { 
    Box, Grid, Paper, Divider, Typography, TextField, Button
 } from '@material-ui/core';
import BackDrop from '../../components/BackDrop';
import InputMask from '../../components/InputMask';
import Collapse from '../../components/expansion';

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
    },
    textDisabled:{
        WebkitTextFillColor: 'black'
    },
    bSize:{
        width: "18em",
        height: "6em",
    }
});

class EntregadorDetails extends Component {
    constructor(props) {
        super(props);
        this.props.getEntregador(this.props.match.params.id)    
    }

    // componentDidMount(){
        // if(!this.props.loggedIn){
        //     alert('Você não está logado! Realize o Login e tente novamente!')
        //     history.push('/')
        // }
    // }

    render() { 
        const { submitted, classes } = this.props;
        // const { name } = this.props.entregador;
        return (
            <>
            {!this.props.entregador?
            <BackDrop open={submitted} />
            :
            <Box p={2} className={classes.root} display='flex' alignItems="center" justifyContent="center">
                <Grid container direction="row" className={classes.root}>
                    <Grid item xs={12} md={12} sm={12} className={classes.root}>
                        <Paper elevation={5} className={classes.paper} >
                            <Grid container direction="row" className={classes.root}>
                                <Grid item xs={8}> 
                                    <Grid container direction="row" className={classes.root}>
                                        <Grid item xs={12}>
                                            <Box p={1}>
                                                <Typography variant="h5">{this.props.entregador.name}</Typography>
                                            </Box>
                                            <Divider className={classes.divider} />
                                        </Grid>
                                        <Grid item xs={4}>
                                            <Box p={1} display='flex' justifyContent="center" alignItems="center">
                                                <img style={{width: 'auto', height: 260}} src={`data:image/jpeg;base64,${this.props.entregador.foto}`} alt="foto do entregador" />
                                            </Box>
                                        </Grid>
                                        <Grid item xs={8}>
                                            <Box style={{height: "100%"}} display='flex' alignItems="center" >
                                                <Divider style={{height: "100%", float: "left"}} orientation="vertical" flexItem />
                                                <Grid style={{width: "calc(100% - 1px)"}} justify="center" alignItems="center" container direction="row">
                                                    <Grid item xs={12}>
                                                        <Box p={1}>
                                                            <TextField disabled className={classes.textDisabled} fullWidth id="filled-basic" label="Email" value={this.props.entregador.email} variant="filled" />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Box p={1} pt={0}>
                                                            <TextField disabled className={classes.textDisabled} fullWidth id="filled-basic" label="Data de Nascimento" value={this.props.entregador.dt_nasc} variant="filled" />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={6}>
                                                        <Box p={1} pt={0}>
                                                            <InputMask mask="999.999.999-99" disabled className={classes.textDisabled} fullWidth id="filled-basic" label="CPF" value={this.props.entregador.cpf} variant="filled" />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12}>
                                                        <Box p={1} pt={0}>
                                                            <InputMask mask="(99) 99999-9999" disabled className={classes.textDisabled} fullWidth id="filled-basic" label="Telefone" value={this.props.entregador.tel} variant="filled" />
                                                        </Box>
                                                    </Grid>
                                                </Grid>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12}>
                                            <Divider className={classes.divider} />
                                            <Box p={1} pb={8} display='flex' justifyContent="flex-start" alignItems="center">
                                                <TextField multiline disabled className={classes.textDisabled} fullWidth id="filled-basic" label="Resumo" value={this.props.entregador.Entregador.descricao} variant="filled" />
                                            </Box>
                                            <Box display='flex' justifyContent="flex-end">
                                                <Box p={1} flexGrow={1}>
                                                    <Button className={classes.bSize} variant="contained" style={{backgroundColor: "#F29797"}} > Recusar </Button>
                                                </Box>
                                                <Box p={1}>
                                                    <Button className={classes.bSize} variant="contained" color='primary'>Aceitar</Button>
                                                </Box>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item xs={4}>
                                    <Divider style={{height: "100%", float: 'left'}} orientation="vertical" flexItem />
                                    <Box p={1}>
                                        <Typography variant="h5">Identidade</Typography>
                                    </Box>
                                    <Divider style={{width:"calc(100% -1px)"}} />
                                    <Box display='flex' alignItems="flex-start" style={{height: "90%"}}>
                                        <Collapse rg_frente={this.props.entregador.Entregador.rg_frente} rg_tras={this.props.entregador.Entregador.rg_tras} />
                                    </Box>
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
