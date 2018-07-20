import "../css/reset.css";
import "../css/index.scss";
import _ from "../../src/index";

// Browser
_.autoResponse();

const copyPasteBtn = document.getElementById("copy-paste-btn");
copyPasteBtn.addEventListener("click", () => {
	alert("复制成功");
	_.copyPaste(copyPasteBtn);
});

// URL
console.log("##### URL #####");

const param = _.getUrlParam();
console.log("获取URL指定参数", param);

const params = _.getUrlParams();
console.log("获取URL全部参数", params);