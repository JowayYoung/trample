/** 数组工具 **/

/**
 * @name 统计成员个数
 * @param {array} [arr=[]] 数组
 */
function MemberCount(arr = []) {
	return arr.reduce((t, v) => (t[v] = (t[v] || 0) + 1, t), {});
}

/**
 * @name 分组成员特性
 * @param {array} [arr=[]] 数组
 * @param {string} [key=""] 属性
 */
function MemberGroup(arr = [], key = "") {
	return key ? arr.reduce((t, v) => (!t[v[key]] && (t[v[key]] = []), t[v[key]].push(v), t), {}) : {};
}

/**
 * @name 统计成员所含关键字
 * @param {array} [arr=[]] 数组
 * @param {array} [keys=[]] 关键字集合
 */
function MemberKeyword(arr = [], keys = []) {
	return keys.reduce((t, v) => (arr.some(w => w.includes(v)) && t.push(v), t), []);
}

/**
 * @name 记录成员位置
 * @param {array} [arr=[]] 数组
 * @param {*} val 值
 */
function MemberPosition(arr = [], val) {
	return arr.reduce((t, v, i) => (v === val && t.push(i), t), []);
}

export {
	MemberCount,
	MemberGroup,
	MemberKeyword,
	MemberPosition
};

export default {
	MemberCount,
	MemberGroup,
	MemberKeyword,
	MemberPosition
};