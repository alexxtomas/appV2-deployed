import axios from 'axios'

const baseURL = 'http://localhost:3001/api'

let config
if (typeof window !== 'undefined') {
  config = {
    headers: {
      authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`
    }
  }
}

async function getAllRestaurants() {
  return axios
    .get(baseURL + '/restaurants')
    .then(({ data }) => data)
    .catch((e) => e)
}
async function getRestaurantById(id) {
  return axios
    .get(`${baseURL}/restaurants/${id}`)
    .then(({ data }) => data)
    .catch((err) => err)
}

async function createRestaurant(restaurant) {
  const form = new FormData()

  for (const key in restaurant) {
    form.append(key, restaurant[key])
  }
  return axios
    .post(`${baseURL}/restaurants`, form, {
      'Content-Type': 'multipart-form-data',
      headers: {
        authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`
      }
    })
    .then(({ data }) => data)
    .catch((err) => err)
}

async function updateRestaurantById(id, restaurant) {
  const form = new FormData()

  for (const key in restaurant) {
    form.append(key, restaurant[key])
  }
  return axios
    .put(`${baseURL}/restaurants/${id}`, form, {
      'Content-Type': 'multipart-form-data',
      headers: {
        authorization: `Bearer ${JSON.parse(window.localStorage.getItem('token'))}`
      }
    })
    .then(({ data }) => {
      return data
    })
    .catch((err) => err)
}

async function deleteById(id) {
  return axios
    .delete(`${baseURL}/restaurants/${id}`, config)
    .then(({ data }) => data)
    .catch((err) => err)
}

async function login(data) {
  return axios
    .post(`${baseURL}/auth/login`, data)
    .then(({ data }) => data)
    .catch((err) => err)
}

async function signUp(data) {
  return axios
    .post(`${baseURL}/auth/signUp`, data)
    .then(({ data }) => data)
    .catch((err) => err)
}

export default {
  getAllRestaurants,
  getRestaurantById,
  createRestaurant,
  deleteById,
  updateRestaurantById,
  login,
  signUp
}
