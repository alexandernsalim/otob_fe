import { createLocalVue,  shallowMount, mount } from '@vue/test-utils'
import BootstrapVue from 'bootstrap-vue'
import Register from '@/pages/Main/Register.vue'
import axios from 'axios'
import CustomForm from '@/components/CustomForm/index.vue'

const localVue = createLocalVue()
localVue.use(BootstrapVue)

jest.mock('axios', () => {
  post: jest.fn()
})

describe('Login', () => {
  it('onRegister: dispatch', () => {
    const mockStore = {
      dispatch: jest.fn()
    }
    const wrapper = mount(Register, {
      localVue,
      $store: {
        mockStore
      }
    })
    wrapper.vm.$options.methods.onRegister()
    const form = wrapper.vm.$options.methods.onRegister.formData
    expect(mockStore.dispatch).toHaveBeenCalledWith('doRegister', form)
  })
})