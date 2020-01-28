import Path from "path";
import Util from "util";
import Webpack from "webpack";

const ES5_POLYFILL = [
	"last 20 Chrome versions",
	"last 20 Firefox versions",
	"last 20 Opera versions",
	"Explorer >= 10",
	"Safari >= 8",
	"Android >= 5",
	"iOS >= 8"
];

const ES6_POLYFILL = [
	"Chrome >= 60",
	"Firefox >= 54",
	"Opera >= 50",
	"Safari >= 10.1",
	"Edge >= 15",
	"iOS >= 10.3"
];

function AbsPath(path = "") {
	return Path.join(__dirname, path);
}

function AsyncTo(pfn = null) {
	return pfn ? pfn.then(data => [null, data]).catch(err => [err]) : [null, null];
}

async function BuildCb(webpackConfig) {
	const webpack = Util.promisify(Webpack);
	const stats = await webpack(webpackConfig);
	const promise = new Promise((resolve, reject) => {
		process.stdout.write(stats.toString({
			children: false,
			chunkModules: false,
			chunks: false,
			colors: true,
			modules: false
		}) + "\n\n");
		stats.hasErrors() ? reject(false) : resolve(true); // eslint-disable-line
	});
	return AsyncTo(promise);
}

export {
	AbsPath,
	AsyncTo,
	BuildCb,
	ES5_POLYFILL,
	ES6_POLYFILL
};