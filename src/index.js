import "babel-polyfill";

import B from "./browser"; // 浏览器工具集
import C from "./check"; // 校验工具集
import F from "./function"; // 功能工具集
import N from "./node"; // Node工具集
import S from "./string"; // 字符工具集
import T from "./time"; // 时间工具集
import U from "./url"; // URL工具集

export default {
	...B,
	...C,
	...F,
	...N,
	...S,
	...T,
	...U
};