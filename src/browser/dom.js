/** DOM操作 **/
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

// 懒加载图像
function lazyloadImg() {}

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

// 提示消息
function toastMsg(msg, id = "toast", classNames = "") {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境的正确性");
	};
	if (document.getElementById(id)) return;
	const body = document.getElementsByTagName("body")[0];
	const toast = document.createElement("div");
	toast.setAttribute("class", classNames);
	toast.setAttribute("id", id);
	toast.innerHTML = msg;
	body.appendChild(toast);
	setTimeout(() => body.removeChild(toast), 2000);
}

export default {
	autoResponse, // 自适应页面
	copyPaste, // 复制粘贴
	lazyloadImg, // 懒加载图像
	scriptCallback, // 脚本回调
	toastMsg // 提示消息
};