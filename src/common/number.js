/** 数值工具 **/

/**
 * @name 补零数值
 * @param {number} [num=0] 数值
 * @param {number} [len=0] 补位
 */
function FillNum(num = 0, len = 0) {
	return num.toString().padStart(len, "0");
}

/**
 * @name 范围随机数
 * @param {number} [min=0] 最小数
 * @param {number} [max=10] 最大数
 */
function RandomNum(min = 0, max = 10) {
	return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * @name N个范围随机数
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
 * @name 精确数值(四舍五入和百分比)
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
 * @name 千分数值
 * @param {number} [num=0] 数值
 */
function ThousandNum(num = 0) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export {
	FillNum,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum
};

export default {
	FillNum,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum
};