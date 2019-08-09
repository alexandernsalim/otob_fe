import Axios from 'axios'

export default {
  state: {
    orders: [],
    currentOrder: {
      order: {},
      outOfStockProducts: []
    }
  },
  getters : {
    ORDERS : state => {
      return state.orders;
    },
    getOrderById : (state) => (id) => {
      return state.orders.find(order => order.ordId === id)
    },
    getOrderByStatus: (state) => (status) => {
      return state.orders.find(order => order.status === status)
    },
    getProductsByOrderId :  (state) => (id) => {
      var orders =  state.orders.find(order=>order.orders_id === id);
      return orders.products;
    },
    getCurrentOrder: (state) => {
      return state.currentOrder
    }
  },
  mutations: {
    UPDATE_PRODUCT_STATUS : (state,product) => {
      state.orders[0].products[0] = product
    },
    SET_ORDERS : (state, payload) => {
      state.orders = payload;
    },
    ACCEPT_ORDER : (state,payload) => {
      state.orders[payload.index] = payload
    },
    GET_ORDER_BY_ID : (state, payload) => {
      state.orders = payload
    },
    SET_CURRENT_ORDER: (state, payload) => [
      state.currentOrder = payload
    ]
  },
  actions : {
    updateStatusProduct({commit}, product) {
      commit("UPDATE_PRODUCT_STATUS", product);
    },
    getOrders ({commit}) {
      Axios
          .get(config.API_ORDER)
          .then(response => {
            commit('SET_ORDERS',response.data.data)
          }).catch((e) => {
            console.error(e);
      })
    },
    acceptOrders ({commit}, payload) {
      Axios
          .get(config.API_ORDER + '/' + payload.ordId + '/accept')
          .then(response => {
            commit('ACCEPT_ORDER', payload)
            alert('Succes to Accept Order'+ payload.ordId)
          })
          .catch((e) => {
            console.error(e)
          });
    },
    rejectOrder ({commit}, payload) {
      Axios
          .get(config.API_ORDER + '/' + payload.ordId + '/reject')
          .then(response => {
            commit('ACCEPT_ORDER', payload)
            alert('Succes to Reject Order'+ payload.ordId)
          })
          .catch((e) => {
            console.error(e)
          });
    },
    getOrderByOrderId ({commit}, payload) {
      Axios
          .get(API+'/'+payload)
          .then(response => {
            commit('GET_ORDER_BY_ID', payload)
          })
          .catch((e) => {
            console.log(e)
          })
    },
    searchOrderByUserId ({commit}, payload) {
      Axios
          .get(config.API_ORDER,
              JSON.stringify(payload))
          .then(response => {
            commit('SET_ORDERS', response.data.data)
      }).catch((e) => {
        console.error(e)
      })
    },
    setCurrentOrder ({commit}, payload) {
      commit('SET_CURRENT_ORDER', payload)
    }
  }
}