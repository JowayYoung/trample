import CopyPasteDir from "copy-dir";
import MakeDir from "make-dir";
import Rimfaf from "rimraf";

/**
 * @name 复制路径
 * @param {string} [src=""] 输入路径
 * @param {string} [dest=""] 输出路径
 * @param {function} [filter=false] 过滤函数(返回true表示复制，返回false表示不复制)
 */
function CopyDir(src = "", dest = "", filter = false) {
	src && dest && CopyPasteDir.sync(src, dest, {
		cover: true,
		filter,
		mode: true,
		utimes: true
	});
}

/**
 * @name 创建文件路径
 * @param {string} [path=""] 路径
 */
function CreateDir(path = "") {
	path && MakeDir.sync(path);
}

/**
 * @name 删除文件路径
 * @param {string} [path=""] 路径
 */
function RemoveDir(path = "") {
	path && Rimfaf.sync(path);
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