/** 类型工具 **/
import { RunCmd } from "./process";

/**
 * @name Node类型
 */
function NodeType() {
	return {
		nodeVs: RunCmd("node -v").replace(/(v|\n|\r\n)/g, ""),
		npmVs: RunCmd("npm -v").replace(/\n/g, "")
	};
}

export {
	NodeType
};

export default {
	NodeType
};