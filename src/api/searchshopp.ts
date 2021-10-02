import { request } from './request'

//! 搜索餐馆
export function searchShopping(geohash: string, keyword: string) {
  return request({
    url: '/v4/restaurants',
    params: {
      geohash,
      keyword,
    },
  })
}
