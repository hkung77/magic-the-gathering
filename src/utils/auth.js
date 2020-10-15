import { toast } from 'react-toastify';

const SERVER_API = process.env.REACT_APP_SERVER_API;

export const login = () =>
  fetch(`${SERVER_API}/magic/login`, {
    method: "POST",
    mode: "cors",
  }).then((response) => {
    return response.json();
  }).catch(e => {
    toast.error("Login Failed");
  });

export const signup = () =>
  fetch(`${SERVER_API}/magic/signup`, {
    method: "POST",
    mode: "cors",
  }).then((response) => {
    return response.json();
  }).catch(e => {
    toast.error("Signup Failed");
  });

export default {
  login,
  signup,
};
