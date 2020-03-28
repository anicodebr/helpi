import React, { Component } from 'react';

// import { history } from '../../redux/_helpers'
import { withRouter } from 'react-router-dom'
import { connect } from 'react-redux';
import { Grid } from "@material-ui/core"
import MaterialTable from 'material-table'

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
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid item xs={12} md={10} sm={12}>
                        <MaterialTable
                            columns={[
                                { title: 'Nome', field: 'name' },
                                { title: 'Sobre Nome', field: 'surname' },
                                { title: 'Ano de Nascimento', field: 'birthYear', type: 'numeric' },
                                { title: 'Cidade de nascimento', field: 'birthCity', lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' } }
                            ]}
                            options={{
                                toolbar: false,
                                pageSize: 8
                            }}
                            onRowClick={((evt, selectedRow) => console.log(selectedRow))}
                            data={[
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 },
                                { name: 'Mehmet', surname: 'Baran', birthYear: 1987, birthCity: 63 }
                            ]}
                            />
                    </Grid>
                </Grid>
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