/* eslint-disable class-methods-use-this */
class Api {
  constructor({ baseUrl, headers }) {
    this.baseUrl = baseUrl;
    this.headers = headers;
  }

  handleOriginalResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(new Error(`Что-то пошло не так: ${res.status}`));
  }

  getAllInfo() {
    return Promise.all([this.getInitialCards(), this.getUserInfo()]);
  }

  getInitialCards() {
    return fetch(`${this.baseUrl}/cards`, {
      headers: this.headers,
    }).then(this.handleOriginalResponse);
  }

  setUserInfo(item) {
    return fetch(`${this.baseUrl}/users/me`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(item),
    }).then(this.handleOriginalResponse);
  }

  editAvatar(item) {
    return fetch(`${this.baseUrl}/users/me/avatar`, {
      method: 'PATCH',
      headers: this.headers,
      body: JSON.stringify(item),
    }).then(this.handleOriginalResponse);
  }

  putLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'PUT',
      headers: this.headers,
    }).then(this.handleOriginalResponse);
  }

  removeLike(id) {
    return fetch(`${this.baseUrl}/cards/likes/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this.handleOriginalResponse);
  }

  addCard(item) {
    return fetch(`${this.baseUrl}/cards`, {
      method: 'POST',
      headers: this.headers,
      body: JSON.stringify(item),
    }).then(this.handleOriginalResponse);
  }

  deleteCard(id) {
    return fetch(`${this.baseUrl}/cards/${id}`, {
      method: 'DELETE',
      headers: this.headers,
    }).then(this.handleOriginalResponse);
  }

  getUserInfo() {
    return fetch(`${this.baseUrl}/users/me`, {
      headers: this.headers,
    }).then(this.handleOriginalResponse);
  }
}

const getToken = () => localStorage.getItem('jwt');

const api = new Api({
  baseUrl: 'https://api.kvitkina.students.nomoreparties.space',
  headers: {
    Authorization: `Bearer ${getToken()}`,
    'Content-Type': 'application/json',
  },
});
export default api;
