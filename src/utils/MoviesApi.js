class Api {
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL
  }
  
  _getHeaders() {
    return {
      'Content-Type': 'application/json'
    }   
  }

  _getJson(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Ошибка: ${res.status}`);
  }

  getInitialMovies() {
    return fetch(`${this.BASE_URL}`, {
      headers: this._getHeaders()
      })
    .then(this._getJson)
}
}
export const moviesApi = new Api('https://api.nomoreparties.co/beatfilm-movies');