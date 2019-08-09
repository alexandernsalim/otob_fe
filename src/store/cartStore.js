import Axios from 'axios'

export default {
  state: {
    carts: [], 
  },
  getters : {
    CARTS  : state => {
      return state.carts;
    },
  },
  mutations: { 
    SET_CART : (state, payload) => {
      state.carts = payload
    },
    ADD_TO_CART : (state, payload) => {
      state.carts.push(payload)
    },
    UPDATE_ITEM_CART : (state, payload) => {
      state.carts[payload.productId] = payload
    },
    DELETE_ITEM_CART : (state, payload) => { 
      state.carts.splice(payload.index, 1) 
    },
  },
  actions : {
    getCart ({commit}) {
      Axios
        .get(config.API_CART)
        .then(response => {
          commit('SET_CART', response.data.data.cartItems)
        }).catch((e) => {
        console.error(e)
      });
    },
    addToCart ({commit, dispatch, state}, payload) {
      Axios
        .post(config.API_CART + '/' + payload.productId + '/' + payload.qty)
        .then(response => {
          if(response.data.code == 200) {
            payload.productName = payload.name
            payload.productPrice = payload.offerPrice
            commit('ADD_TO_CART', payload)
          }
          else{
            console.log(response.data.message)
          }
        })
        .catch((e) => {
          console.error(e)
        });
    },
    updateItemCart ({commit}, payload) {
      Axios
        .put(config.API_CART + '/' + payload.productId + '/' + payload.qty)
        .then(response => {
          if(response.data.code == 200) {
          }
          else{
            if(payload.type == true){
              payload.qty--
            }else{
              payload.qty++
            }
            alert(response.data.message)
          }
          commit('UPDATE_ITEM_CART', payload)
        })
        .catch((e) => {
          console.error(e) 
        }); 
    },
    deleteItemCart ({commit}, payload) {
      Axios
        .delete(config.API_CART + '/' + payload.productId)
        .then(response => {
          commit('DELETE_ITEM_CART', payload)
        })
        .catch((e) => {
          console.error(e)
        }); 
    },
    orderItemCart ({commit, dispatch}) {
      Axios
        .get(config.API_CART + '/checkout')
        .then(response => {
          dispatch('setCurrentOrder', response.data.data)
          commit('SET_CART', response.data.data.cartItems)
          alert('success checkout')
        }).catch((e) => {
          console.error(e)
        });
    },
  }  
}