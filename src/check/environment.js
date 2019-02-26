/** 运行环境 **/
import ChildProcess from "child_process";

// function GetBrowser() {
// 	const result = {};
// 	const ua = navigator.userAgent.toLocaleLowerCase();
// }

// 运行命令行
function RunCommand(cmd) {
	return ChildProcess.execSync(cmd, { encoding: "utf8" });
}

// 返回运行环境信息
function getEnv() {
	if (isBrowser()) {
		const ua = navigator.userAgent.toLowerCase();
		const testUa = regexp => regexp.test(ua);
		const testVersion = regexp => (ua.match(regexp) + "")
			.replace(/[^0-9|_.]/ig, "")
			.replace(/_/ig, ".");
		// 系统
		let system = "unknown";
		if (testUa(/windows/ig)) {
			system = "windows";
		} else if (testUa(/macintosh|macintel/ig)) {
			system = "osx";
		} else if (testUa(/x11/ig)) {
			system = "unix";
		} else if (testUa(/android|adr/ig)) {
			system = "android";
		} else if (testUa(/ios|iphone|ipad|ipod/ig)) {
			system = "ios";
		}
		// 系统版本
		let systemVersion = "unknown";
		if (system === "windows") {
			if (testUa(/windows nt 5.0|windows 2000/ig)) {
				systemVersion = "2000";
			} else if (testUa(/windows nt 5.1|windows xp/ig)) {
				systemVersion = "xp";
			} else if (testUa(/windows nt 5.2|windows 2003/ig)) {
				systemVersion = "2003";
			} else if (testUa(/windows nt 6.0|windows vista/ig)) {
				systemVersion = "vista";
			} else if (testUa(/windows nt 6.1|windows 7/ig)) {
				systemVersion = "7";
			} else if (testUa(/windows nt 6.2|windows 8/ig)) {
				systemVersion = "8";
			} else if (testUa(/windows nt 6.3|windows 8.1/ig)) {
				systemVersion = "8.1";
			} else if (testUa(/windows nt 10.0|windows 10/ig)) {
				systemVersion = "10";
			}
		}
		if (system === "ios") {
			systemVersion = testVersion(/os x [\d._]+/ig);
		}
		if (system === "android") {
			systemVersion = testVersion(/android [\d._]+/ig);
		}
		if (system === "ios") {
			systemVersion = testVersion(/os [\d._]+/ig);
		}
		// 平台
		let platform = "unknow";
		if (system === "windows" || system === "osx" || system === "unix") {
			platform = "decktop";
		} else if (system === "android" || system === "ios") {
			platform = "mobile";
		}
		// 内核和载体
		let engine = "unknow";
		let supporter = "unknow";
		if (testUa(/applewebkit/ig) && testUa(/safari/ig)) {
			engine = "webkit";
			if (testUa(/opr/ig)) {
				supporter = "opera";
			} else if (testUa(/edge/ig)) {
				supporter = "edge";
			} else if (testUa(/chrome/ig)) {
				supporter = "chrome";
			} else {
				supporter = "safari";
			}
		} else if (testUa(/gecko/ig) && testUa(/firefox/ig)) {
			engine = "gecko";
			supporter = "firefox";
		} else if (testUa(/presto/ig)) {
			engine = "presto";
			supporter = "opera";
		} else if (testUa(/trident/ig)) {
			engine = "trident";
			supporter = "iexplore";
		}
		return {
			engine, // webkit gecko presto trident
			mode: "browser",
			platform, // decktop mobile
			supporter, // chrome safari firefox opera iexplore edge
			system, // windows osx unix android ios
			systemVersion
		};
	}
	if (isNode()) {
		return {
			mode: "node",
			nodeVersion: RunCommand("node -v").replace(/v/g, "").replace(/\r\n/g, ""),
			npmVersion: RunCommand("npm -v").replace(/\n/g, "")
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

// function isUnix() {

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