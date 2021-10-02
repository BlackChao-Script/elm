import { request } from './request'

//! 获取商铺列表
export function getShoppingList(latitude: string, longitude: string) {
  return request({
    url: '/shopping/restaurants',
    params: {
      latitude,
      longitude,
    },
  })
}
