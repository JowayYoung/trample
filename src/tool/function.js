/** 函数工具 **/

/**
 * 异步请求
 * @param {string} [type="get"] 请求类型
 * @param {string} [url=""] 请求地址
 * @param {object} [data={}] 请求数据
 * @param {function} [success=null] 成功回调函数
 * @param {function} [error=null] 失败回调函数
 */
function ajax({ type = "get", url = "", data = {}, success = null, error = null }) {
	const xhr = new XMLHttpRequest();
	type = type.toUpperCase();
	data = Object.entries(data).reduce((t, c) => `${t}${c[0]}=${c[1]}&`, "").replace(/&$/, "");
	if (type === "GET") {
		if (data) {
			xhr.open("GET", url + "?" + data, true);
		} else {
			xhr.open("GET", url + "?t=" + new Date().getTime(), true);
		}
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
 * 异步格式化
 * @param {function} [pfn=null] Promise函数
 */
function asyncTo(pfn = null) {
	return pfn.then(data => [null, data]).catch(err => [err]);
}

/**
 * 函数防抖
 * @param {function} [fn=null] 函数
 * @param {number} [delay=0] 时延
 */
function debounce(fn = null, delay = 0) {
	let timer = null;
	return function() {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, arguments), delay);
	};
}

/**
 * 函数节流
 * @param {function} [fn=null] 函数
 * @param {number} [delay=0] 时延
 */
function throttle(fn, delay) {
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

export default {
	ajax, // 异步请求
	asyncTo, // 异步格式化
	debounce, // 函数防抖
	throttle // 函数节流
};