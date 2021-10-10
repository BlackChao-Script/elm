import { request } from './request'

//! 获取评论分数
export function getValuate(restaurant_id: any) {
  return request({
    url: `/ugc/v2/restaurants/${restaurant_id}/ratings/scores`,
  })
}
//! 获取评论分类
export function getValuateClass(restaurant_id: any) {
  return request({
    url: `/ugc/v2/restaurants/${restaurant_id}/ratings/tags`,
  })
}
//! 获取评价信息
export function getValuateMessageData(
  restaurant_id: any,
  tag_name: any,
  offset: any,
  limit: any
) {
  return request({
    url: `/ugc/v2/restaurants/${restaurant_id}/ratings`,
    params: {
      tag_name,
      offset,
      limit,
    },
  })
}
