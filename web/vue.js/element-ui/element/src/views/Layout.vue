<template>
	<div>
		<h1>基础布局</h1>
		<el-row>
			<el-col :span="24">
				<div class="grid-content bg-purple-dark"></div>
			</el-col>
		</el-row>
		<el-row>
			<el-col :span="12" class="grid-content bg-purple"></el-col>
			<el-col :span="12" class="grid-content bg-purple-light"></el-col>
		</el-row>
		<el-row>
			<el-col :span="3" class="grid-content bg-purple"></el-col>
			<el-col :span="6" class="grid-content bg-purple-light"></el-col>
			<el-col :span="3" class="grid-content bg-purple"></el-col>
		</el-row>
		<h1>间隔</h1>
		<el-row :gutter="20">
			<el-col :span="5">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="5">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="5">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="5">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
		<h1>分栏偏移</h1>
		<el-row :gutter="20">
			<el-col :span="5">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="5" :offset="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
		<h1>通过 flex 布局来对分栏进行灵活的对齐</h1>
		<el-row type="flex" class="row-bg">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="center">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="end">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="space-between">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<el-row type="flex" class="row-bg" justify="space-around">
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :span="6">
				<div class="grid-content bg-purple"></div>
			</el-col>
		</el-row>
		<h1>响应式布局</h1>
		<p>
			<div>xs 超小屏幕 手机 (&lt;768px)</div>
			<div>sm 小屏幕 平板 (≥768px)</div>
			<div>md 中等屏幕 桌面显示器 (≥992px)</div>
			<div>lg 大屏幕 大桌面显示器 (≥1200px)</div>
			<!-- eslint-disable-next-line  -->
		</p>
		<el-row :gutter="10">
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
			<el-col :xs="4" :sm="6" :md="8" :lg="9" :xl="11">
				<div class="grid-content bg-purple"></div>
			</el-col>
			<el-col :xs="8" :sm="6" :md="4" :lg="3" :xl="1">
				<div class="grid-content bg-purple-light"></div>
			</el-col>
		</el-row>
	</div>
</template>
<style lang="less" scoped>
	.el-row {
		margin-bottom: 20px;

		&:last-child {
			margin-bottom: 0;
		}
	}

	.el-col {
		border-radius: 4px;
	}

	.bg-purple-dark {
		background: #99a9bf;
	}

	.bg-purple {
		background: #d3dce6;
	}

	.bg-purple-light {
		background: #e5e9f2;
	}

	.grid-content {
		border-radius: 4px;
		min-height: 36px;
	}

	.row-bg {
		padding: 10px 0;
		background-color: #f9fafc;
	}
</style>