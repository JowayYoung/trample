/** DOM操作 **/
import { BROWSER_ERROR, IsBrowser } from "../check";

/**
 * 自适应
 * @param {number} [width=750] 屏幕宽度
 */
function AutoResponse(width = 750) {
	if (!IsBrowser()) {
		return BROWSER_ERROR;
	};
	const target = document.documentElement;
	if (target.clientWidth >= 600) {
		target.style.fontSize = "80px";
	} else {
		target.style.fontSize = target.clientWidth / width * 100 + "px";
	}
}

/**
 * 复制粘贴
 * @param {element} [elem=document.body] 元素节点
 */
function CopyPaste(elem = document.body) {
	if (!IsBrowser()) {
		return BROWSER_ERROR;
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

/**
 * 图像转换base64
 * @param {string} [url=""] 图像地址
 * @param {string} [type="image/png"] 图像类型
 * @param {function} [success=null] 成功回调函数
 * @param {function} [error=null] 失败回调函数
 */
function Img2base64(url = "", type = "image/png") {
	if (!IsBrowser()) {
		return BROWSER_ERROR;
	};
	return new Promise((resolve, reject) => {
		const img = new Image();
		img.setAttribute("src", url);
		img.setAttribute("crossOrigin", "");
		img.addEventListener("load", () => {
			let canvas = document.createElement("canvas");
			canvas.width = img.width;
			canvas.height = img.height;
			canvas.getContext("2d").drawImage(img, 0, 0);
			const dataURL = canvas.toDataURL(type);
			canvas = null;
			resolve(dataURL);
		});
		img.addEventListener("error", err => reject(new Error(err)));
	});
}

/**
 * 脚本回调
 * @param {string} [url=""] 资源地址
 * @param {string} [pst="head"] 插入位置
 */
function LoadScript(url = "", pst = "head") {
	if (!IsBrowser()) {
		return BROWSER_ERROR;
	};
	return new Promise((resolve, reject) => {
		if ([...document.getElementsByTagName("script")].some(v => v.src === url || v.src.includes(url))) {
			reject(new Error(`<${pst}>已存在此脚本`));
		}
		const script = document.createElement("script");
		script.setAttribute("src", url);
		script.addEventListener("load", () => resolve(true));
		script.addEventListener("error", err => reject(new Error(err)));
		document[pst].appendChild(script);
	});
}

/**
 * 提示消息
 * @param {string} [msg="Tips"] 消息
 * @param {number} [delay=2000] 时延
 * @param {string} [classNames=""] 元素类名
 * @param {string} [id="toast"] 元素ID
 */
function ToastMsg({ msg = "Tips", delay = 2000, classNames = "", id = "toast" }) {
	if (!IsBrowser()) {
		return BROWSER_ERROR;
	};
	if (document.getElementById(id)) {
		return false;
	};
	const body = document.getElementsByTagName("body")[0];
	const toast = document.createElement("div");
	toast.setAttribute("class", classNames);
	toast.setAttribute("id", id);
	toast.innerHTML = msg;
	body.appendChild(toast);
	setTimeout(() => body.removeChild(toast), delay);
}

export default {
	AutoResponse, // 自适应
	CopyPaste, // 复制粘贴
	Img2base64, // 图像转换base64
	LoadScript, // 脚本回调
	ToastMsg // 提示消息
};