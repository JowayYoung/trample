/** 运行环境 **/
import ChildProcess from "child_process";

/**
 * 返回运行环境信息
 */
function getEnv() {
	if (isBrowser()) {
		// 权重：系统 > 系统版本 > 平台 > 内核 > 载体 > 载体版本 > 外壳 > 外壳版本
		const ua = navigator.userAgent.toLowerCase();
		const testUa = regexp => regexp.test(ua);
		const testVs = regexp => (ua.match(regexp) + "")
			.replace(/[^0-9|_.]/ig, "")
			.replace(/_/ig, ".");
		// 系统
		let system = "unknown";
		if (testUa(/windows|win32|win64|wow32|wow64/ig)) {
			system = "windows";
		} else if (testUa(/macintosh|macintel/ig)) {
			system = "osx";
		} else if (testUa(/x11/ig)) {
			system = "linux";
		} else if (testUa(/android|adr/ig)) {
			system = "android";
		} else if (testUa(/ios|iphone|ipad|ipod|iwatch/ig)) {
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
		if (system === "osx") {
			systemVersion = testVs(/os x [\d._]+/ig);
		}
		if (system === "android") {
			systemVersion = testVs(/android [\d._]+/ig);
		}
		if (system === "ios") {
			systemVersion = testVs(/os [\d._]+/ig);
		}
		// 平台
		let platform = "unknow";
		if (system === "windows" || system === "osx" || system === "linux") {
			platform = "decktop";
		} else if (system === "android" || system === "ios" || testUa(/mobile/ig)) {
			platform = "mobile";
		}
		// 内核和载体
		let engine = "unknow";
		let supporter = "unknow";
		if (testUa(/applewebkit/ig) && testUa(/safari/ig)) {
			engine = "webkit";
			if (testUa(/edge/ig)) {
				supporter = "edge";
			} else if (testUa(/opr/ig)) {
				supporter = "opera";
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
		} else if (testUa(/trident|compatible|msie/ig)) {
			engine = "trident";
			supporter = "iexplore";
		}
		// 内核版本
		let engineVersion = "unknow";
		if (engine === "webkit") {
			engineVersion = testVs(/applewebkit\/[\d.]+/ig);
		} else if (engine === "gecko") {
			engineVersion = testVs(/gecko\/[\d.]+/ig);
		} else if (engine === "presto") {
			engineVersion = testVs(/presto\/[\d.]+/ig);
		} else if (engine === "trident") {
			engineVersion = testVs(/trident\/[\d.]+/ig);
		}
		// 载体版本
		let supporterVersion = "unknow";
		if (supporter === "chrome") {
			supporterVersion = testVs(/chrome\/[\d.]+/ig);
		} else if (supporter === "safari") {
			supporterVersion = testVs(/version\/[\d.]+/ig);
		} else if (supporter === "firefox") {
			supporterVersion = testVs(/firefox\/[\d.]+/ig);
		} else if (supporter === "opera") {
			supporterVersion = testVs(/opr\/[\d.]+/ig);
		} else if (supporter === "iexplore") {
			supporterVersion = testVs(/(msie [\d.]+)|(rv:[\d.]+)/ig);
		} else if (supporter === "edge") {
			supporterVersion = testVs(/edge\/[\d.]+/ig);
		}
		// 外壳和外壳版本
		let shell = "none";
		let shellVersion = "unknow";
		if (testUa(/micromessenger/ig)) {
			shell = "wechat";
			shellVersion = testVs(/micromessenger\/[\d.]+/ig);
		} else if (testUa(/qqbrowser/ig)) {
			shell = "qq";
			shellVersion = testVs(/qqbrowser\/[\d.]+/ig);
		} else if (testUa(/ubrowser/ig)) {
			shell = "uc";
			shellVersion = testVs(/ubrowser\/[\d.]+/ig);
		} else if (testUa(/2345explorer/ig)) {
			shell = "2345";
			shellVersion = testVs(/2345explorer\/[\d.]+/ig);
		} else if (testUa(/metasr/ig)) {
			shell = "sougou";
		} else if (testUa(/lbbrowser/ig)) {
			shell = "liebao";
		} else if (testUa(/maxthon/ig)) {
			shell = "maxthon";
			shellVersion = testVs(/maxthon\/[\d.]+/ig);
		} else if (testUa(/bidubrowser/ig)) {
			shell = "baidu";
			shellVersion = testVs(/bidubrowser [\d.]+/ig);
		}
		return Object.assign({
			engine, // webkit gecko presto trident
			engineVersion,
			mode: "browser",
			platform, // decktop mobile
			supporter, // chrome safari firefox opera iexplore edge
			supporterVersion,
			system, // windows osx linux android ios
			systemVersion
		}, shell !== "none" ? {
			shell,
			shellVersion
		} : {});
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