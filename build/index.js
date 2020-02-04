import Util from "util";
import Rimfaf from "rimraf";
import CopyDir from "copy-dir";

import { AbsPath, BuildCb, WebpackConfig } from "./util";

(async() => {
	const rimraf = Util.promisify(Rimfaf);
	const nodeUmd = WebpackConfig("node");
	const nodeUmdEs5 = WebpackConfig("node", true);
	const webUmd = WebpackConfig("web");
	const webUmdEs5 = WebpackConfig("web", true);
	const delList = ["common", "node", "web", "node.js", "node.es5.js", "web.js", "web.es5.js"];
	const buildList = [nodeUmd, nodeUmdEs5, webUmd, webUmdEs5];
	const filterList = [".DS_Store", "node.js", "web.js"];
	for (const v of delList) {
		await rimraf(v);
	}
	for (const v of buildList) {
		await BuildCb(v);
	}
	CopyDir.sync(AbsPath("../src"), AbsPath(".."), {
		cover: true,
		filter: (stat, path) => !(stat === "file" && filterList.some(v => path.includes(v))),
		mode: true,
		utimes: true
	});
})();