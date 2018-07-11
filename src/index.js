import UtilsCheck from "./utils/check"; // 校验工具集
import UtilsFunction from "./utils/function"; // 功能工具集
import UtilsNative from "./utils/native"; // 原生工具集
import UtilsString from "./utils/string"; // 字符工具集
import UtilsUrl from "./utils/url"; // URL工具集

export default {
	...UtilsCheck,
	...UtilsFunction,
	...UtilsString,
	...UtilsNative,
	...UtilsUrl
};