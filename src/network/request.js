import axios from 'axios'
export function request(config){
	const instance = axios.create({
			baseURL: 'http://123.207.32.32:8000',
			timeout: 5000
		})
	instance.interceptors.request.use(config=>{
		console.log("我是request拦截"+console.baseURL+config.url);
		return config
	},err=>{
		
	})
	instance.interceptors.response.use(res=>{
			console.log("响应数据");
		return res.data
	},err => {
		
	})
	return instance(config)
}