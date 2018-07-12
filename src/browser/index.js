import Config from "../config";

function copyPaste(elem) {
	if (!elem) {
		return Config.consoleMsg("参数elem只能为HTML DOM且不能为空");
	}
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
	copyPaste
};