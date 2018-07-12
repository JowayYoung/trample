import "babel-polyfill";

import BrowserUtils from "./browser"; // 浏览器工具集
import CheckUtils from "./check"; // 校验工具集
import FunctionUtils from "./function"; // 功能工具集
import NodeUtils from "./node"; // Node工具集
import StringUtils from "./string"; // 字符工具集
import TimeUtils from "./time"; // 时间工具集
import UrlUtils from "./url"; // URL工具集

console.log("##### Browser #####");
const btn = document.getElementById("btn");
const target = document.getElementById("yzw");
btn.addEventListener("click", () => {
	alert("复制文本成功");
	BrowserUtils.copyPaste(target);
});

console.log("##### URL #####");
const param = UrlUtils.getUrlParam("mode");
console.log(param);
const params = UrlUtils.getUrlParams();
console.log(params);

export default {
	...BrowserUtils,
	...CheckUtils,
	...FunctionUtils,
	...NodeUtils,
	...StringUtils,
	...TimeUtils,
	...UrlUtils
};