import C from "../check";

// 自适应页面
function autoResponse(width = 750) {
	if (!C.isBrowser() || !C.isNumber(width)) return;
	const target = document.documentElement;
	if (target.clientWidth >= 600) {
		target.style.fontSize = "80px";
	} else {
		target.style.fontSize = target.clientWidth / width * 100 + "px";
	}
}

// 复制粘贴
function copyPaste(elem) {
	if (!C.isBrowser() || !C.isElement(elem)) return;
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

export default {
	autoResponse, // 自适应页面
	copyPaste // 复制粘贴
};