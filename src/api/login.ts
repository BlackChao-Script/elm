import { request } from './request'

//! 获取验证码
export function getVerificationCode() {
  return request({
    method: 'post',
    url: '/v1/captchas',
  })
}
//! 登录
export function login(
  username: string,
  password: string,
  captcha_code: string
) {
  return request({
    method: 'post',
    url: '/v2/login',
    data: {
      username,
      password,
      captcha_code,
    },
  })
}
