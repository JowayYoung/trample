import BrowserUtils from "./browser"; // 浏览器工具集
import CheckUtils from "./check"; // 校验工具集
import FunctionUtils from "./function"; // 功能工具集
import NodeUtils from "./node"; // Node工具集
import StringUtils from "./string"; // 字符工具集
import TimeUtils from "./time"; // 时间工具集
import UrlUtils from "./url"; // URL工具集

console.log(123);

export default {
	...BrowserUtils,
	...CheckUtils,
	...FunctionUtils,
	...NodeUtils,
	...StringUtils,
	...TimeUtils,
	...UrlUtils
};