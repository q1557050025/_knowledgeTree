<template>
	<section class="real-app">
		<input 
		type="text"
		class="add-input"
		autofocus="autofocus"
		placeholder="请输入便签内容"
		@keyup.enter="addTodo"
		>
		<Item
			v-for="(todo, index) in todos"
			:key="index"
			:todo="todo"
			@delTodo="delTodo"
		/>
		<tabs
			:filter="filter"
			:todos="todos"
			@toggle="toggleFilter"
			@clearAllCompleted="clearAllCompleted"
		></tabs>
	</section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'

let id = 0

export default {
	data(){
		return {
			todos: [],
			filter: 'all'
		}
	},
	components: {
		Item,
		Tabs,
	},
	methods: {
		addTodo(e) {
			if(e.target.value){
				this.todos.unshift({
					id: id++,
					content: e.target.value.trim(),
					completed: false,
				})	
			}else{
				e.target.setAttribute('placeholder','输入内容不能为空')
			}
			e.target.value = ''
		},
		delTodo(id) {
			this.todos.splice(this.todos.findIndex(todo => todo.id === id), 1)
		},
		toggleFilter(state) {
			this.filter = state
		},
		clearAllCompleted() {
			this.todos = this.todos.filter(todo => !todo.completed)
		}
	},
	computed: {
		filteredTodos() {
			if(this.filter === 'all') {
				return this.todos
			}
			const completed = this.filter === 'completed'
			return this.todos.filter(todo => completed === todo.completd)
		}
	}
}
</script>

<style lang="stylus" scoped>
.real-app{
  width 600px
  margin 0 auto
  box-shadow 0 0 5px #666
}
.add-input{
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: 0;
  outline: none;
  color: inherit;
  padding: 6px;
  border: 1px solid #999;
  box-shadow: inset 0 -1px 5px 0 rgba(0, 0, 0, 0.2);
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 60px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0,0,0,0.03);
}
</style>
