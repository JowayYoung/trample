import Util from "util";
import Rimfaf from "rimraf";
import RecursiveCopy from "recursive-copy";

import { BuildCb, WebpackConfig } from "./util";

(async() => {
	const rimraf = Util.promisify(Rimfaf);
	const webUmd = WebpackConfig("web");
	const webUmdEs5 = WebpackConfig("web", true);
	const nodeUmd = WebpackConfig("node");
	const nodeUmdEs5 = WebpackConfig("node", true);
	const delList = ["web.js", "web.es5.js", "node.js", "node.es5.js", "common", "web", "node"];
	const buildList = [webUmd, webUmdEs5, nodeUmd, nodeUmdEs5];
	for (const v of delList) {
		await rimraf(v);
	}
	for (const v of buildList) {
		await BuildCb(v);
	}
	await RecursiveCopy("src", "", { filter: ["**/*", "!node.js", "!web.js"] });
})();