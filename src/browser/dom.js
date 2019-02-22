import C from "../check";

// 自适应页面
function autoResponse(width = 750) {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境的正确性");
	};
	const target = document.documentElement;
	if (target.clientWidth >= 600) {
		target.style.fontSize = "80px";
	} else {
		target.style.fontSize = target.clientWidth / width * 100 + "px";
	}
}

// 复制粘贴
function copyPaste(elem) {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境的正确性");
	};
	const range = document.createRange();
	const end = elem.childNodes.length;
	range.setStart(elem, 0);
	range.setEnd(elem, end);
	const selection = getSelection();
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand("copy", false, null);
	selection.removeRange(range);
}

// 脚本回调
function scriptCallback({ pst = "head", url, successCb, errorCb }) {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境的正确性");
	};
	const script = document.createElement("script");
	script.setAttribute("src", url);
	successCb && script.addEventListener("load", successCb);
	errorCb && script.addEventListener("error", errorCb);
	document[pst].appendChild(script);
}

export default {
	autoResponse, // 自适应页面
	copyPaste, // 复制粘贴
	scriptCallback // 脚本回调
};