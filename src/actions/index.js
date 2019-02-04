import Axios from "axios";

export const FETCH_ARTICALS_START = "FETCH_ARTICALS_START";
export const FETCH_ARTICALS_FAIL = "FETCH_ARTICALS_FAIL";
export const FETCH_ARTICALS_SUCCESSFUL = "FETCH_ARTICALS_SUCCESSFUL";

export const ADD_START = "ADD__START";
export const ADD_SUCCESSFUL = "ADD__SUCCESSFUL";
export const ADD_FAIL = "ADD__FAIL";

export const REGISTER_REQUEST = "REGISTER_REQUEST";
export const REGISTER_SUCCESS = "REGISTER_SUCCESS";
export const REGISTER_FAIL = "REGISTER_FAIL";

export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAIL = "LOGIN_FAIL";

export const fetch = () => dispatch => {
  dispatch({ type: FETCH_START });
  Axios.get("http://192.168.1.246:3333/")
    .then(res => dispatch({ type: FETCH_SUCCESSFUL, payload: res.data }))
    .catch(err => dispatch({ type: FETCH_FAIL, payload: err }));
};

export const register = newUser => dispatch => {
  dispatch({ type: REGISTER_REQUEST });
  Axios.post(`https://pintereach.herokuapp.com/auth/register`, newUser)
    .then(res => dispatch({ type: REGISTER_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: REGISTER_FAIL, payload: err }));
};

export const login = creds => dispatch => {
  dispatch({ type: LOGIN_REQUEST });
  Axios.post(`https://pintereach.herokuapp.com/auth/login`, creds)
    .then(res => dispatch({ type: LOGIN_SUCCESS, payload: res.data }))
    .catch(err => dispatch({ type: LOGIN_FAIL, payload: err }));
};
