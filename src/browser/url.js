/** URL操作 **/
import Common from "../common";

/**
 * @name URL参数获取
 * @param {string} [key=""] 参数
 */
function GetUrlQuery(key = "") {
	if (key) {
		const reg = new RegExp(`(^|&)${key}=([^&]*)(&|$)`);
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
 * @name URL参数设置
 * @param {object} [query={}] 参数集合
 */
function SetUrlQuery(query = {}) {
	if (Common.IsEmptyObject(query)) return;
	const url = location.origin + location.pathname;
	const search = GetUrlQuery();
	const hash = location.hash;
	const newQuery = Object.assign({}, search, query);
	const newQueryStr = Object.entries(newQuery).reduce((t, v) => `${t}${v[0]}=${encodeURIComponent(v[1])}&`, "?").replace(/&$/, "");
	history.pushState({}, null, url + newQueryStr + hash);
}

export default {
	GetUrlQuery,
	SetUrlQuery
};