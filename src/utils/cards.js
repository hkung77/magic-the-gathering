
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

export const getCards = (key, filters, page = 1) => {
  let URL = `/magic/cards?page=${page}&`;
  // Apply all filters
  Object.keys(filters).forEach(key => {
    URL = URL.concat(`${key}=${filters[key]}&`)
  });

  URL = URL.substring(0, URL.length - 1);
  return fetchGet(URL)
    .then((response) => {
      return response;
 })

}
