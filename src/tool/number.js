/** 数值格式化 **/

// 四百化数值(四舍五入和百分比)
function roundNum(num = 0, decimal = 2, percent = false) {
	if (percent) {
		return Math.round(num * 10 ** decimal * 100) / 10 ** decimal + "%";
	} else {
		return Math.round(num * 10 ** decimal) / 10 ** decimal;
	}
}

// 千分化数值
function thousandNum(num = 0) {
	return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

export default {
	roundNum, // 四百化数值
	thousandNum // 千分化数值
};