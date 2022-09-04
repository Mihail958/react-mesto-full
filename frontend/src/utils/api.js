class Api {
  constructor({ Url, headers }) {
    this._headers = headers;
    this._Url = Url;
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
    return fetch(`${this._Url}/users/me`, {
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //получение карточек
  getInitialCards() {
    return fetch(`${this._Url}/cards`, {
      credentials: 'include',
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //редактирование профиля
  editProfile(data) {
    return fetch(`${this._Url}/users/me`, {
      credentials: 'include',
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        about: data.about
      }),
    }).then(this._checkResponse);
  }

  //добавление новых карточек
  addNewCard(data) {
    return fetch(`${this._Url}/cards`, {
      credentials: 'include',
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name: data.name,
        link: data.link
      }),
    }).then(this._checkResponse);
  }

  //удаление карточек
  deleteCard(id) {
    return fetch(`${this._Url}/cards/${id}`, {
      credentials: 'include',
      method: "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //удаление и постановка лайков
  changeLikeCardStatus(id, likeStatus) {
    return fetch(`${this._Url}/cards/${id}/likes`, {
      credentials: 'include',
      method: likeStatus ? "PUT" : "DELETE",
      headers: this._headers,
    }).then(this._checkResponse);
  }

  //редактирование аватара
  changeAvatar(link) {
    return fetch(`${this._Url}/users/me/avatar`, {
      credentials: 'include',
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar: link }),
    }).then(this._checkResponse);
  }

}

export  const api = new Api({
  Url: "https://domainname.mikhail.bac.nomoredomains.sbs",
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem('jwt')}`
  },
});