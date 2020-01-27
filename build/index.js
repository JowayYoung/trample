const Util = require("util");
const Rimfaf = require("rimraf");

const WebpackBase = require("./webpack.base");
const { BuildCb } = require("./tool");

(async() => {
	const rimraf = Util.promisify(Rimfaf);
	const browserConfig = WebpackBase("browser");
	const browserEs6Config = WebpackBase("browser", true);
	const nodeConfig = WebpackBase("node");
	const nodeEs6Config = WebpackBase("node", true);
	await rimraf("test/dist");
	await BuildCb(browserConfig);
	await BuildCb(browserEs6Config);
	await BuildCb(nodeConfig);
	await BuildCb(nodeEs6Config);
})();