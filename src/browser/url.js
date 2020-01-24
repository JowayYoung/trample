/** URL操作 **/
import { BROWSER_ERROR, IsBrowser } from "../check";

/**
 * 获取URL参数
 * @param {string} [key=""] 参数
 */
function GetUrlQuery(key = "") {
	if (!IsBrowser()) return BROWSER_ERROR;
	if (key) {
		const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
		const result = location.search.substr(1).match(reg);
		return result ? decodeURIComponent(result[2]) : null;
	} else {
		let match;
		const params = {};
		const query = location.search.substr(1);
		const decode = str => decodeURIComponent(str.replace(/\+/g, " "));
		while ((match = /([^&=]+)=?([^&]*)/g.exec(query))) {
			params[decode(match[1])] = decode(match[2]);
		}
		return params;
	}
}

/**
 * 设置URL参数
 * @param {string} [key=""] 参数
 */
function SetUrlQuery(key = "") {
	if (!IsBrowser()) {
		return BROWSER_ERROR;
	};
	// const query = getQueryParam();
}

export default {
	GetUrlQuery, // 获取URL参数
	SetUrlQuery // 设置URL参数
};