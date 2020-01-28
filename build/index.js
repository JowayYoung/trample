import Util from "util";
import Rimfaf from "rimraf";

import WebpackConfig from "./webpack";
import { BuildCb } from "./tool";

(async() => {
	const rimraf = Util.promisify(Rimfaf);
	const commonUmd = WebpackConfig("common");
	const webUmd = WebpackConfig("web");
	const nodeUmd = WebpackConfig("node");
	await rimraf("dist");
	await BuildCb(commonUmd);
	await BuildCb(webUmd);
	await BuildCb(nodeUmd);
})();