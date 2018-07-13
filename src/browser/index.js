import C from "../check";

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
	copyPaste // 复制粘贴
};