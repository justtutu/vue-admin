import request from '@/utils/request'
export function queryUser(params) {
  return request({
    url: '/add',
    method: 'post',
    params
  })
}
