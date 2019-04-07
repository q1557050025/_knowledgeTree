<template>
	<div>
		<el-row>
			<el-button>默认按钮</el-button>
			<el-button type="primary">primary</el-button>
			<el-button type="success">success</el-button>
			<el-button type="info">info</el-button>
			<el-button type="warning">warning</el-button>
			<el-button type="danger">danger</el-button>
		</el-row>
		<hr>
		<el-row>
			<el-button plain>朴素按钮</el-button>
			<el-button plain type="primary">primary</el-button>
			<el-button plain type="success">success</el-button>
			<el-button plain type="info">info</el-button>
			<el-button plain type="warning">warning</el-button>
			<el-button plain type="danger">danger</el-button>
		</el-row>
		<hr>
		<el-row>
			<el-button round>圆角按钮</el-button>
			<el-button round type="primary">primary</el-button>
			<el-button round type="success">success</el-button>
			<el-button round type="info">info</el-button>
			<el-button round type="warning">warning</el-button>
			<el-button round type="danger">danger</el-button>
		</el-row>
		<hr>
		<el-row>
			<el-button circle icon="el-icon-search"></el-button>
			<el-button circle icon="el-icon-edit" type="primary"></el-button>
			<el-button circle icon="el-icon-check" type="success"></el-button>
			<el-button circle icon="el-icon-message" type="info"></el-button>
			<el-button circle icon="el-icon-star-off" type="warning"></el-button>
			<el-button circle icon="el-icon-delete" type="danger"></el-button>
		</el-row>
		<hr>
		<el-row>
			<el-button disabled plain>禁用</el-button>
			<el-button disabled plain type="primary">primary</el-button>
			<el-button disabled plain type="success">success</el-button>
			<el-button disabled plain type="info">info</el-button>
			<el-button disabled plain type="warning">warning</el-button>
			<el-button disabled plain type="danger">danger</el-button>
		</el-row>
		<hr>
		<h1>按钮组</h1>
		<el-button-group>
			<el-button plain icon="el-icon-arrow-left" type="primary">上一页</el-button>
			<el-button plain icon="el-icon-arrow-right" type="primary">下一页</el-button>
		</el-button-group>
		<hr>
		<el-button-group>
			<el-button plain icon="el-icon-edit" type="primary"></el-button>
			<el-button plain icon="el-icon-share" type="primary"></el-button>
			<el-button plain icon="el-icon-delete" type="primary"></el-button>
		</el-button-group>
		<hr>
		<el-button plain type="primary" :loading="true">加载中</el-button>
		<el-button plain type="primary" :loading="false">完成加载</el-button>
		<hr>
		<el-row>
			<el-button plain size="medium" type="primary">medium</el-button>
			<el-button plain size="small" type="primary">small</el-button>
			<el-button plain size="mini" type="primary">mini</el-button>
		</el-row>
	</div>
</template>
