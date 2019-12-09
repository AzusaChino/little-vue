import request from '../request'

// 添加记录
const addRecord = (data) => {
  return request.request(
    {
      url: '/api/record/add',
      data: data,
      method: 'post'
    }
  )
}

// 查看记录
const getRecord = (data) => {
  return request.post('/api/record/getRecord', data)
}

// 删除记录
const deleteRecord = (id) => {
  return request.delete(`/api/record/deleteRecord/${id}`)
}

// 根据id查询
const getRecordById = (id) => {
  return request.get(`/api/record/getRecordById/${id}`)
}

// 更新数据
const updateRecordById = (data) => {
  return request.post(`/api/record/updateRecordById`, data)
}

// 删除图片
const deleteImg = (data) => {
  return request.post(`/api/record/deleteImg`, data)
}

export default {
  addRecord,
  getRecord,
  deleteRecord,
  getRecordById,
  updateRecordById,
  deleteImg
}
