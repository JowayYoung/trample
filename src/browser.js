import C from "../check";

function autoResponse(width = 750) {
	const target = document.documentElement;
	if (target.clientWidth >= 600) {
		target.style.fontSize = "80px";
	} else {
		target.style.fontSize = target.clientWidth / width * 100 + "px";
	}
}

function copyPaste(elem) {
	if (!C.isElement(elem)) return null;
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
	autoResponse, // 自动响应
	copyPaste // 复制粘贴
};