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
//! 获取所有店铺分类列表
export function getAllShoppingLIst() {
  return request({
    url: '/shopping/v2/restaurant/category',
  })
}
//! 根据分类id获取店铺列表
export function getIdShopping(
  latitude: string,
  longitude: string,
  restaurant_category_id: any
) {
  return request({
    url: '/shopping/restaurants',
    params: {
      latitude,
      longitude,
      restaurant_category_id,
    },
  })
}
