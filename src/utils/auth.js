import { toast } from "react-toastify";

const SERVER_API = process.env.REACT_APP_SERVER_API;

const fetchPost = (url, body) =>
  fetch(`${SERVER_API}${url}`, {
    method: "POST",
    mode: "cors",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  }).then(async (response) =>
    response.ok ? response.json() : Promise.reject(await response.json())
  );

export const login = (body) =>
  fetchPost("/magic/login", body)
    .then((response) => {
      return response.json();
    })
    .catch(({error}) => {
      toast.error(error);
    });

export const signup = (body) =>
  fetchPost("/magic/signup", body)
    .then((response) => {
      toast.success("User Created");
      // Handle token?
      return response;
    })
    .catch(({error}) => {
      toast.error(error);
    });

export default {
  login,
  signup,
};
