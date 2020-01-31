import Util from "util";
import Rimfaf from "rimraf";
import RecursiveCopy from "recursive-copy";

import { AbsPath, BuildCb, WebpackConfig } from "./util";

(async() => {
	const rimraf = Util.promisify(Rimfaf);
	const commonUmd = WebpackConfig("common");
	const commonUmdEs5 = WebpackConfig("common", true);
	const webUmd = WebpackConfig("web");
	const webUmdEs5 = WebpackConfig("web", true);
	const nodeUmd = WebpackConfig("node");
	const nodeUmdEs5 = WebpackConfig("node", true);
	const rootDir = AbsPath("..");
	const srcDir = AbsPath("../src");
	await rimraf("dist");
	await rimraf("common");
	await rimraf("web");
	await rimraf("node");
	await BuildCb(commonUmd);
	await BuildCb(commonUmdEs5);
	await BuildCb(webUmd);
	await BuildCb(webUmdEs5);
	await BuildCb(nodeUmd);
	await BuildCb(nodeUmdEs5);
	await RecursiveCopy(srcDir, rootDir, { filter: ["**/*", "!common.js", "!node.js", "!web.js"] });
})();