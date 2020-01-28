/** 类型判断 **/
import { RunCmd } from "./process";

/**
 * @name Node类型
 */
function NodeType() {
	return {
		mode: "node",
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