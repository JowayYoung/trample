import "../css/reset.css";
import "../css/index.scss";
import _ from "../../src/index";

// Browser
const btn = document.getElementById("btn");
const target = document.getElementById("yzw");
btn.addEventListener("click", () => {
	alert("复制成功");
	_.copyPaste(target);
});

// URL
console.log("##### URL #####");
const param = _.getUrlParam();
console.log(param);
const params = _.getUrlParams();
console.log(params);