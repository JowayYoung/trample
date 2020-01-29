/** 日期工具 **/
import Day from "dayjs";

/**
 *
 * @name 倒计时格式化
 * @param {string} [time=""] 日期：YYYY-MM-DD HH:mm:ss
 */
function FormatCountdown(time = "") {
	const nowTime = +new Date();
	const nextTime = +new Date(time);
	const diff = nextTime - nowTime; // 时间差
	if (diff >= 0) {
		const day = Math.floor(diff / 1000 / 3600 / 24);
		const hour = Math.floor(diff / 1000 / 60 / 60 % 24);
		const min = Math.floor(diff / 1000 / 60 % 60);
		const sec = Math.floor(diff / 1000 % 60);
		return `${day ? day + "天" : ""}${hour ? hour + "时" : ""}${min ? min + "分" : ""}${sec ? sec + "秒" : ""}`;
	} else {
		return "时间已到";
	}
}

/**
 * @name 时间差格式化
 * @param {string} [time=""] 日期：YYYY-MM-DD HH:mm:ss
 */
function FormatDiffTime(time = "") {
	const nowTime = Day();
	const tgtTime = Day(time);
	const diff = nowTime.diff(tgtTime);
	const absDiff = Math.abs(diff);
	const slot = diff >= 0 ? "前" : "后";
	const monNum = 1461 / 48;
	const yearNum = 1461 / 4;
	const min = 1000 * 60;
	const hour = min * 60;
	const day = hour * 24;
	const mon = day * monNum;
	const year = day * yearNum;
	const minDiff = absDiff / min;
	const hourDiff = absDiff / hour;
	const dayDiff = absDiff / day;
	const monDiff = absDiff / mon;
	const yearDiff = absDiff / year;
	if (yearDiff >= 1 || monDiff >= 12) {
		return tgtTime.format("YYYY-MM-DD HH:mm:ss");
	} else if (monDiff >= 1 && monDiff < 12) {
		return `${parseInt(monDiff)}个月${slot}`;
	} else if (dayDiff >= 1 && dayDiff < monNum) {
		return `${parseInt(dayDiff)}天${slot}`;
	} else if (hourDiff >= 1 && hourDiff < 24) {
		return `${parseInt(hourDiff)}小时${slot}`;
	} else if (minDiff >= 1 && minDiff < 60) {
		return `${parseInt(minDiff)}分钟${slot}`;
	} else {
		return diff >= 0 ? "刚刚" : "准备";
	}
}

export {
	FormatCountdown,
	FormatDiffTime
};

export default {
	FormatCountdown,
	FormatDiffTime
};