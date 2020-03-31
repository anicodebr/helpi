//importing functions and variables redux

import axios from 'axios'
import { userConstants } from '../_constants'
import { alertActions } from './';
import { history } from '../_helpers'
import * as routes from '../../utils/routes.json'

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

export const userActions = {
  login,
  listUsers,
  updateUser,
  logout
}

//login funcion

function login(data) {
  setToken();
  return dispatch => {
    dispatch(request(data.username))
    alertActions.request('Logando...')
    axios
      .post('/admin/auth', data)
      .then(
        response => {
          setTimeout(() => {
            localStorage.setItem('name', response.data.name)
            localStorage.setItem('id', response.data.id)
            localStorage.setItem('token', response.data.token)
            alertActions.success('Logado! Redirecionando...')
            dispatch(success('Sucesso!'))
            history.push(routes.dash.route)
          }, 1000)
        },
        err => {
          alertActions.error('Wrong email or password!')
          dispatch(failure(err))
        }
      )
      .catch(err => {
        console.log(err)
      })
  }

  function request(user) {
    return { type: userConstants.LOGIN_REQUEST, user }
  }
  function success(user) {
    return { type: userConstants.LOGIN_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.LOGIN_FAILURE, error }
  }
}

function listUsers(data) {
  setToken();
  return dispatch => {
    dispatch(request())
    alertActions.request('Getting users...')
    axios
      .get('/users')
      .then(
        response => {
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
    return { type: userConstants.LISTUSER_REQUEST, user }
  }
  function success(users) {
    return { type: userConstants.LISTUSER_SUCCESS, users }
  }
  function failure(error) {
    return { type: userConstants.LISTUSER_FAILURE, error }
  }
}

function updateUser(data) {
  setToken();
  return async dispatch => {
    dispatch(request('Updating User'))
    axios
      .patch(`/user/${data.id}/`, data)
      .then(
        response => {
          dispatch(success(response.data))
          history.push('/')
        },
        err => {
          dispatch(failure(err))
        }
      )
      .catch(err => {
        console.log(err)
      })
  }

  function request(msg) {
    return { type: userConstants.UPDATE_USER_REQUEST, msg }
  }
  function success(user) {
    return { type: userConstants.UPDATE_USER_SUCCESS, user }
  }
  function failure(error) {
    return { type: userConstants.UPDATE_USER_FAILURE, error }
  }
}

//logout function

function logout() {
  //calling logout service
  localStorage.removeItem('name')
  localStorage.removeItem('token')
  localStorage.removeItem('id')

  return { type: userConstants.LOGOUT }
}
