import JsonpFallback from "jsonp-fallback";
import Md5 from "md5";

function asyncTo(func) {
	if (!func || !Promise.prototype.isPrototypeOf(func)) {
		return new Promise((resolve, reject) => {
			reject(consoleMsg("参数func只能为Promise函数且不能为空", "error"));
		}).catch(err => [err, null]);
	}
	return func
		.then(function() { return [null, ...arguments]; })
		.catch(err => [err, null]);
}

async function consoleMsg(query = "", type = "warn", to = "zh") {
	if (to === "zh" && type) {
		return console[type](query);
	}
	const appid = "20180712000185027";
	const key = "TjaueCXK0WoWdLIu6HHr";
	const salt = new Date().getTime();
	const sign = Md5(appid + query + salt + key);
	const body = { appid, from: "zh", to, q: query, salt, sign };
	const [err, res] = await asyncTo(
		JsonpFallback("https://fanyi-api.baidu.com/api/trans/vip/translate", body)
	);
	if (!err && res && res.trans_result) {
		console[type](res.trans_result[0].dst);
	}
}

export default {
	asyncTo,
	consoleMsg
};