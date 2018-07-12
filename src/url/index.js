import Config from "../config";

function getUrlParam(key) {
	if (!key || key.constructor !== String) {
		return Config.consoleMsg("参数key只能为字符串且不能为空", "error");
	}
	const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
	const query = location.search.substr(1);
	const result = query.match(reg);
	return result ? decodeURIComponent(result[2]) : null;
}

function getUrlParams() {
	let match;
	const params = {};
	const reg = /([^&=]+)=?([^&]*)/g;
	const query = location.search.substr(1);
	const decode = str => decodeURIComponent(str.replace(/\+/g, " "));
	while ((match = reg.exec(query))) {
		params[decode(match[1])] = decode(match[2]);
	}
	if (Object.keys(params).length < 5) {
		Config.consoleMsg("URL查询字符小于5个，建议使用 getUrlParam(key) 方法");
	}
	return JSON.stringify(params) === "{}" ? null : params;
}

export default {
	getUrlParam, // 获取URL指定参数
	getUrlParams // 获取URL全部参数
};