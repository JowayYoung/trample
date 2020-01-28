import "./assets/css/reset.css";
import "./index.scss";
import _ from "../../dist/browser/index.min";
import ImgLogo from "./assets/img/logo.svg";
import Page from "./templates/page.hbs";

console.log("项目构建环境：", process.env.NODE_ENV);
console.log("项目运行环境：", RUN_ENV); // eslint-disable-line

console.log(_.AutoResponse());
document.getElementById("root").innerHTML = Page({
	logo: ImgLogo,
	page: "index"
});