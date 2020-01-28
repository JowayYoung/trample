import Util from "util";
import RecursiveCopy from "recursive-copy";
import Rimfaf from "rimraf";

import WebpackConfig from "./webpack";
import { BuildCb } from "./tool";

(async() => {
	const rimraf = Util.promisify(Rimfaf);
	const browserUmd = WebpackConfig("browser");
	const nodeUmd = WebpackConfig("node");
	await rimraf("dist");
	await rimraf("test/dist");
	await BuildCb(browserUmd);
	await BuildCb(nodeUmd);
	await RecursiveCopy("dist", "test/dist");
})();