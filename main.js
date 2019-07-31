import Vue from 'vue'
import App from './App'
import {
	postRequest,
	getRequest,
} from './utils/request'

Vue.config.productionTip = false

App.mpType = 'app'

const msg = (title, duration=1500, mask=false, icon='none')=>{
	//统一提示方便全局修改
	if(Boolean(title) === false){
		return;
	}
	uni.showToast({
		title,
		duration,
		mask,
		icon
	});
}

const json = type=>{
	//模拟异步请求数据
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Json[type]);
		}, 500)
	})
}

const prePage = ()=>{
	let pages = getCurrentPages();
	let prePage = pages[pages.length - 2];
	// #ifdef H5
	return prePage;
	// #endif
	return prePage.$vm;
}

Vue.prototype.$api = {msg, json, prePage};
Vue.prototype.$getRequest = getRequest;  //get请求
Vue.prototype.$postRequest = postRequest;  //post请求

const app = new Vue({
    ...App
})


app.$mount()
