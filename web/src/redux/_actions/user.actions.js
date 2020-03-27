//importing functions and variables redux

import axios from 'axios'
import { userConstants } from '../_constants'
import { alertActions } from './';
import { history } from '../_helpers'

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
  api = "http://localhost:8000/api";
}

axios.defaults.baseURL = api;

//exporting functions of logging and management of development logs

export const userActions = {
  login,
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
      .post('/obtain-auth-token/', data)
      .then(
        response => {
          setTimeout(() => {
            localStorage.setItem('username', data.username)
            localStorage.setItem('id', data.id)
            localStorage.setItem('token', response.data.token)
            alertActions.success('Logado! Redirecionando...')
            dispatch(success('Sucesso!'))
            history.push('/home')
          }, 1000)
        },
        err => {
          dispatch(failure(err))
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
  localStorage.removeItem('username')
  localStorage.removeItem('token')
  localStorage.removeItem('id')

  return { type: userConstants.LOGOUT }
}
