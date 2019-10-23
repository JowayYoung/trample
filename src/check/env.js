/** 运行环境 **/
import ChildProcess from "child_process";

/**
 * 返回运行环境信息
 */
function getEnv() {
	if (isBrowser()) {
		// 等待完善
	}
	if (isNode()) {
		const runCmd = cmd => ChildProcess.execSync(cmd, { encoding: "utf8" });
		return {
			mode: "node",
			node: runCmd("node -v").replace(/v/g, "").replace(/\r\n/g, ""),
			npm: runCmd("npm -v").replace(/\n/g, "")
		};
	}
	return new Error("无法判断当前运行环境");
}

/**
 * 判断环境是否为Browser
 */
function isBrowser() {
	return typeof window !== "undefined";
}

/**
 * 判断环境是否为Node
 */
function isNode() {
	return typeof global !== "undefined";
}

export default {
	getEnv, // 返回运行环境信息
	isBrowser, // 判断环境是否为Browser
	isNode // 判断环境是否为Node
};