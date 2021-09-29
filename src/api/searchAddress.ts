import { request } from './request'

//! 搜索地址
export function SearchAddress(city_id: any, keyword: String) {
  return request({
    url: '/v1/pois',
    params: {
      city_id,
      keyword,
    },
  })
}
