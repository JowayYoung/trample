/** 函数工具 **/

/**
 * 异步请求
 * @param {object} [data={}] 参数
 * @param {function} [error=null] 失败回调
 * @param {function} [success=null] 成功回调
 * @param {string} [type="get"] 类型
 * @param {string} [url=""] 地址
 */
function Ajax({ data = {}, error = null, success = null, type = "get", url = "" }) {
	const xhr = new XMLHttpRequest();
	type = type.toUpperCase();
	data = Object.entries(data).reduce((t, c) => `${t}${c[0]}=${c[1]}&`, "").replace(/&$/, "");
	if (type === "GET") {
		xhr.open("GET", data ? `${url}?${data}` : `${url}?t=${+new Date()}`, true);
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
 * 格式化异步函数返回值
 * @param {function} [pfn=null] Promise函数
 */
function AsyncTo(pfn = null) {
	return pfn.then(data => [null, data]).catch(err => [err]);
}

/**
 * 防抖函数
 * @param {function} [fn=null] 函数
 * @param {number} [delay=0] 时延
 */
function Debounce(fn = null, delay = 0) {
	let timer = null;
	return function() {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, arguments), delay);
	};
}

/**
 * 节流函数
 * @param {function} [fn=null] 函数
 * @param {number} [delay=0] 时延
 */
function Throttle(fn, delay = 0) {
	let start = Date.now();
	let now;
	let timer;
	return function() {
		now = Date.now();
		clearTimeout(timer);
		if (now - start >= delay) {
			fn.apply(this, arguments);
			start = now;
		} else {
			timer = setTimeout(() => fn.apply(this, arguments), delay);
		}
	};
}

/**
 * 等待时间
 * @param {number} [duration=1000] 时延
 */
async function WaitFor(duration = 1000) {
	return new Promise(resolve => setTimeout(() => resolve(true), duration));
}

export default {
	Ajax, // 异步请求
	AsyncTo, // 格式化异步函数返回值
	Debounce, // 防抖函数
	Throttle, // 节流函数
	WaitFor // 等待时间
};