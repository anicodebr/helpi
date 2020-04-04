//importing functions and variables redux

import axios from 'axios'
import { entregadorConstants } from '../_constants'
import { alertActions } from './';
// import { history } from '../_helpers'
// import * as routes from '../../utils/routes.json'

function arrayBufferToString(buffer){

  var bufView = new Uint16Array(buffer);
  var length = bufView.length;
  var result = '';
  var addition = Math.pow(2,16)-1;

  for(var i = 0;i<length;i+=addition){

      if(i + addition > length){
          addition = length - i;
      }
      result += String.fromCharCode.apply(null, bufView.subarray(i,i+addition));
  }

  return result;

}

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
  listEntregador,
  getEntregador
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
    return { type: entregadorConstants.LIST_ENTREGADOR_REQUEST, user }
  }
  function success(users) {
    return { type: entregadorConstants.LIST_ENTREGADOR_SUCCESS, users }
  }
  function failure(error) {
    return { type: entregadorConstants.LIST_ENTREGADOR_FAILURE, error }
  }
}

function getEntregador(id) {
  setToken();
  return dispatch => {
    dispatch(request(id))
    alertActions.request('Buscando Entregador...')
    axios
      .get(`/entregador/${id}`)
      .then(
        response => {
          let foto = arrayBufferToString(response.data.foto.data)
          let rg_frente = arrayBufferToString(response.data.Entregador.rg_frente.data)
          let rg_tras = arrayBufferToString(response.data.Entregador.rg_tras.data)
          dispatch(success({
            ...response.data,
            foto: `${foto}`,
            dt_nasc: new Date(response.data.dt_nasc.replace(/-/g, '/')).toLocaleDateString('pt-BR'),
            Entregador:{
              ...response.data.Entregador,
              rg_frente: rg_frente,
              rg_tras: rg_tras
            }
          }))
        },
        err => {
          alertActions.error('Error! Contate o Suporte!')
          dispatch(failure(err))
        }
      )
      .catch(err => {
        console.log(err)
      })
  }

  function request(id) {
    return { type: entregadorConstants.GET_ENTREGADOR_REQUEST, id }
  }
  function success(entregador) {
    return { type: entregadorConstants.GET_ENTREGADOR_SUCCESS, entregador }
  }
  function failure(error) {
    return { type: entregadorConstants.GET_ENTREGADOR_FAILURE, error }
  }
}

