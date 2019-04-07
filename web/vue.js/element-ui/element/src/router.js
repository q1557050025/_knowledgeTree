import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
import Layout from './views/Layout.vue'
import Container from './views/Container.vue'
import Icon from './views/Icon.vue'
import Button from './views/Button.vue'
import Radio from './views/Radio.vue'
import Checkbox from './views/Checkbox.vue'
import Input from './views/Input.vue'
import InputNumber from './views/InputNumber.vue'
import Select from './views/Select.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/Layout'
    },
    {
      path: '/Layout',
      component: Layout
    },
    {
      path: '/Container',
      component: Container
    },
    {
      path: '/Icon',
      component: Icon
    },
    {
      path: '/Button',
      component: Button
    },
    {
      path: '/Radio',
      component: Radio
    },
    {
      path: '/Checkbox',
      component: Checkbox
    },
    {
      path: '/Input',
      component: Input
    },
    {
      path: '/InputNumber',
      component: InputNumber
    },
    {
      path: '/Select',
      component: Select
    },
  ]
})
