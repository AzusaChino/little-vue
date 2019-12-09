const { check_token_code, create_token } = require('../utils/token')
const User = require('../db').User
const sha1 = require('sha1')
const { PWD_ENCODE_STR } = require('../utils/config')
const xss = require('xss')
module.exports = {
  // 用户登录
  async login (ctx) {
    let { id = '', password = '', code = '', code_token = '' } = ctx.request.body
    try {
      // 验证码判断
      let mark = await check_token_code({ token: code_token, code })
      if (!mark) {
        ctx.body = {
          code: 401,
          msg: '登录失败，验证码错误!'
        }
        return
      }
      password = sha1(sha1(password + PWD_ENCODE_STR))
      let res = await User.find({ id, password })
      if (res.length === 0) {
        ctx.body = {
          code: 401,
          msg: '登录失败，用户名或者密码错误!'
        }
        return
      }
      let token = create_token(id)
      res[0].token = token
      res[0].save()
      ctx.body = {
        code: 200,
        msg: '登录成功!',
        data: {
          _id: res[0]._id,
          username: res[0].username,
          avatar: res[0].avatar,
          token
        }
      }
    } catch (e) {
      console.log(e)
      ctx.body = {
        code: 500,
        msg: '登录失败，服务器异常!'
      }
    }
  },
  async register (ctx) {
    let { id = '', username = '', password = '', re_password = '', avatar = '', code = '', code_token = '' } = ctx.request.body
    try {
      if (password.length < 5) {
        ctx.body = {
          code: 401,
          msg: '注册失败，密码最少为5位！'
        }
        return
      }
      if (password !== re_password) {
        ctx.body = {
          code: 401,
          msg: '注册失败，2次密码输入不一致!'
        }
        return
      }
      // 验证码判断
      let mark = await check_token_code({ token: code_token, code })
      if (!mark) {
        ctx.body = {
          code: 401,
          msg: '登录失败，验证码错误!'
        }
        return
      }
      // 判断 user_id 是否重复
      let res = await User.find({ id })
      if (res.length !== 0) {
        ctx.body = {
          code: 409,
          msg: '注册失败，登录账号重复了，换一个吧！'
        }
        return
      }
      password = sha1(sha1(password + PWD_ENCODE_STR))
      // 防止xss攻击， 转义
      username = xss(username)
      let token = create_token(id)
      let user = new User({ id, username, password, avatar, token })
      res = await user.save()
      if (res._id != null) {
        ctx.body = {
          code: 200,
          msg: '注册成功!',
          data: {
            _id: res._id,
            username,
            avatar,
            token
          }
        }
      } else {
        ctx.body = {
          code: 500,
          msg: '注册失败，服务器异常!'
        }
      }
    } catch (e) {
      ctx.body = {
        code: 500,
        msg: '注册失败，服务器异常！'
      }
    }
  }
}
