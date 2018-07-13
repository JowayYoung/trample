import C from "../check";
import F from "../function";

// 获取URL指定参数
function getUrlParam(key) {
	if (!C.isString(key)) return null;
	const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
	const query = location.search.substr(1);
	const result = query.match(reg);
	return result ? decodeURIComponent(result[2]) : null;
}

// 获取URL全部参数
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
		F.prompt("URL查询字符小于5个，建议使用 getUrlParam(key) 方法");
	}
	return C.isEmptyObject(params) ? null : params;
}

export default {
	getUrlParam, // 获取URL指定参数
	getUrlParams // 获取URL全部参数
};