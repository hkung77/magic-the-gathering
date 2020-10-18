
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
    response.ok
      ? response.json()
      : Promise.reject({ ...(await response.json()), status: response.status })
  );
};

export const getCards = (key, page) =>
  fetchGet(`/magic/cards?page=${page}`)
    .then((response) => {
      console.log(response);
      return response;
    })
