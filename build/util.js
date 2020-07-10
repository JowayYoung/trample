import Path from "path";
import Util from "util";
import Webpack from "webpack";
import BarPlugin from "webpackbar";
import HardSourcePlugin from "hard-source-webpack-plugin";

const BROWSER_ES5 = [
	"last 20 Chrome versions",
	"last 20 Firefox versions",
	"last 20 Opera versions",
	"Explorer >= 10",
	"Safari >= 8",
	"Android >= 5",
	"iOS >= 8"
];

const POLYFILL = {
	common: { node: "8.0.0" },
	node: { node: "8.0.0" },
	web: { browsers: BROWSER_ES5 }
};

function AbsPath(path = "") {
	return Path.join(__dirname, path);
}

function AsyncTo(pfn = Promise.resolve(true)) {
	return pfn && pfn instanceof Promise ? pfn.then(data => [null, data]).catch(err => [err]) : [null, null];
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

function WebpackConfig(type = "common", isEs5 = false) {
	const babelOpts = {
		babelrc: false,
		cacheDirectory: true,
		plugins: [
			["@babel/plugin-transform-runtime", { regenerator: false, useESModules: true }], // 清除Polyfill重复代码
			["@babel/plugin-proposal-decorators", { legacy: true }], // 装饰器(注解)
			["@babel/plugin-proposal-class-properties", { loose: true }], // 类静态属性
			"@babel/plugin-proposal-nullish-coalescing-operator", // 空赋值操作符(??)
			"@babel/plugin-proposal-optional-chaining", // 可选链操作符(?.)
			"@babel/plugin-syntax-dynamic-import" // 动态导入
		],
		presets: [
			isEs5
				? ["@babel/preset-env", { corejs: 3, targets: POLYFILL[type] || POLYFILL.common, useBuiltIns: "usage" }]
				: "@babel/preset-env"
		]
	};
	const filename = type === "common" ? "index" : type;
	const suffix = isEs5 ? ".es5" : "";
	return {
		devtool: false,
		entry: AbsPath(`../src/${type}.js`),
		mode: "production",
		module: {
			rules: [{
				exclude: /node_modules/,
				include: /src/,
				test: /\.js$/,
				use: [{ loader: "babel-loader", options: babelOpts }]
			}]
		},
		output: {
			filename: `${filename}${suffix}.js`,
			library: "trample",
			libraryExport: "default",
			libraryTarget: "umd",
			path: AbsPath("..")
		},
		plugins: [
			new BarPlugin({ name: "Webpack Build" }),
			new HardSourcePlugin()
		],
		resolve: {
			extensions: [".js", ".json"],
			mainFields: ["jsnext:main", "main"]
		},
		stats: "errors-only",
		target: type === "web" ? "web" : "node"
	};
}

export {
	AbsPath,
	AsyncTo,
	BuildCb,
	WebpackConfig
};