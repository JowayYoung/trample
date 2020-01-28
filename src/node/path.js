/** 路径操作 **/
import Fs from "fs";
import Path from "path";

/**
 * @name 绝对路径
 * @param {string} [path=""] 相对路径
 * @param {boolean} [mode=false] 是否运行模式
 */
function AbsPath(path = "", mode = false) {
	// mode：true表示运行终端项目根目录，false表示项目根目录
	const rootDir = mode ? process.cwd() : __dirname;
	return Path.join(rootDir, path);
}

/**
 * @name 路径存在判断
 * @param {string} [path=""] 相对路径
 * @param {boolean} [mode=false] 是否运行模式
 */
function IsExistPath(path = "", mode = false) {
	return Fs.existsSync(AbsPath(path, mode));
}

export {
	AbsPath,
	IsExistPath
};

export default {
	AbsPath,
	IsExistPath
};