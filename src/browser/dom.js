/** DOM操作 **/
import C from "../check";

/**
 * 自适应页面
 * @param {number} [width=750] 屏幕宽度
 */
function autoResponse(width = 750) {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境为Browser");
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
function copyPaste(elem = document.body) {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境为Browser");
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
 * @param {function} [success=null] 成功调函数
 * @param {function} [error=null] 失败回调函数
 */
function img2base64({ url = "", type = "image/png", success = null, error = null }) {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境为Browser");
	};
	const img = new Image();
	img.setAttribute("src", url);
	img.setAttribute("crossOrigin", "");
	img.addEventListener("load", () => {
		let canvas = document.createElement("canvas");
		canvas.width = img.width;
		canvas.height = img.height;
		canvas.getContext("2d").drawImage(img, 0, 0);
		const dataURL = canvas.toDataURL(type);
		success && success.call(this, dataURL);
		canvas = null;
	});
	error && img.addEventListener("error", error);
}

// 懒加载图像
function lazyloadImg() {

}

/**
 * 脚本回调
 * @param {string} [pst="head"] 插入位置
 * @param {string} [url=""] 资源地址
 * @param {function} [successCb=null] 成功回调函数
 * @param {function} [errorCb=null] 失败回调函数
 */
function scriptCallback({ pst = "head", url = "", success = null, error = null }) {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境为Browser");
	};
	if ([...document.getElementsByTagName("script")].some(v => v.src === url || v.src.includes(url))) {
		return success && success();
	}
	const script = document.createElement("script");
	script.setAttribute("src", url);
	success && script.addEventListener("load", success);
	error && script.addEventListener("error", error);
	document[pst].appendChild(script);
}

/**
 * 提示消息
 * @param {string} [msg="hello"] 消息
 * @param {number} [delay=2000] 时延
 * @param {string} [classNames=""] 元素类名
 * @param {string} [id="toast"] 元素ID
 */
function toastMsg({ msg = "hello", delay = 2000, classNames = "", id = "toast" }) {
	if (!C.isBrowser()) {
		return new Error("请确保运行环境为Browser");
	};
	if (document.getElementById(id)) return;
	const body = document.getElementsByTagName("body")[0];
	const toast = document.createElement("div");
	toast.setAttribute("class", classNames);
	toast.setAttribute("id", id);
	toast.innerHTML = msg;
	body.appendChild(toast);
	setTimeout(() => body.removeChild(toast), delay);
}

export default {
	autoResponse, // 自适应页面
	copyPaste, // 复制粘贴
	img2base64, // 图像转换base64
	lazyloadImg, // 懒加载图像
	scriptCallback, // 脚本回调
	toastMsg // 提示消息
};