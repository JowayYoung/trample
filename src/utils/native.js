import Config from "../config";

function copyPaste(elem) {
	if (!elem) {
		return Config.errorMsg(
			"参数elem只能为HTML DOM且不能为空",
			"The elem can only be HTML DOM and cannot be empty"
		);
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