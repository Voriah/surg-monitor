import axios from "axios"

export default {
  getSurgeries: function () {
    return axios.get('/api/surgery/')
  },
  getSurgery: function (id) {
    return axios.get('/api/surgery/' + id)
  },
  findOne: function(name) {
    return axios.get('/api/surgery/findone/' + name)
  },
  createUpdateSurgery: function (tgtSurgery) {
    return axios.post('/api/surgery/',tgtSurgery)
  },
  updateSurgery: function(id,surgery) {
    return axios.put('/api/surgery/' + id,surgery)
  },
  deleteSurgery: function (id) {
    return axios.delete('/api/surgery/' + id)
  }
}