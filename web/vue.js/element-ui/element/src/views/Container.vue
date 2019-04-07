<template>
	<div>
		<el-container>
			<el-header>Header</el-header>
			<el-main>main</el-main>
		</el-container>
		
		<el-container>
			<el-aside>Aside</el-aside>
			<el-container>
				<el-header>Header</el-header>
				<el-main>Main</el-main>
			</el-container>
		</el-container>

		<el-container>
			<el-header>Header</el-header>
			<el-container>
				<el-aside>Aside</el-aside>
				<el-container>
					<el-main>Main</el-main>
					<el-footer>Footer</el-footer>
				</el-container>
			</el-container>
		</el-container>
	</div>
	
</template>	
<style lang="less" scoped>
	.el{
		.el{
			border: solid 1px #333;
			color:#333;
			text-align: center;
		}
		&-header, &-footer{
			background-color: #B3c0d1;
			line-height: 60px;
			.el();
		}
		&-aside {
			background-color: #d3dce6;
			line-height: 200px;
			.el();
		}
		&-main {
			background-color: #e9eef3;
			line-height: 160px;
			.el();
		}
	}
</style>