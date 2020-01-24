/** DOM操作 **/

/**
 * 自适应
 * @param {number} [width=750] 屏幕宽度
 */
function AutoResponse(width = 750) {
	const target = document.documentElement;
	if (target.clientWidth >= 600) {
		target.style.fontSize = "80px";
	} else {
		target.style.fontSize = target.clientWidth / width * 100 + "px";
	}
}

/**
 * 复制粘贴
 * @param {element} [elem=document.body] 节点
 */
function CopyPaste(elem = document.body) {
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
 * @param {string} [url=""] 地址
 * @param {string} [type="image/png"] 类型
 */
function Img2base64(url = "", type = "image/png") {
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
 * 加载脚本
 * @param {string} [url=""] 地址
 * @param {string} [pst="head"] 插入位置
 */
function LoadScript(url = "", pst = "head") {
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
 * @param {string} [classNames=""] 类名
 * @param {string} [id="toast"] ID
 */
function ToastMsg({ msg = "Tips", delay = 1000, classNames = "", id = "toast" }) {
	if (document.getElementById(id)) return false;
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
	LoadScript, // 加载脚本
	ToastMsg // 提示消息
};