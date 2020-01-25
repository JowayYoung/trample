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
	data = Object.entries(data).reduce((t, v) => `${t}${v[0]}=${v[1]}&`, "").replace(/&$/, "");
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
 * 异步返回值格式化
 * @param {function} [pfn=null] Promise函数
 */
function AsyncTo(pfn = null) {
	return pfn.then(data => [null, data]).catch(err => [err]);
}

/**
 * 函数防抖
 * @param {function} [fn=null] 函数
 * @param {number} [delay=500] 时延
 */
function Debounce(fn = null, delay = 500) {
	let timer = null;
	return function() {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, arguments), delay);
	};
}

/**
 * 函数节流
 * @param {function} [fn=null] 函数
 * @param {number} [delay=500] 时延
 */
function Throttle(fn = null, delay = 500) {
	let start = Date.now();
	let now = null;
	let timer = null;
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
 * 等待
 * @param {number} [duration=1000] 时延
 */
async function WaitFor(duration = 1000) {
	return new Promise(resolve => setTimeout(() => resolve(true), duration));
}

export default {
	Ajax,
	AsyncTo,
	Debounce,
	Throttle,
	WaitFor
};