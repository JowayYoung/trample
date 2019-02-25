/** URL操作 **/
import C from "../check";

// 获取URL指定参数
function getUrlParam(key = "") {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境的正确性");
	};
	const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
	const query = location.search.substr(1);
	const result = query.match(reg);
	return result ? decodeURIComponent(result[2]) : null;
}

// 获取URL全部参数
function getUrlParams() {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境的正确性");
	};
	let match;
	const params = {};
	const reg = /([^&=]+)=?([^&]*)/g;
	const query = location.search.substr(1);
	const decode = str => decodeURIComponent(str.replace(/\+/g, " "));
	while ((match = reg.exec(query))) {
		params[decode(match[1])] = decode(match[2]);
	}
	return params;
}

export default {
	getUrlParam, // 获取URL指定参数
	getUrlParams // 获取URL全部参数
};