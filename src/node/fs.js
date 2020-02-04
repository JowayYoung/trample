import CopyPasteDir from "copy-dir";
import MakeDir from "make-dir";
import Rimfaf from "rimraf";

/**
 * @name 复制文件路径
 * @param {string} [src=""] 输入路径
 * @param {string} [dist=""] 输出路径
 * @param {function} [filter=false] 过滤函数(返回true表示复制，返回false表示不复制)
 */
function CopyDir(src = "", dist = "", filter = false) {
	src && dist && CopyPasteDir.sync(src, dist, {
		cover: true,
		filter,
		mode: true,
		utimes: true
	});
}

/**
 * @name 创建文件路径
 * @param {string} [dir=""] 路径
 */
function CreateDir(dir = "") {
	dir && MakeDir.sync(dir);
}

/**
 * @name 删除文件路径
 * @param {string} [dir=""] 路径
 */
function RemoveDir(dir = "") {
	dir && Rimfaf.sync(dir);
}

export {
	CopyDir,
	CreateDir,
	RemoveDir
};

export default {
	CopyDir,
	CreateDir,
	RemoveDir
};