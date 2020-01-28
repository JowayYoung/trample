import BarPlugin from "webpackbar";
import HardSourcePlugin from "hard-source-webpack-plugin";

import { AbsPath, ES5_POLYFILL, ES6_POLYFILL } from "./tool";

export default function WebpackConfig(type = "common", isEs6 = false) {
	const polyfill = {
		browser: { browsers: isEs6 ? ES6_POLYFILL : ES5_POLYFILL },
		common: { node: isEs6 ? "10.0.0" : "8.0.0" },
		node: { node: isEs6 ? "10.0.0" : "8.0.0" }
	};
	const envOpts = {
		corejs: 3,
		targets: polyfill[type] || polyfill.common,
		useBuiltIns: "usage"
	};
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
			["@babel/preset-env", envOpts] // ES语法编译
		]
	};
	const filename = type === "common" ? "index" : type;
	// console.log(JSON.stringify(babelOpts, null, 2));
	return {
		devtool: false,
		entry: `./src/${filename}.js`,
		mode: "production",
		module: {
			rules: [{
				exclude: /node_modules/,
				include: /src/,
				test: /\.js$/,
				use: [{ loader: "babel-loader", options: babelOpts }]
			}]
		},
		optimization: {
			concatenateModules: true
		},
		output: {
			filename: `${filename}.js`,
			library: "trample",
			libraryTarget: "umd",
			path: AbsPath("../dist")
		},
		plugins: [
			new BarPlugin({ name: "Webpack Build" }),
			new HardSourcePlugin()
		],
		resolve: {
			extensions: [".js", ".json"],
			mainFields: ["jsnext:main", "main"]
		},
		target: type === "browser" ? "web" : "node"
	};
};