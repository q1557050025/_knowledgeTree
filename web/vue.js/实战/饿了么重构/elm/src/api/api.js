/*
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-08-15 13:27:15
 * @LastEditTime: 2019-08-15 13:30:19
 * @LastEditors: Please set LastEditors
 */
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
}