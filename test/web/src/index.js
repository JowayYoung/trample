import T from "../../../dist";

import "./assets/css/reset.css";
import "./index.scss";
import ImgLogo from "./assets/img/logo.svg";
import Page from "./templates/page.hbs";
import { ParseUrlSearch } from "../../../web/index";

console.log("项目构建环境：", process.env.NODE_ENV);
console.log("项目运行环境：", RUN_ENV); // eslint-disable-line

console.log(T.FormatDiffTime("2020-10-01"));

const TW = require("../../../dist/web").default;
TW.AutoResponse();
console.log(ParseUrlSearch());

document.getElementById("root").innerHTML = Page({
	logo: ImgLogo,
	page: "index"
});