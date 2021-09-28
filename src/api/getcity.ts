import { request } from './request'

export function getcityList(types: String) {
  return request({
    url: '/v1/cities',
    params: {
      type: types,
    },
  })
}
