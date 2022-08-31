export const BASE_URL = "http://localhost:3002";

function checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(res.status);
  }
  
  
  export function registerUser(email, password) {
    return fetch(`${BASE_URL}/signup`, {
      credentials: 'include',
      mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(checkResponse);
  }
  
  export function loginUser(email, password) {
    return fetch(`${BASE_URL}/signin`, {
      credentials: 'include',
      mode: 'no-cors',
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then(checkResponse);
  }
  
  export function getToken(jwt) {
    return fetch(`${BASE_URL}/users/me`, {
      credentials: 'include',
      mode: 'no-cors',
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    }).then(checkResponse);
  }
