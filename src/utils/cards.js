import { toast } from "react-toastify";
import { logout } from '../utils/auth';

const SERVER_API = process.env.REACT_APP_SERVER_API;

const fetchGet = (url) => {
  const token = localStorage.getItem("token");
  return fetch(`${SERVER_API}${url}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      authorization: token,
    },
  }).then(async (response) =>
    response.ok ? response.json() : handleError(response)
  );
}

const handleError = async (response) => {
  // NOTE:
  // We can add more error handling responses
  switch(response.status) {
    case 401:
      logout();
      break;
    default:
      break;
  }
  
  return Promise.reject(await response.json());
}

export const getCards = () => 
  fetchGet('/magic/cards').then(response => {
    console.log(response);
    return response;
  }).catch(({ error })  => {
    toast.error(error);
  })

