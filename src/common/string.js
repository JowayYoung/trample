/** 字符串工具 **/

/**
 * @name 随机HEX色值
 */
function RandomColor() {
	return "#" + Math.floor(Math.random() * 0xffffff).toString(16).padEnd(6, "0");
}

/**
 * @name 随机长度ID
 * @param {number} [len=3] 长度 在1~10之间
 */
function RandomId(len = 5) {
	(len < 1 || len > 10) && (len = 5);
	return Math.random().toString(36).substr(3, len);
}

/**
 * @name 星级评分
 * @param {number} [rate=0] 星级 在0~5之间
 * @param {number} [len=5] 长度
 */
function StartScore(rate = 0, len = 5) {
	(rate < 0) && (rate = 0);
	(rate > len) && (rate = len);
	return [
		...Array.from(new Array(len).keys()).fill("★"),
		...Array.from(new Array(len).keys()).fill("☆")
	].join("").slice(len - rate, len * 2 - rate);
}

export {
	RandomColor,
	RandomId,
	StartScore
};

export default {
	RandomColor,
	RandomId,
	StartScore
};