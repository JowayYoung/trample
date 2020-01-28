const Util = require("util");
const Rimfaf = require("rimraf");

const WebpackConfig = require("./webpack");
const { BuildCb } = require("./tool");

(async() => {
	const rimraf = Util.promisify(Rimfaf);
	const browserUmd = WebpackConfig("browser");
	const nodeUmd = WebpackConfig("node");
	await rimraf("test/dist");
	await BuildCb(browserUmd);
	await BuildCb(nodeUmd);
})();