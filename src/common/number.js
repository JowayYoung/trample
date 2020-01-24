/** 数值工具 **/

/**
 * 四百化数值(四舍五入和百分比)
 * @param {number} [num=0]
 * @param {number} [decimal=2]
 * @param {boolean} [percent=false]
 */
function RoundNum(num = 0, decimal = 2, percent = false) {
	return percent
		? Math.round(num * 10 ** decimal * 100) / 10 ** decimal + "%"
		: Math.round(num * 10 ** decimal) / 10 ** decimal;
}

/**
 * 千分化数值
 * @param {number} [num=0]
 */
function ThousandNum(num = 0) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default {
	RoundNum, // 四百化数值
	ThousandNum // 千分化数值
};