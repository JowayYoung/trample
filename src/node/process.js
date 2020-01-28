/** 类型判断 **/
import ChildProcess from "child_process";

/**
 * @name 命令运行
 * @param {string} [cmd="node -v"] 命令
 */
function RunCmd(cmd = "node -v") {
	return ChildProcess.execSync(cmd, { encoding: "utf8" });
};

export {
	RunCmd
};

export default {
	RunCmd
};