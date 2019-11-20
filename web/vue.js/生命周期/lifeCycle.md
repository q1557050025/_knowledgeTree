### Vue生命周期

<a href="https://www.bilibili.com/video/av48976818/?p=2">黑马生命周期视频</a>

<img src="./lifecycle.png" title="图示">

* var vm = new Vue({}) 表示创建一个Vue的实例对象

* **Init** 初始化了一个Vue的空的实例对象. 这时候在这个对象上, 只有默认的生命周期函数 和 默认事件.
#### 生命周期钩子
* ##### 创建阶段
  * **beforCreate** 此时, data和methods都未被创建.
  * **created** data和methods已经被创建完成, 可以进行操作.
  * **beforeMount** 此时,Vue开始编辑模板,在内存中生成一个编译好的最终模板字符串.然后, 将这个字符串渲染为内存中的DOM. 注意:此时只是在内存中渲染好了模板, 并没有挂载到页面中.
  * **mounted** 此时, 内存中的模板已经真实的挂载到页面当中.这是实例创建期间最后一个生命钩子. 进行完此步, 实例的创建就完成了.
* ##### 运行阶段
  * **beforeUpdate** 在组件更新之前执行. 此时data中的数据已经是最新的了, 但是页面中显示的数据还是旧的, 页面尚未同步最新数据.
  * **updated** 组件更新完成之后执行
* ##### 销毁阶段
  * **beforeDestroy** 组件销毁之前执行
  * **destroyed** 组件销毁之后执行