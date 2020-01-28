import "./assets/css/reset.css";
import "./index.scss";
import _ from "../../../src";
import ImgLogo from "./assets/img/logo.svg";
import Page from "./templates/page.hbs";

console.log("项目构建环境：", process.env.NODE_ENV);
console.log("项目运行环境：", RUN_ENV); // eslint-disable-line

console.log(_);
console.log(_.FormatCountdown("2021-01-31 23:59:59"));
document.getElementById("root").innerHTML = Page({
	logo: ImgLogo,
	page: "index"
});