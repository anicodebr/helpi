//importing functions and variables redux

import axios from 'axios'
import { entregadorConstants } from '../_constants'
import { alertActions } from './';
// import { history } from '../_helpers'
// import * as routes from '../../utils/routes.json'

function setToken() {
  const token = localStorage.getItem('token')
  if (token) {
    axios.defaults.headers.common['Authorization'] = `Token ${token}`
  } else {
    axios.defaults.headers.common['Authorization'] = ``
  }
}

let api = "/api";
if (process.env.NODE_ENV !== "production") {
  api = "http://localhost:3001/api";
}

axios.defaults.baseURL = api;

//exporting functions of logging and management of development logs

export const entregadorActions = {
  listEntregador
}

function listEntregador() {
  setToken();
  return dispatch => {
    dispatch(request())
    alertActions.request('Getting users...')
    axios
      .get('/entregador/not-authorized')
      .then(
        response => {
          console.log(response.data)
          dispatch(success(response.data.users))
        },
        err => {
          alertActions.error('Error! Contact support!')
          dispatch(failure(err))
        }
      )
      .catch(err => {
        console.log(err)
      })
  }

  function request(user) {
    return { type: entregadorConstants.LISTUSER_REQUEST, user }
  }
  function success(users) {
    return { type: entregadorConstants.LISTUSER_SUCCESS, users }
  }
  function failure(error) {
    return { type: entregadorConstants.LISTUSER_FAILURE, error }
  }
}