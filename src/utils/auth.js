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
      toast.success("User Logged In");
      return response;

    })
    .catch(({error}) => {
      toast.error(error);
    });

export const signup = (body) =>
  fetchPost("/magic/signup", body)
    .then((response) => {
      toast.success("User Created");
      return response;
    })
    .catch(({error}) => {
      toast.error(error);
    });

  export const logout = () => {
    localStorage.clear();
    document.location.reload();
  }

export default {
  login,
  logout,
  signup,
};
