/** 字符串工具 **/

/**
 * 随机HEX色值
 */
function RandomColor() {
	return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
}

/**
 * 随机长度ID
 * @param {number} [len=3] 长度
 */
function RandomId(len = 5) {
	(len < 1 || len > 10) && (len = 5);
	return Math.random().toString(36).substr(3, len);
}

/**
 * 星级评分
 * @param {number} [rate=0] 星级
 */
function StartScore(rate = 0) {
	(rate < 0 || rate > 5) && (rate = 0);
	return "★★★★★☆☆☆☆☆".slice(5 - rate, 10 - rate);
}

export default {
	RandomColor,
	RandomId,
	StartScore
};