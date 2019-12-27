import request from '../request'

const getCode = () => {
  return request.get('/api/code/checkcode')
}

export default {
  getCode
}
