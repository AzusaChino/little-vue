import request from '../request'

// 注册
const register = (data) => {
  return request.post('/api/user/register', data)
}

// 登陆
const login = (data) => {
  return request.post('/api/user/login', data)
}

export default {
  register,
  login
}
