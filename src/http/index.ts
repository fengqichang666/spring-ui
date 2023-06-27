import axios from 'axios'
const instance = axios.create({
	timeout: 1000 * 20,
	baseURL: '/api'
})
instance.interceptors.response.use(response => response.data)
export const Get = (url: string, params = {}) => {
	return new Promise((resolve, reject) => {
		instance
			.get(url, {
				params: params
			})
			.then(response => {
				resolve(response.data)
			})
			.catch(err => {
				reject(err)
			})
	})
}
export const Post = (url: string, data = {}) => {
	return new Promise((resolve, reject) => {
		instance.post(url, data).then(
			response => {
				resolve(response.data)
			},
			err => {
				reject(err)
			}
		)
	})
}
