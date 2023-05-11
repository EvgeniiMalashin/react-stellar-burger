const API = "https://norma.nomoreparties.space/api";

function serverResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка: ${res.status}`);
}

export function getIngredients() {
  return fetch(`${API}/ingredients`)
  .then(res => serverResponse(res))
}
