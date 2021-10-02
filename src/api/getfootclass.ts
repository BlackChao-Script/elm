import { request } from './request'

//! 获取商品分类列表
export function getFootClassLIst() {
  return request({
    url: '/v2/index_entry',
  })
}
