import { request } from './request'

//! 获取服务中心数据
export function getServicesData() {
  return request({
    url: '/v3/profile/explain',
  })
}
