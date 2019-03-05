/** URL操作 **/
import C from "../check";

/**
 * 返回URL参数
 * @param {string} [key=""] 参数
 */
function getQueryParam(key = "") {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境为Browser");
	};
	if (key) {
		const reg = new RegExp("(^|&)" + key + "=([^&]*)(&|$)");
		const result = location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	} else {
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
}

/**
 * 设置URL参数
 * @param {string} [key=""] 参数
 */
function setQueryParam(key = "") {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境为Browser");
	};
	// const query = getQueryParam();
}

export default {
	getQueryParam, // 返回URL参数
	setQueryParam // 设置URL参数
};