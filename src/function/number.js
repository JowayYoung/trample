/** 数值格式化 **/

// 四舍五入数字(百分比)
function roundNum(n = 0, decimal = 2, percent = false) {
	if (percent) {
		return Math.round(n * 10 ** decimal * 100) / 10 ** decimal + "%";
	} else {
		return Math.round(n * 10 ** decimal) / 10 ** decimal;
	}
}

// 千分化数字
function thousandNum(n = 0) {
	return n.toString().replace(/\d{1,3}(?=(\d{3})+$)/g, s => s + ",");
}

export default {
	roundNum, // 四舍五入数字(百分比)
	thousandNum // 千分化数字
};