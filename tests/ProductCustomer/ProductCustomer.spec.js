import {createLocalVue, shallowMount} from '@vue/test-utils'
import Vuex from 'vuex'
import ProductCustomer from '@/pages/Product/index.vue'
import TableCart from '@/components/TableCart/index.vue'
import TableProductCustomer from '@/components/TableProductCustomer'

const productsBase = [
  {
    name: 'name',
    description: 'description',
    listPrice: 'listPrice',
    offerPrice: 'offerPrice',
    stock: 'stock'
  }
]

describe('ProductCustomer', () => {
  it('renders child component: TableCart', () => {
      const wrapper = shallowMount(ProductCustomer)
      expect(wrapper.find(TableCart).exists()).toBe(true)
  })

  it('renders child component: TableProductCustomer', () => {
      const wrapper = shallowMount(ProductCustomer)
      expect(wrapper.find(TableProductCustomer).exists()).toBe(true)
  })
  
  it('render products using mock', () => {
    const wrapper = shallowMount(ProductCustomer, {
      mocks: {
        $store: {
          getters: {
            products: productsBase
          }
        }
      }
    })
    expect(wrapper.find("TableProductCustomer").text()).toBe(productsBase)
  })
})