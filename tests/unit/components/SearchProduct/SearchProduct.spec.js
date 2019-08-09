import Vue from 'vue'
import { shallowMount } from '@vue/test-utils'
import SearchProduct from '@/components/SearchProduct/index.vue'

describe('SearchProduct', () => {
  it('sets the correct default data', () => {
    const defaultData = SearchProduct.data()
    expect(defaultData.tempText).toBe('')
  })
  
  it('methods: onSearch when button is clicked', () => {
    const mockStore = {
      dispatch: jest.fn()
    }
    const wrapper = shallowMount(SearchProduct, {
      mocks: {
        $store: mockStore
      }
    })
    wrapper.find('button').trigger('click')
    expect(mockStore.dispatch).toHaveBeenCalledWith('searchProduct', '')
  })
  
  it('watch: onSearch when tempText is changes', () => {
    const onSearch = jest.fn()
    const wrapper = shallowMount(SearchProduct, {
      methods: {
        onSearch
      }
    })
    wrapper.vm.$options.watch.tempText.call(wrapper.vm, '')
    expect(onSearch).toBeCalled()
  })
})