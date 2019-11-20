import fetch from '../config/fetch.js'

export const api = {

	hotCities : () => fetch('/v1/cities', {
		type: 'hot'
	}),
	
	cityGroup : () => fetch('/v1/cities', {
		type: 'group'
	}),
	
	cityGuess : () => fetch('/v1/cities', {
		type: 'guess'
	}),
	
	currentCity : (num) => fetch('/v1/cities/'+ num),
	
	
	searchPlace : (cityid, value) => fetch('/v1/pois', {
		type: 'search',
		city_id: cityid,
		keyword: value
	}),
	
	
	getFoodTypesByGeohash : (geohash) => fetch('/v2/index_entry', {
		geohash,
		group_type: '1',
		'flags[]': 'F'
	}),
	
	getAddressByGeohash: geohash => fetch('/v2/pois/' + geohash),
	
	
	shopList : (options) => {
		let supportStr = '';
		options.support_ids.forEach(item => {
			if (item.status) {
				supportStr += '&support_ids[]=' + item.id;
			}
		});
		let data = {
			latitude: options.latitude,
			longitude: options.longitude,
			offset: options.offset,
			limit: '100',
			'extras[]': 'activities',
			keyword: '',
			restaurant_category_id: options.restaurant_category_id,
			'restaurant_category_ids[]': options.restaurant_category_ids,
			order_by:options.order_by,
			'delivery_mode[]': options.delivery_mode + supportStr
		};
		return fetch('/shopping/restaurants', data);
	},
	
	searchRestaurant : (geohash, keyword) => fetch('/v4/restaurants', {
		'extras[]': 'restaurant_activity',
		geohash,
		keyword,
		type: 'search'
	}),
	
	accountLogin : (username, password, captcha_code) => fetch('/v2/login', {username, password, captcha_code}, 'POST'),
	
	//获取红包
	getHongbaoNum : id => fetch('/promotion/v2/users/' + id + '/hongbaos?limit=20&offset=0'),
	
	
	/**
	 * 获取shop页面商铺详情
	 */
	
	shopDetails : (shopid, latitude, longitude) => fetch('/shopping/restaurant/' + shopid, {
		latitude,
		longitude: longitude + '&extras[]=activities&extras[]=album&extras[]=license&extras[]=identification&extras[]=statistics'
	}),
	
	
	
	/**
	 * 获取shop页面菜单列表
	 */
	
	foodMenu : restaurant_id => fetch('/shopping/v2/menu', {
		restaurant_id
	}),
	
	
	/**
	 * 获取商铺评价列表
	 */
	
	getRatingList : (shopid, offset, tag_name = '') => fetch('/ugc/v2/restaurants/' + shopid + '/ratings', {
		has_content: true,
		offset,
		limit: 10,
		tag_name
	}),
	
	
	/**
	 * 获取商铺评价分数
	 */
	
	ratingScores : shopid => fetch('/ugc/v2/restaurants/' + shopid + '/ratings/scores'),
	
	
	/**
	 * 获取商铺评价分类
	 */
	
	ratingTags : shopid => fetch('/ugc/v2/restaurants/' + shopid + '/ratings/tags'),
	
}
