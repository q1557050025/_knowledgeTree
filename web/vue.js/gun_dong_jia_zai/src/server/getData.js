import fetch from './fetch'


export const data = () => fetch('/v1/cities', {
	type: 'group'
});
