<template>
	<div id="app">
		<el-container>
			<el-header><h1>Element学习</h1></el-header>
			<el-container>
				<el-aside width="240px" style="background-color: rgb(238, 241, 246)">
					<ul>
						<li><h2><router-link to="/Button">Button</router-link></h2></li>
						<li><h2><router-link to="/Layout">Layout布局</router-link></h2></li>
						<li><h2><router-link to="/Container">Container布局</router-link></h2></li>
						<li><h2><router-link to="/Icon">Icon</router-link></h2></li>
						<li><h2><router-link to="/Radio">Radio</router-link></h2></li>
						<li><h2><router-link to="/Checkbox">Checkbox</router-link></h2></li>
						<li><h2><router-link to="/Input">Input</router-link></h2></li>
						<li><h2><router-link to="/InputNumber">InputNumber</router-link></h2></li>
						<li><h2><router-link to="/Select">Select</router-link></h2></li>
						<li><h2><router-link to="/Cascader">Cascader</router-link></h2></li>
						<li><h2><router-link to="/Switch">Switch</router-link></h2></li>
						<li><h2><router-link to="/Slider">Slider</router-link></h2></li>
						<li><h2><router-link to="/TimePicker">TimePicker</router-link></h2></li>
						<li><h2><router-link to="/DatePicker">DatePicker</router-link></h2></li>
						<li><h2><router-link to="/Upload">Upload</router-link></h2></li>
						<li><h2><router-link to="/ColorPicker">ColorPicker</router-link></h2></li>
						<li><h2><router-link to="/Rate">Rate</router-link></h2></li>
						<li><h2><router-link to="/Transfer">Transfer</router-link></h2></li>
						<li><h2><router-link to="/Form">Form</router-link></h2></li>
						<li><h2><router-link to="/Table">Table</router-link></h2></li>
					</ul>
				</el-aside>
				<el-main>
					<router-view></router-view>
				</el-main>
			</el-container>
		</el-container>
	</div>
</template>

<script>

export default {
	components: {
	}
}
</script>

<style lang="less">
	* {
		list-style: none;
	}
	a {
		text-decoration: none;
	}
</style>
