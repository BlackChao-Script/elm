import { request } from './request'

//! 获取城市数据
export function getcityList(types: String) {
  return request({
    url: '/v1/cities',
    params: {
      type: types,
    },
  })
}

//! 获取城市详细
export function getcityDel(id: any) {
  return request({
    url: `/v1/cities/${id}`,
  })
}
