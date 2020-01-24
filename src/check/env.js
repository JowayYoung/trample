/** 运行环境 **/
import ChildProcess from "child_process";

/**
 * 错误提示
 */
const BROWSER_ERROR = new Error("请确保运行环境为Browser");
const NODE_ERROR = new Error("请确保运行环境为Node");

/**
 * 运行环境
 */
function JsRunEnv() {
	if (IsBrowser()) {
		// 等待完善
	} else if (IsNode()) {
		const runCmd = cmd => ChildProcess.execSync(cmd, { encoding: "utf8" });
		return {
			mode: "node",
			node: runCmd("node -v").replace(/(v|\r\n)/g, ""),
			npm: runCmd("npm -v").replace(/\n/g, "")
		};
	} else {
		return {
			mode: "unknow"
		};
	}
}

/**
 * 判断运行环境是否为Browser
 */
function IsBrowser() {
	return typeof window !== "undefined";
}

/**
 * 判断运行环境是否为Node
 */
function IsNode() {
	return typeof global !== "undefined";
}

export default {
	BROWSER_ERROR, // Browser错误
	IsBrowser, // 判断运行环境是否为Browser
	IsNode, // 判断运行环境是否为Node
	JsRunEnv, // 运行环境
	NODE_ERROR // Node错误
};