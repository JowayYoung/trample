/** 运行环境 **/
import ChildProcess from "child_process";

// function GetBrowser() {
// 	const result = {};
// 	const ua = navigator.userAgent.toLocaleLowerCase();
// }

function GetNode(name) {
	return ChildProcess.execSync(`${name} -v`, { encoding: "utf8" });
}

// 返回运行环境信息
function getEnv() {
	if (isBrowser()) {
		return {
			core: "", // blink webkit gecko presto trident
			mode: "browser",
			platform: "", // decktop mobile
			platformVersion: "",
			supporter: "", // chrome safari firefox opera iexplore edge
			system: "", // windows osx linux android ios
			systemVersion: ""
		};
	}
	if (isNode()) {
		return {
			mode: "node",
			nodeVersion: GetNode("node").replace(/v/g, "").replace(/\r\n/g, ""),
			npmVersion: GetNode("npm").replace(/\n/g, "")
		};
	}
	return new Error("无法判断当前运行环境");
}

// 判断运行环境
function isBrowser() {
	return typeof window !== "undefined";
}

function isNode() {
	return typeof global !== "undefined";
}

// function isDecktop() {

// }

// function isMobile() {

// }

// function isWindows() {

// }

// function isOSX() {

// }

// function isLinux() {

// }

// function isAndroid() {

// }

// function isIos() {

// }

// function isWeChat() {

// }

export default {
	getEnv, // 返回运行环境信息
	isBrowser, // 判断环境是否为Browser
	isNode // 判断环境是否为Node
};