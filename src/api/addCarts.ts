import { request } from './request'

//! 添加到购物车
export function addCarts(restaurant_id: any, geohash: any, entities: any) {
  return request({
    method: 'post',
    url: '/v1/carts/checkout',
    data: {
      restaurant_id,
      geohash,
      entities,
    },
  })
}
