/** 时间工具 **/
import Day from "dayjs";
import DayPluginUtc from "dayjs-plugin-utc";

Day.extend(DayPluginUtc, { parseToLocal: true });

/**
 * @name 时间差格式化
 * @param {string} [time=""] 日期
 */
function FormatDiffTime(time = "") {
	const nowTime = Day().utc(8);
	const pastTime = Day(time).utc(8);
	const diff = nowTime.diff(pastTime);
	const monNum = 1461 / 48;
	const yearNum = 1461 / 4;
	const min = 1000 * 60;
	const hour = min * 60;
	const day = hour * 24;
	const mon = day * monNum;
	const year = day * yearNum;
	const minDiff = diff / min;
	const hourDiff = diff / hour;
	const dayDiff = diff / day;
	const monDiff = diff / mon;
	const yearDiff = diff / year;
	if (yearDiff >= 1 || monDiff >= 12) {
		return pastTime.format("YYYY-MM-DD");
	} else if (monDiff >= 1 && monDiff < 12) {
		return parseInt(monDiff) + "个月前";
	} else if (dayDiff >= 1 && dayDiff < monNum) {
		return parseInt(dayDiff) + "天前";
	} else if (hourDiff >= 1 && hourDiff < 24) {
		return parseInt(hourDiff) + "小时前";
	} else if (minDiff >= 1 && minDiff < 60) {
		return parseInt(minDiff) + "分钟前";
	} else {
		return "刚刚";
	}
}

export default {
	FormatDiffTime
};