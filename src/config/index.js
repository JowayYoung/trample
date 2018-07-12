import JsonpFallback from "jsonp-fallback";
import Md5 from "md5";

import FunctionUtils from "../function";

async function consoleMsg(query = "", type = "warn", to = "zh") {
	if (to === "zh" && type === "warn") {
		return console.warn(query);
	}
	if (to === "zh" && type === "error") {
		return new Error(query);
	}
	const appid = "20180712000185027";
	const key = "TjaueCXK0WoWdLIu6HHr";
	const salt = new Date().getTime();
	const sign = Md5(appid + query + salt + key);
	const body = { appid, from: "zh", to, q: query, salt, sign };
	const [err, res] = await FunctionUtils.asyncTo(
		JsonpFallback("https://fanyi-api.baidu.com/api/trans/vip/translate", body)
	);
	if (!err && res && res.trans_result) {
		type === "warn" && console.warn(res.trans_result[0].dst);
		type === "error" && new Error(res.trans_result[0].dst);
	}
}

export default {
	consoleMsg
};