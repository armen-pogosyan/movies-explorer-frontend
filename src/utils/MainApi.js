const BASE_URL = 'https://api.diploma-project.nomoredomains.work';
//const BASE_URL = 'http://localhost:3001';
const token = localStorage.getItem("jwt");

const getJson = (res)=>{
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

const register = (name, password, email) => {
  return fetch(`${BASE_URL}/signup`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email, name})
  })
  .then((res)=>{
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.json());
  })
};

const login = (password, email) => {
  return fetch(`${BASE_URL}/signin`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({password, email})
  })
  .then((res)=>{
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.json());
  })
};

const setUserInfo = (name, email) => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({name, email})
  })
  .then((res)=>{
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.json());
  })
}


const addMovies = (movie) => {
  const {country, description, director, duration, image, nameEN, nameRU, trailerLink, year, id} = movie;
  const thumbnail = trailerLink;
  const imageURL =`https://api.nomoreparties.co${image.url}`
  return fetch(`${BASE_URL}/movies`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({country, description, director, duration, image: imageURL, nameEN, nameRU, trailerLink, year, movieId: id, thumbnail})
  })
  .then(getJson)
}

const getMovies = () => {
  return fetch(`${BASE_URL}/movies`, {
    method: 'GET',
    headers: {
      authorization: `Bearer ${token}`,
    }
  })
  .then(getJson)
}

const deleteMovie = (id) => {
  return fetch(`${BASE_URL}/movies/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({id})
  })
  .then(getJson)
}

const checkToken = () => {
  return fetch(`${BASE_URL}/users/me`, {
    method: 'GET',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      authorization: `Bearer ${token}`,
    }
  })
  .then(getJson)
}

export const mainApi = {
  deleteMovie,
  getMovies,
  addMovies,
  setUserInfo,
  login,
  register,
  checkToken
}