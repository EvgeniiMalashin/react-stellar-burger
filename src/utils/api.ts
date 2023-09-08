import { API } from "./constatnts";

export function request(endPoint: string, options: object) {
  const url = API + endPoint;
  return fetch(url, options).then((res) => res.ok
    ? res.json()
    : Promise.reject(`Ошибка: ${res.status}`)
  )
}