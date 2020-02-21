/** 函数工具 **/
import { StringifyUrlSearch } from "../web/url";

/**
 * @name 异步请求
 * @param {object} [data={}] 参数
 * @param {function} [error=null] 失败回调函数
 * @param {function} [success=null] 成功回调函数
 * @param {string} [type="get"] 类型：get、post
 * @param {string} [url=""] 地址
 */
function Ajax({ data = {}, error = null, success = null, type = "get", url = "" }) {
	if (!url) return;
	const xhr = new XMLHttpRequest();
	type = type.toUpperCase();
	data = StringifyUrlSearch(data);
	if (type === "GET") {
		xhr.open("GET", data ? `${url}${data}` : `${url}?t=${+new Date()}`, true);
		xhr.send();
	} else if (type === "POST") {
		xhr.open("POST", url, true);
		xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
		xhr.send(data);
	}
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200) {
				success && success(xhr.responseText);
			} else {
				error && error(xhr.status);
			}
		}
	};
}

/**
 * @name 异步返回值格式化
 * @param {function} [pfn=Promise.resolve(true)] Promise函数
 */
function AsyncTo(pfn = Promise.resolve(true)) {
	return pfn ? pfn.then(data => [null, data]).catch(err => [err]) : [null, null];
}

/**
 * @name 防抖
 * @param {function} [fn=v=>v] 函数
 * @param {number} [dura=50] 时延
 */
function Debounce(fn = v => v, dura = 50) {
	let timer = null;
	return function(...args) {
		timer && clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, args), dura);
	};
}

/**
 * @name 节流
 * @param {function} [fn=v=>v] 函数
 * @param {number} [dura=50] 时延
 */
function Throttle(fn = v => v, dura = 50) {
	let pass = 0;
	return function(...args) {
		const now = +new Date();
		if (now - pass > dura) {
			pass = now;
			fn.apply(this, args);
		}
	};
}

/**
 * @name 等待
 * @param {number} [dura=1000] 时延
 */
async function WaitFor(dura = 1000) {
	return new Promise(resolve => setTimeout(() => resolve(true), dura));
}

export {
	Ajax,
	AsyncTo,
	Debounce,
	Throttle,
	WaitFor
};

export default {
	Ajax,
	AsyncTo,
	Debounce,
	Throttle,
	WaitFor
};