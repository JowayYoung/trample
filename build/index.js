import Util from "util";
import Rimfaf from "rimraf";

import WebpackConfig from "./webpack";
import { BuildCb } from "./tool";

(async() => {
	const rimraf = Util.promisify(Rimfaf);
	const commonUmd = WebpackConfig("common");
	const browserUmd = WebpackConfig("browser");
	const nodeUmd = WebpackConfig("node");
	await rimraf("dist");
	await BuildCb(commonUmd);
	await BuildCb(browserUmd);
	await BuildCb(nodeUmd);
})();