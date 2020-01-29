import Util from "util";
import Rimfaf from "rimraf";

import { BuildCb, WebpackConfig } from "./util";

(async() => {
	const rimraf = Util.promisify(Rimfaf);
	const commonUmd = WebpackConfig("common");
	const commonUmdEs6 = WebpackConfig("common", true);
	const webUmd = WebpackConfig("web");
	const webUmdEs6 = WebpackConfig("web", true);
	const nodeUmd = WebpackConfig("node");
	const nodeUmdEs6 = WebpackConfig("node", true);
	await rimraf("dist");
	await BuildCb(commonUmd);
	await BuildCb(commonUmdEs6);
	await BuildCb(webUmd);
	await BuildCb(webUmdEs6);
	await BuildCb(nodeUmd);
	await BuildCb(nodeUmdEs6);
})();