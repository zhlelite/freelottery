import axios from 'axios'
import {
	baseURL
} from '@/config'
// 创建axios实例
const service = axios.create({
	baseURL: baseURL,
	timeout: 15000
})

// request拦截器
service.interceptors.request.use(config => {
	let type = config.method === 'get' ? 'params' : 'data';
	if (config[type] === undefined) config[type] = {};
	return config;
}, error => {
	// Do something with request error
	console.log(error) // for debug
	Promise.reject(error)
})

// respone拦截器
service.interceptors.response.use(
	response => {
		return response;
	},
	error => {
		console.log('err' + error) // for debug
		return Promise.reject(error)
	}
)

export const POST = (url, data) =>service({ url, method: 'post', data});
export const GET = (url, params) =>service({ url, method: 'get', params});