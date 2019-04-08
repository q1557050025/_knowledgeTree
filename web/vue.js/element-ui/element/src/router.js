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
import Cascader from './views/Cascader.vue'
import Switch from './views/Switch.vue'
import Slider from './views/Slider.vue'
import TimePicker from './views/TimePicker.vue'
import DatePicker from './views/DatePicker.vue'
import Upload from './views/Upload.vue'
import Rate from './views/Rate.vue'

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: '/Button'
    },
    {
      path: '/Layout',
      component: Layout
    },
    {
      path: '/Rate',
      component: Rate
    },
    {
      path: '/Upload',
      component: Upload
    },
    {
      path: '/DatePicker',
      component: DatePicker
    },
    {
      path: '/TimePicker',
      component: TimePicker
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
    {
      path: '/Cascader',
      component: Cascader
    },
    {
      path: '/Switch',
      component: Switch
    },
    {
      path: '/Slider',
      component: Slider
    },
  ]
})
