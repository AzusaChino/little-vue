const { TOKEN_ENCODE_STR, URL_PASS } = require('./config')
const CheckCode = require('../db').CheckCode
const User = require('../db').User
const jwt = require('jsonwebtoken')

module.exports = {
  create_token (str) {
    return jwt.sign({ str }, TOKEN_ENCODE_STR, { expiresIn: '1h' })
  },
  async check_token (ctx, next) {
    let url = ctx.url
    if (ctx.method !== 'GET' && !URL_PASS.includes(url)) {
      let token = ctx.get('Authorization')
      if (token === '') {
        ctx.status = 401
        ctx.body = '你还没有登录，快去登录吧!'
        return
      }
      try {
        let { str = '' } = await jwt.verify(token, TOKEN_ENCODE_STR)
        let res = await User.find({ id: str, token })
        if (res.length === 0) {
          ctx.status = 401
          ctx.body = '登录过期,请重新登录!'
          return
        }
        ctx._id = res[0]._id
        ctx.username = res[0].username
        ctx.avatar = res[0].avatar
      } catch (e) {
        ctx.status = 401
        ctx.body = '登录过期,请重新登录!'
        return
      }
    }
    await next()
  },
  async check_token_code ({ token, code }) {
    try {
      code = code.toUpperCase()
      await jwt.verify(token, TOKEN_ENCODE_STR)
      let res = await CheckCode.findOneAndDelete({ token, code })
      if (res == null) {
        return false
      }
    } catch (e) {
      return false
    }
    return true
  }
}
