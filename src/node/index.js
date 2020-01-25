/** Node工具 **/
import ChildProcess from "child_process";
import Fs from "fs";
import Path from "path";

/**
 * 绝对路径
 * @param {string} [path=""] 相对路径
 * @param {boolean} [mode=false] 是否运行模式
 */
function AbsPath(path = "", mode = false) {
	// mode：true表示运行终端项目根目录，false表示项目根目录
	const rootDir = mode ? process.cwd() : __dirname;
	return Path.join(rootDir, path);
}

/**
 * 路径存在判断
 * @param {string} [path=""] 相对路径
 * @param {boolean} [mode=false] 是否运行模式
 */
function IsExistPath(path = "", mode = false) {
	return Fs.existsSync(AbsPath(path, mode));
}

/**
 * Node类型
 */
function NodeType() {
	return {
		mode: "node",
		nodeVs: RunCmd("node -v").replace(/(v|\n|\r\n)/g, ""),
		npmVs: RunCmd("npm -v").replace(/\n/g, "")
	};
}

/**
 * 命令运行
 * @param {string} [cmd="node -v"] 命令
 */
function RunCmd(cmd = "node -v") {
	return ChildProcess.execSync(cmd, { encoding: "utf8" });
};

export default {
	AbsPath,
	IsExistPath,
	NodeType,
	RunCmd
};