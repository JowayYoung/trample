import JsonpFallback from "jsonp-fallback";
import Md5 from "md5";

// 异步回调
function async(func) {
	if (!func || !Promise.prototype.isPrototypeOf(func)) {
		return new Promise((resolve, reject) => {
			reject(prompt("参数func只能为Promise函数且不能为空", "error"));
		}).catch(err => [err, null]);
	}
	return func
		.then(function() { return [null, ...arguments]; })
		.catch(err => [err, null]);
}

// 提示信息
async function prompt(query = "", type = "warn", to = "zh") {
	if (to === "zh" && type) {
		return console[type](query);
	}
	const appid = "20180712000185027";
	const key = "TjaueCXK0WoWdLIu6HHr";
	const salt = new Date().getTime();
	const sign = Md5(appid + query + salt + key);
	const body = { appid, from: "zh", to, q: query, salt, sign };
	const [err, res] = await async(
		JsonpFallback("https://fanyi-api.baidu.com/api/trans/vip/translate", body)
	);
	if (!err && res && res.trans_result) {
		console[type](res.trans_result[0].dst);
	}
}

export default {
	async, // 异步回调
	prompt // 提示信息
};