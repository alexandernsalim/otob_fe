import Axios from 'axios'

export default {
  state: {
    users : [], 
  },
  getters : {
    USERS : state => {
      return state.users
    },
  },
  mutations: { 
    SET_USER : (state, payload) => {
      state.users = payload
    },
    ADD_USER : (state, payload) => {
      state.users.push(payload)
    },
    DELETE_USER: (state, payload) => { 
      state.users.splice(payload.index, 1) 
    },
  },
  actions : { 
    getUser  ({commit}) {  
      Axios
        .get(config.API_USER)
        .then(response => {
          commit('SET_USER', response.data.data)
        })
        .catch((e) => {
          console.error(e)
          alert(e) 
        }); 
    },
    registerCustomer ({commit}, payload) {
      console.log('masuk')
      Axios
        .post(config.API_USER + '/customer/register',
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          if(response.data.code == 403) {
            alert(response.data.message)
          }else{
            alert('Success add new User')
            commit('ADD_USER', payload)
          }
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    registerCashier ({commit}, payload) {
      Axios
        .post(config.API_USER + '/cashier/register',
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          if(response.data.code == 403) {
            alert(response.data.message)
          }else{
            alert('Success add new User')
            commit('ADD_USER', payload)
          }
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    registerAdmin ({commit}, payload) {
      Axios
        .post(config.API_USER + '/admin/register',
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          if(response.data.code == 403) {
            alert(response.data.message)
          }else{
            alert('Success add new User')
            commit('ADD_USER', payload)
          }
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    doChangePassword ({commit, dispatch}, payload) {
      Axios
        .put(config.API_AUTH + '/password/change', payload)
        .then(response => {
          if(response.data.code === 200){
            alert('Success change password')
          }else{
            alert(response.data.message)
          }
          console.log(response.data)
        }).catch((e) => {
        console.log(e)
      })
    },
  }  

}