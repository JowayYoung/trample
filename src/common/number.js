/** 数值工具 **/

/**
 * 指定范围随机数
 * @param {number} [min=0] 最小数
 * @param {number} [max=10] 最大数
 */
function RandomNum(min = 0, max = 10) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * 指定范围N个随机数
 * @param {number} [min=0] 最小数
 * @param {number} [max=10] 最大数
 * @param {number} [count=1] 个数
 */
function RandomNumPlus(min = 0, max = 10, count = 1) {
	const randoms = [];
	while (true) {
		let isExists = false;
		const random = RandomNum(min, max);
		for (let i = 0; i < randoms.length; i++) {
			if (random === randoms[i]) {
				isExists = true;
				break;
			}
		}
		if (!isExists) {
			randoms.push(random);
		}
		if (randoms.length === count) {
			return randoms;
		};
	}
}

/**
 * 四百化数值(四舍五入和百分比)
 * @param {number} [num=0] 数值
 * @param {number} [decimal=2] 小数个数
 * @param {boolean} [percent=false] 是否百分比
 */
function RoundNum(num = 0, decimal = 2, percent = false) {
	return percent
		? Math.round(num * 10 ** decimal * 100) / 10 ** decimal + "%"
		: Math.round(num * 10 ** decimal) / 10 ** decimal;
}

/**
 * 千分化数值
 * @param {number} [num=0] 数值
 */
function ThousandNum(num = 0) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default {
	RandomNum, // 指定范围随机数
	RandomNumPlus, // 指定范围N个随机数
	RoundNum, // 四百化数值
	ThousandNum // 千分化数值
};