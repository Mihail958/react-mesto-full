class Api {
  constructor({ baseUrl, headers }) {
    this._headers = headers;
    this._baseUrl = baseUrl;
  }

  //проверка ответа от сервера
  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }

  //получение данных профиля
  getProfile() {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      mode: 'no-cors',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //получение карточек
  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      credentials: 'include',
      mode: 'no-cors',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //редактирование профиля
  editProfile(name, about) {
    return fetch(`${this._baseUrl}/users/me`, {
      credentials: 'include',
      mode: 'no-cors',
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._checkResponse);
  }

  //добавление новых карточек
  addNewCard(name, link) {
    return fetch(`${this._baseUrl}/cards`, {
      credentials: 'include',
      mode: 'no-cors',
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._checkResponse);
  }

  //удаление карточек
  deleteCard(id) {
    return fetch(`${this._baseUrl}/cards/${id}`, {
      credentials: 'include',
      mode: 'no-cors',
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //удаление и постановка лайков
  changeLikeCardStatus(id, likeStatus) {
    return fetch(`${this._baseUrl}/cards/${id}/likes`, {
      credentials: 'include',
      mode: 'no-cors',
      method: likeStatus ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //редактирование аватара
  changeAvatar(link) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      credentials: 'include',
      mode: 'no-cors',
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: link }),
    }).then(this._checkResponse);
  }
}



export  const api = new Api({
  baseUrl: "http://localhost:3002",
  credentials: 'include',
  mode: 'no-cors',
  headers: {
    "Content-Type": "application/json",
  },
});
