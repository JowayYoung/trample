// ESM全部导入
// import Common from "../../dist";
// import Node from "../../dist/node";
// console.log(Common.FormatDiffTime("2019-10-01"));
// console.log(Node.RunCmd("npm -v"));

// ESM按需导入
import { FormatDiffTime } from "../../common/index";
import { RunCmd } from "../../node/index";
console.log(FormatDiffTime("2019-10-01"));
console.log(RunCmd("npm -v"));

// CJS全部导入
// const Common = require("../../dist").default;
// const Node = require("../../dist/node").default;
// console.log(Common.FormatDiffTime("2019-10-01"));
// console.log(Node.RunCmd("npm -v"));

// CJS按需导入
// const { FormatDiffTime } = require("../../dist").default;
// const { RunCmd } = require("../../dist/node").default;
// console.log(FormatDiffTime("2019-10-01"));
// console.log(RunCmd("npm -v"));