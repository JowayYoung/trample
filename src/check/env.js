/** 运行环境 **/
import ChildProcess from "child_process";

/**
 * 返回运行环境信息
 */
function getEnv() {
	if (isBrowser()) {
		// 权重：系统 + 系统版本 > 平台 > 内核 + 载体 + 内核版本 + 载体版本 > 外壳 + 外壳版本
		const ua = navigator.userAgent.toLowerCase();
		const testUa = regexp => regexp.test(ua);
		const testVs = regexp => ua.match(regexp)
			.toString()
			.replace(/[^0-9|_.]/g, "")
			.replace(/_/g, ".");
		/* eslint-disable sort-keys */
		// 系统
		const systemMap = {
			windows: /windows|win32|win64|wow32|wow64/g, // windows系统
			macos: /macintosh|macintel/g, // macos系统
			linux: /x11/g, // linux系统
			android: /android|adr/g, // android系统
			ios: /ios|iphone|ipad|ipod|iwatch/g // ios系统
		};
		const systemVsMap = {
			windows() {
				const ver = ua.match(/(windows nt [\d._]+)|(windows [\w._]+)/g)
					.toString()
					.replace(/windows( nt)? /g, "");
				const map = {
					2000: /5\.0|2000/g,
					xp: /5\.1|xp/g,
					2003: /5\.2|2003/g,
					vista: /6\.0|vista/g,
					7: /6\.1|7/g,
					8: /6\.2|8/g,
					8.1: /6\.3|8\.1/g,
					10: /10\.0|10/g
				};
				return Object.keys(map).find(v => map[v].test(ver)) || "unknown";
			},
			macos: /os x [\d._]+/g,
			android: /android [\d._]+/g,
			ios: /os [\d._]+/g
		};
		const system = Object.keys(systemMap).find(v => testUa(systemMap[v])) || "unknown";
		const systemVs = systemVsMap[system]
			? system === "windows"
				? systemVsMap.windows()
				: testVs(systemVsMap[system])
			: "unknown";
		// 平台
		const platformMap = {
			desktop: ["windows", "macos", "linux"], // 桌面端
			mobile: ["android", "ios", testUa(/mobile/g)] // 移动端
		};
		const platform = Object.keys(platformMap).find(v => platformMap[v].includes(system) || v === true) || "unknow";
		// 内核
		const engineMap = {
			webkit: /(?=.*applewebkit)(?=.*safari)/g, // webkit内核
			gecko: /(?=.*gecko)(?=.*firefox)/g, // gecko内核
			presto: /presto/g, // presto内核
			trident: /trident|compatible|msie/g // trident内核
		};
		const engineVsMap = {
			webkit: /applewebkit\/[\d._]+/g,
			gecko: /gecko\/[\d._]+/g,
			presto: /presto\/[\d._]+/g,
			trident: /trident\/[\d._]+/g
		};
		const engine = Object.keys(engineMap).find(v => testUa(engineMap[v])) || "unknow";
		const engineVs = engineVsMap[engine] ? testVs(engineVsMap[engine]) : "unknow";
		// 载体
		const supporterMap = {
			webkit() {
				const map = {
					edge: /edge/g, // edge浏览器
					opera: /opr/g, // opera浏览器
					chrome: /chrome/g // chrome浏览器
				};
				return Object.keys(map).find(v => testUa(map[v])) || "safari"; // safari浏览器
			},
			gecko: "firefox", // firefox浏览器
			presto: "opera", // opera浏览器
			trident: "iexplore" // iexplore浏览器
		};
		const supporterVsMap = {
			chrome: /chrome\/[\d._]+/g,
			safari: /version\/[\d._]+/g,
			firefox: /firefox\/[\d._]+/g,
			opera: /opr\/[\d._]+/g,
			iexplore: /(msie [\d._]+)|(rv:[\d._]+)/g,
			edge: /edge\/[\d._]+/g
		};
		const supporter = supporterMap[engine]
			? engine === "webkit" ? supporterMap.webkit() : supporterMap[engine]
			: "unknow";
		const supporterVs = supporterVsMap[supporter] ? testVs(supporterVsMap[supporter]) : "unknow";
		// 外壳
		const shellMap = {
			wechat: /micromessenger/g, // 微信浏览器
			qq: /qqbrowser/g, // QQ浏览器
			uc: /ubrowser/g, // UC浏览器
			2345: /2345explorer/g, // 2345浏览器
			sougou: /metasr/g, // 搜狗浏览器
			liebao: /lbbrowser/g, // 猎豹浏览器
			maxthon: /maxthon/g, // 遨游浏览器
			baidu: /bidubrowser/g // 百度浏览器
		};
		const shellVsMap = {
			wechat: /micromessenger\/[\d._]+/g,
			qq: /qqbrowser\/[\d._]+/g,
			uc: /ubrowser\/[\d._]+/g,
			2345: /2345explorer\/[\d._]+/g,
			sougou: /metasr\/[\d._]+/g,
			liebao: /lbbrowser\/[\d._]+/g,
			maxthon: /maxthon\/[\d._]+/g,
			baidu: /bidubrowser [\d._]+/g
		};
		const shell = Object.keys(shellMap).find(v => testUa(shellMap[v])) || "unknow";
		const shellVs = shellVsMap[shell] ? testVs(shellVsMap[shell]) : "unknow";
		/* eslint-enable */
		return Object.assign({
			engine, // webkit gecko presto trident
			engineVs,
			mode: "browser",
			platform, // desktop mobile
			supporter, // chrome safari firefox opera iexplore edge
			supporterVs,
			system, // windows macos linux android ios
			systemVs
		}, shell === "none" ? {} : {
			shell, // wechat qq uc 2345 sougou liebao maxthon baidu
			shellVs
		});
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