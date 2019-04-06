<template>
	<div class="cart">
		<div class="cart-header">
			<div class="cart-header-title">购物清单</div>
			<div class="cart-header-main">
				<div class="cart-info">商品信息</div>
				<div class="cart-price">单价</div>
				<div class="cart-count">数量</div>
				<div class="cart-cost">小计</div>
				<div class="cart-delete">删除</div>
			</div>
		</div>
		<div class="cart-content">
			<div class="cart-contain-main" v-for="(item, index) in cartList" :key="index">
				<div class="cart-info">
					<img :src="productDictList[item.id].image">
					<span>{{productDictList[item.id].name}}</span>
				</div>
				<div class="cart-price">$ {{productDictList[item.id].cost}}</div>
				<div class="cart-count">
					<span class="cart-control-minus">{{item.count}}</span>
				</div>
				<div class="cart-cost"></div>
				<div class="cart-delete"></div>
				<div class="cart-empty"></div>
			</div>
			<div class="cart-empty"></div>
		</div>
		<div class="cart-promotion">
			<span>使用优惠码:</span>
			<input type="text" >
			<span class="cart-control-promotion">验证</span>
		</div>
		<div class="cart-footer">
			<div class="cart-footer-desc">
				共计 <span>{{countAll}}</span> 件商品
			</div>
			<div class="cart-footer-desc">
				应付总额 <span>$ {{costAll - promotion}}</span>
				<br>
				<template>
					(优惠 <span>$ {{promotion}} </span>)
				</template>
			</div>
			<div class="cart-footer-desc">
				<div class="cart-control-order">现在结算</div>
			</div>
		</div>
	</div>
</template>
