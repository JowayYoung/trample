/** DOM工具 **/

/**
 * @name 自适应
 * @param {number} [width=750] 设计图宽度
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
 * @name 复制粘贴
 * @param {element} [elem=document.body] 节点
 */
function CopyPaste(elem = document.body) {
	const end = elem.childNodes.length;
	const range = document.createRange();
	const selection = getSelection();
	range.setStart(elem, 0);
	range.setEnd(elem, end);
	selection.removeAllRanges();
	selection.addRange(range);
	document.execCommand("copy", false, null);
	selection.removeRange(range);
}

/**
 * @name 文件下载
 * @param {string} [url=""] 地址
 * @param {string} [name=""] 文件名
 */
function DownloadFile(url = "", name = "") {
	if (!url) return;
	const target = document.createElement("a");
	const event = document.createEvent("MouseEvents");
	target.setAttribute("href", url);
	target.setAttribute("download", name);
	event.initEvent("click", true, true);
	target.dispatchEvent(event);
}

/**
 * @name XSS过滤
 * @param {string} [html=""] HTML内容
 */
function FilterXss(html = "") {
	const elem = document.createElement("div");
	elem.innerText = html;
	const result = elem.innerHTML;
	return result;
}

/**
 * @name 图像B64化
 * @param {string} [url=""] 地址
 * @param {string} [type="image/png"] 类型：image/jpeg、image/png
 */
function Img2Base64(url = "", type = "image/png") {
	if (!url) return;
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
 * @name 脚本加载
 * @param {string} [url=""] 地址
 * @param {string} [pst="head"] 插入位置
 */
function LoadScript(url = "", pst = "head") {
	if (!url) return;
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
 * @name 消息提示
 * @param {string} [msg="Tips"] 消息
 * @param {number} [delay=1000] 时延
 * @param {string} [classNames=""] 类名
 * @param {string} [id="toast"] ID
 */
function ToastMsg(msg = "Tips", delay = 1000, classNames = "", id = "toast") {
	if (document.getElementById(id)) return false;
	const body = document.getElementsByTagName("body")[0];
	const toast = document.createElement("div");
	toast.setAttribute("class", classNames);
	toast.setAttribute("id", id);
	toast.innerHTML = msg;
	body.appendChild(toast);
	setTimeout(() => body.removeChild(toast), delay);
}

export {
	AutoResponse,
	CopyPaste,
	DownloadFile,
	FilterXss,
	Img2Base64,
	LoadScript,
	ToastMsg
};

export default {
	AutoResponse,
	CopyPaste,
	DownloadFile,
	FilterXss,
	Img2Base64,
	LoadScript,
	ToastMsg
};