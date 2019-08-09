import Axios from 'axios'

export default {
  state: {
    products: [],
  },
  getters : {
    PRODUCTS  : state => {
      return state.products;
    },
  },
  mutations: { 
    SET_PRODUCT : (state, payload) => {
      state.products = payload
    },
    ADD_PRODUCT : (state, payload) => {
      state.products.push(payload)
    },
    UPDATE_PRODUCT : (state, payload) => {
      state.products[payload.index] = payload
    },
    UPDATE_PRODUCT_BY_NAME : (state, payload) => {
      state.products[payload.name] = payload
    },
    DELETE_PRODUCT : (state, payload) => { 
      state.products.splice(payload.index, 1) 
    },
    UPLOAD_PRODUCT : (state, payload) => {
      state.products.push(payload)
    },
  },
  actions : {
    getProducts  ({commit}) {  
      Axios
        .get(config.API_PRODUCT)
        .then(response => {
          response.data.data.map(function(product) {
            product.qty = 1
          });
          commit('SET_PRODUCT', response.data.data)
        })
        .catch((e) => {
          console.error(e)
        }); 
    },
    addProduct ({commit}, payload) {
      Axios
        .post(config.API_PRODUCT,
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          if(response.data.code == 200){
            commit('ADD_PRODUCT', payload)
            alert('Success add data')
          }else{
            alert('access denied')
          }
        })
        .catch((e) => {
          console.error(e) 
          alert(e)
        }); 
    },
    updateProduct ({commit}, payload) {
      Axios
        .put(config.API_PRODUCT + '/' + payload.productId,
          JSON.stringify(payload),
          {'headers': {'Content-Type': 'application/json'}
        })
        .then(response => {
          if(response.data.code == 200){
            commit('UPDATE_PRODUCT', payload)
            alert('Success update data')
          }else{
            alert('access denied')
          }
        })
        .catch((e) => {
          console.error(e) 
        }); 
    },
    deleteProduct ({commit}, payload) {  
      Axios
        .delete(config.API_PRODUCT + '/' + payload.productId)
        .then(response => {
          if(response.data.code == 200){
            commit('DELETE_PRODUCT', payload)
            alert('Success delete data')
          }else{
            alert('access denied')
          }
        })
        .catch((e) => {
          console.error(e) 
        }); 
    },
    searchProduct({commit}, textSearch){
      if(textSearch == ''){
        Axios
          .get(config.API_PRODUCT)
          .then(response => {
            response.data.data.map(function(product) {
              product.qty = 1
            });
            commit('SET_PRODUCT', response.data.data)
          })
      }else{
        Axios
          .get(config.API_PRODUCT + '/name/' + textSearch)
          .then(response => {
            response.data.data.map(function(product) {
              product.qty = 1
            });
            commit('SET_PRODUCT', response.data.data)
          })
      } 
    },
    uploadProduct({commit}, payload){ 
      Axios
        .post(config.API_PRODUCT + '/batch',
          payload,
          {'headers': {'Content-Type': 'multipart/form-data'}
        })
        .then(response => {
          console.log()
          if(response.data.code == 200){
            var length = response.data.data.length
            var i = 0
  
            for(i=0; i<length; i++){
              if(response.data.data[i].productId == 0){
                //belum bisa auto update
                commit('UPDATE_PRODUCT_BY_NAME', response.data.data[i])
              }else{
                commit('ADD_PRODUCT', response.data.data[i])
              }
            }
            alert('Success upload data')
          }else{
            alert('access denied')
          }
        })
        .catch((e) => {
          console.error(e)
        }); 
    },
  }  
}