import Trample from "../src/index";

// Browser
console.log("##### Browser #####");
const btn = document.getElementById("btn");
const target = document.getElementById("yzw");
btn.addEventListener("click", () => {
	alert("复制文本成功");
	Trample.copyPaste(target);
});

// URL
console.log("##### URL #####");
const param = Trample.getUrlParam("mode");
console.log(param);
const params = Trample.getUrlParams();
console.log(params);