/** 函数工具 **/

// AJAX
function Ajax() {}

// 异步格式化
function asyncTo(promise) {
	return promise.then(data => [null, data]).catch(err => [err]);
}

// 函数节流
function debounce(fn, delay) {
	let timer = null;
	return function() {
		if (timer) clearTimeout(timer);
		timer = setTimeout(() => fn.apply(this, arguments), delay);
	};
}

// 函数节流
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
	Ajax, // Ajax
	asyncTo, // 异步格式化
	debounce, // 函数节流
	throttle // 函数节流
};