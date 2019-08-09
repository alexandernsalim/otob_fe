import { createLocalVue, shallowMount } from '@vue/test-utils'
import TableCart from '@/components/TableCart/index.vue'
import BootstrapVue from 'bootstrap-vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

describe('TableCart', () => {
  it('props: set listItemCart', () => {
    // const listItemCart = []
    //
    // const wrapper = shallowMount(TableCart, {
    //   propsData: {
    //     listItemCart
    //   }
    // })
    // const list = wrapper.findAll('tr').at(1)
    // expect(list).toHaveLength(listItemCart)
  })
  
  it('methods: onDelete', () => {
    const onDelete = jest.fn()
    const mockStore = {
      dispatch: jest.fn()
    }
    const products = {
      name: 'Product name',
      description: 'Product description',
      listPrice: 'Product listPrice',
      offerPrice: 'Product offerPrice',
      stock: 'Product stock'
    }
    
    const wrapper = shallowMount(TableCart, {
      localVue,
      methods: {
        onDelete
      },
      mocks: {
        $store: mockStore
      }
    })
    wrapper.vm.confirmDelete = true
    expect(mockStore.dispatch).toHaveBeenCalledWith('deleteItemCart', products)
  })
})