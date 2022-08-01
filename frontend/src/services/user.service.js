import { httpService } from './http.service.js'

const ENDPOINT = 'auth'
const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'

async function login(cred) {
  const user = await httpService.post(ENDPOINT + '/login', cred)
  if(user){
    _saveLocalUser(user)
    return user
  }
}
async function signup(cred) {
  
  const user =await httpService.post(ENDPOINT + '/signup', cred)
  _saveLocalUser(user)
  return user

}
async function logout() {
  sessionStorage.removeItem(STORAGE_KEY_LOGGEDIN_USER)
  return await httpService.post(ENDPOINT + '/logout')
}
async function getLoggedinUser() {
  return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER) || 'null')
}

async function _saveLocalUser(user) {
  sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
  return user
}

export const userService = {
  login,
  signup,
  logout,
  getLoggedinUser
}
