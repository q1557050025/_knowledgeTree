import fetch from '../config/fetch.js'

export const hotCities = () => fetch('/v1/cities', {
	type: 'hot'
})

export const cityGroup = () => fetch('/v1/cities', {
	type: 'group'
})

export const cityGuess = () => fetch('/v1/cities', {
	type: 'guess'
})

