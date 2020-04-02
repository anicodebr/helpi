import React, { Component } from 'react';

import { Box } from "@material-ui/core";
import BackDrop from "../../components/BackDrop";

import { history } from '../../redux/_helpers';
import { entregadorActions } from '../../redux/_actions';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Grid } from "@material-ui/core";
import MaterialTable from 'material-table';

class UsersList extends Component {
    constructor(props) {
        super(props);

        this.props.listEntregador();

    }

    // componentDidMount(){
    //     if(!this.props.loggedIn){
    //         alert('Você não está logado! Realize o Login e tente novamente!')
    //         history.push('/')
    //     }
    // }

    render() { 
        const { submitted, users } = this.props
        return (
            <>
            <BackDrop open={submitted} />
            <Box style={{ width: "100%", height: "100%" }} display='flex' alignItems="center" justifyContent="center">
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} md={10} sm={12}>
                        <MaterialTable
                            columns={[
                                { title: 'Nome', field: 'name' },
                                { title: 'Email', field: 'email' },
                                { 
                                    title: 'Ano de Nascimento', 
                                    field: 'createdAt', 
                                    customSort: (a,b) => (new Date(a.createdAt).getTime() - new Date(b.createdAt).getTime()),
                                    render: rowData => <>{(new Date(rowData.createdAt).toLocaleString())}</>
                                }
                            ]}
                            options={{
                                toolbar: false,
                                pageSize: 8,
                                pageSizeOptions: 8
                            }}
                            onRowClick={((evt, selectedRow) => history.push(`/analysis/user/${selectedRow.id}`))}
                            data={users}
                            />
                    </Grid>
                </Grid>
            </Box>
            </>
        );
    }
}

function mapState(state) {
    const { loggedIn } = state.authentication
    const { users, submitted } = state.listEntregador
    return { loggedIn, users, submitted };
}

const actionCreators = {
    listEntregador: entregadorActions.listEntregador
};

export default withRouter(connect(mapState, actionCreators)(UsersList));