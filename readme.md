# Trample <img src="https://img.shields.io/badge/trample-Web/Node通用函数工具库-66f.svg">

[![author](https://img.shields.io/badge/author-JowayYoung-f66.svg)](https://github.com/JowayYoung/trample)
[![version](https://img.shields.io/badge/version-0.4.0-f66.svg)](https://github.com/JowayYoung/trample)
[![web](https://img.shields.io/badge/web-%3E%3D%2095%25-3c9.svg)](https://github.com/JowayYoung/trample)
[![node](https://img.shields.io/badge/node-%3E%3D%208.0.0-3c9.svg)](https://github.com/JowayYoung/trample)
[![test](https://img.shields.io/badge/test-passing-f90.svg)](https://github.com/JowayYoung/trample)
[![build](https://img.shields.io/badge/build-passing-f90.svg)](https://github.com/JowayYoung/trample)
[![coverage](https://img.shields.io/badge/coverage-90%25-09f.svg)](https://github.com/JowayYoung/trample)
[![license](https://img.shields.io/badge/license-MIT-09f.svg)](https://github.com/JowayYoung/trample)

### 前言

**工欲善其事，必先利其器**。应用在项目开发上就是：`做好一个项目，前期的工作准备非常重要`。项目开发的前期准备无非都是`合理规划项目结构`、`按需编写构建代码`、`批量创建入口文件`、`复制粘贴工具函数`等。

在此先推荐笔者写的一个**React/Vue应用自动化构建脚手架**[bruce-cli](https://github.com/JowayYoung/bruce-cli)，其零配置开箱即用的优点非常适合入门级、初中级、快速开发项目的前端同学使用，还可通过创建`brucerc.js`文件来覆盖其默认配置，只需专注业务代码的编写无需关注构建代码的编写，让项目结构更简洁。

通过`bruce-cli`能把常规的前期准备都解决了，但我们经常会复制粘贴一些之前项目常用的工具函数过来新项目上，新开其他项目时又会重新执行这些操作。

项目开发过程中时常会重复使用一些工具函数，例如`浏览器类型`、`格式时间差`、`URL参数反序列化`、`过滤XSS`等，为了避免项目开发时重复的复制粘贴操作带来不必要的麻烦，笔者将平时常用的一些工具函数按功能分类和统一封装，并发布到`npm`上。每次项目开发时直接安装，提高开发效率，将时间用在正确的事情上。

### 安装

- 使用`npm`安装：`npm i trample`
- 使用`yarn`安装：`yarn add trample`

### 使用

`trample`根据**Web**和**Node**两种JS运行环境划分代码，生成两种`bundle.js`。每种文件在不同JS运行环境下运行，必须根据JS运行环境引用文件，否则会报错。

##### 区别

模块|工具库|运行环境|对应文件|ESM的对应文件
:-:|:-:|:-:|-|-
**Web**|Web函数工具库|浏览器|`web.js`|`web.esm.js`
**Node**|Node函数工具库|服务器|`node.js`|`node.esm.js`

##### 兼容

- **Web**：`>= 95%`
- **Node**：`>= 8.0.0`

##### 引用

`trample`使用`rollup`打包，因此可使用`IIFE`、`AMD`、`CJS`、`UMD`和`ESM`五种方式引用。但推荐使用`IIFE`、`CJS`、`ESM`三种引用方式。工具库的代码使用`ESM`规范开发，使用`export {}`导出。

> IIFE引用方式

适用于`Web`，最简单最方便的引用方式没有之一。把`node_modules/trample/dist/web.umd.js`复制出来，放到新建的`js/trample`文件夹下，通过HTML的`<script>`直接引用。

```html
<body>
    <script src="js/trample/web.umd.js"></script>
    <script>
        console.log(window.trample.TypeOf("trample"));
        console.log(window.trample.BrowserType());
    </script>
</body>
```

> AMD引用方式

适用于`Web`。把`node_modules/trample/dist/web.umd.js`复制出来，放到新建的`js/trample`文件夹下，需建立在`require.js`下使用。

```js
require.config({
    paths: {
        trample: "js/trample/web.umd.js"
    }
});
require(["trample"], function(trample) {
    console.log(trample.BrowserType());
});
```

> CJS引用方式

适用于`Web`和`Node`。

```js
// Web
const { BrowserType, TypeOf } = require("trample");
// const { BrowserType, TypeOf } = require("trample/dist/web");

console.log(TypeOf("trample"));
console.log(BrowserType());

// Node
const { NodeType, TypeOf } = require("trample/dist/node");

console.log(TypeOf("trample"));
console.log(NodeType());
```

> ESM引用方式

适用于`Web`和`Node`。若使用`ESM`规范开发项目，有利于Wepack启用`TreeSharking`移除未使用的代码。

```js
// Web
import { BrowserType, TypeOf } from "trample";
// import { BrowserType, TypeOf } from "trample/dist/web";

console.log(TypeOf("trample"));
console.log(BrowserType());

// Node
import { NodeType, TypeOf } from "trample/dist/node";

console.log(TypeOf("trample"));
console.log(NodeType());
```

##### 再次提醒

在`Web`环境下，请使用以下导入方式⏬。`trample`默认引用`node_modules/trample/dist/web.js`这个文件。

```js
const { BrowserType, TypeOf } = require("trample");
// 或
import { BrowserType, TypeOf } from "trample";

// 『上面两段代码』 等价 『下面两段代码』(推荐)

const { BrowserType, TypeOf } = require("trample/dist/web");
// 或
import { BrowserType, TypeOf } from "trample/dist/web";
```

在`Node`环境下，请使用以下导入方式⏬。

```js
const { NodeType, TypeOf } = require("trample/dist/node");
// 或
import { NodeType, TypeOf } from "trample/dist/node";
```

`trample`提供`ESM`规范的`index.esm.js`，在`package.json`中已配置`module`字段指向`index.esm.js`。

若使用`webpack`打包项目可利用`Tree Sharking`特性移除未使用代码，有效减小打包体积。配置如下。

```js
module.exports = {
    // webpack其他配置
    resolve: {
        mainFields: ["module", "jsnext:main", "main"]
    }
};
```

### 文档

```!
暂时未接入TypeScript实现函数入参校验，请遵循文档指定的入参类型传参
```

##### 公共函数工具库

[Array 数组工具](https://github.com/JowayYoung/trample/blob/master/src/common/array.js)

- [x] **GroupMemKey()**：分组成员特性
	- arr：数组(`[]`)
	- key：属性(`""`)
- [x] **RecordMemPosition()**：记录成员位置
	- arr：数组(`[]`)
	- val：值(`""`)
- [x] **StatMemCount()**：统计成员个数
	- arr：数组(`[]`)
- [x] **StatMemKeyword()**：统计成员所含关键字
	- arr：数组(`[]`)
	- keys：关键字集合(`[]`)

```js
const arr = [
    { area: "GZ", name: "YZW", age: 27 },
    { area: "GZ", name: "TYJ", age: 25 },
    { area: "GZ", name: "LJY", age: 26 },
    { area: "FS", name: "LXY", age: 24 }
];
GroupMemKey(arr, "area"); // { GZ: Array(3), FS: Array(1) }

const arr = [2, 1, 5, 4, 2, 1, 6, 6, 7];
RecordMemPosition(arr, 2); // [0, 4]

const arr = [0, 1, 1, 2, 2, 2];
StatMemCount(arr); // { 0: 1, 1: 2, 2: 3 }

const text = [
    "今天天气真好，我想出去钓鱼",
    "我一边看电视，一边写作业",
    "小明喜欢同桌的小红，又喜欢后桌的小君，真TM花心",
    "最近上班喜欢摸鱼的人实在太多了，代码不好好写，在想入非非"
];
const keyword = ["偷懒", "喜欢", "睡觉", "摸鱼", "真好", "一边", "明天"];
StatMemKeyword(text, keyword); // ["喜欢", "摸鱼", "真好", "一边"]
```

[Date 日期工具](https://github.com/JowayYoung/trample/blob/master/src/common/date.js)

- [x] **FormatCountdown()**：格式倒计时
	- time：时间(`null`，格式为`YYYY-MM-DD HH:mm:ss`，Safari格式为`YYYY/MM/DD HH:mm:ss`)
	- 备注：用于`未来时间`
- [x] **FormatDiffTime()**：格式时间差
	- time：时间(`null`，格式为`YYYY-MM-DD HH:mm:ss`，Safari格式为`YYYY/MM/DD HH:mm:ss`)
	- 备注：可用于`未来时间`或`过去时间`

```js
FormatCountdown("2021-01-31"); // "367天15时55分17秒"

FormatDiffTime("2019-03-31"); // "10个月前"
```

[Function 函数工具](https://github.com/JowayYoung/trample/blob/master/src/common/function.js)

- [x] **AsyncTo()**：格式异步返回值
	- pfn：Promise函数(`Promise.resolve(true)`)
	- 备注：必须在`async函数`或`自执行async函数`下使用
- [x] **Debounce()**：防抖
	- fn：函数(`v => v`)
	- dura：时延(`50`)
- [x] **Throttle()**：节流
	- fn：函数(`v => v`)
	- dura：时延(`50`)
- [x] **WaitFor()**：等待
	- dura：时延(`1000`)
	- 备注：必须在`async函数`或`自执行async函数`下使用

```js
document.body.addEventListener("click", () => Debounce(() => console.log("Click"), 2000));

document.body.addEventListener("scroll", () => Throttle(() => console.log("Scroll"), 2000));

(async() => {
    const [err, res] = await AsyncTo(GetData());
    await WaitFor(2000);
    console.log(err, res);
})();
```

[Number 数值工具](https://github.com/JowayYoung/trample/blob/master/src/common/number.js)

- [x] **ByteSize()**：字节大小
	- byte：字节(`0`)
- [x] **FillNum()**：补零数值
	- num：数值(`0`)
	- len：补位(`0`)
- [x] **RandomNum()**：范围随机数
	- min：最小数(`0`)
	- max：最大数(`10`)
- [x] **RandomNumPlus()**：N个范围随机数
	- min：最小数(`0`)
	- max：最大数(`10`)
	- count：个数(`1`)
- [x] **RoundNum()**：精确数值(`四舍五入`和`百分比`)
	- num：数值(`0`)
	- dec：小数个数(`2`)
	- per：是否百分比(`false`)
- [x] **ThousandNum()**：千分数值
	- num：数值(`0`)

```js
ByteSize(683468); // "667 KB"

FillNum(999, 4); // "0999"

RandomNum(0, 100); // 88

RandomNumPlus(0, 100, 3); // [40, 59, 27]

RoundNum(0.331234, 2, true); // "33.12%"

ThousandNum(12345.6789); // "12,345.6,789"
```

[Object 对象工具](https://github.com/JowayYoung/trample/blob/master/src/common/object.js)

- [x] **GetKeys()**：读取属性
	- obj：对象(`{}`)
	- keys：属性集合(`[]`)

```js
const obj = { a: 1, b: 2, c: 3, d: 4 };
const keys = ["a", "d"];
GetKeys(obj, keys); // { a: 1, d: 4 }
```

[Regexp 正则工具](https://github.com/JowayYoung/trample/blob/master/src/common/regexp.js)

- [x] **CheckText()**：校验文本
	- type：类型(`""`，可选`address地址、count数量、date日期、email邮件、idcard身份证、image图片、name名称、number计数、password密码、phone手机`)
	- text：文本(`""`)
	- 备注：内置以上几种常用校验文本，如不符合需求请使用以下的`CheckTextPlus()`
- [x] **CheckTextPlus()**：自定义校验文本
	- regexp：正则(`new RegExp()`)
	- msg：提示(`""`)
	- text：文本(`""`)
- [x] **MatchBracketText()**：匹配括号文本
	- tgt：括号形式(`"(*)"`，提取的内容必须使用`*`代替)
	- text：文本(`""`)

```js
CheckText("email", "young.joway@aliyun"); // { flag: false, msg: "邮箱只能由xxx@yyy.zzz形式组成" }

CheckTextPlus(/^(fe)?male$/g, "性别输入错误", "male"); // { flag: true, msg: "" }

MatchBracketText(
    "<img src=\"*\">",
    "<img src=\"pig.jpg\"><p>trample</p><img src=\"dada.png\">"
); // ["pig.jpg", "dada.png"]
```

[String 字符工具](https://github.com/JowayYoung/trample/blob/master/src/common/string.js)

- [x] **DesePhone()**：脱敏手机
	- phone：手机(`""`)
- [x] **FormatPhone()**：格式手机
	- phone：手机(`""`)
	- sign：标记(`"-"`，可选`-、\s`)
- [x] **RandomColor()**：随机HEX色值
- [x] **RandomId()**：随机长度ID
	- len：长度(`5`，在`1~10`间)
- [x] **RemoveTag()**：移除标签
	- text：文本(`""`)
- [x] **ReverseText()**：翻转文本
	- text：文本(`""`)
- [x] **StartScore()**：星级评分
	- rate：星级(`0`，在`0~len`间)
	- len：长度(`5`)

```js
DesePhone("18866669999"); // "188****9999"

FormatPhone("18866669999", " "); // "188 6666 9999"

RandomColor(); // "#26f455"

RandomId(8); // "6ohsln3s"

RemoveTag("<script>alert(\"hello world\")</script>"); // "alert("hello world")"

ReverseText("trample"); // "elpmart"

StartScore(8, 10); // "★★★★★★★★☆☆"
```

[Type 类型工具](https://github.com/JowayYoung/trample/blob/master/src/common/type.js)

- [x] **CompareObj()**：比较对象(`包含数组`)
	- obj1：对象1
	- obj2：对象2
- [x] **EnvType()**：环境类型
	- **IsNode()**：判断Node
	- **IsWeb()**：判断Web
- [x] **IsEqual()**：判断相等
	- data1：数据1
	- data2：数据2
- [x] **TypeOf()**：数据类型
	- data：数据
	- type：类型
	- **IsArguments()**：判断Arguments
	- **IsArray()**：判断数组
	- **IsAsyncFunction()**：判断异步函数
	- **IsBoolean()**：判断布尔值
	- **IsClass()**：判断类
	- **IsDate()**：判断日期
	- **IsEmpty()**：判断空
	- **IsEmptyArray()**：判断空数组
	- **IsEmptyObject()**：判断空对象
	- **IsError()**：判断错误
	- **IsFunction()**：判断函数
	- **IsMap()**：判断Map
	- **IsNull()**：判断空值
	- **IsNumber()**：判断数值
	- **IsObject()**：判断对象
	- **IsRegExp()**：判断正则
	- **IsSet()**：判断Set
	- **IsString()**：判断字符串
	- **IsSymbol()**：判断Symbol
	- **IsSyncFunction()**：判断同步函数
	- **IsUndefined()**：判断未定义
	- **IsWeakMap()**：判断WeakMap
	- **IsWeakSet()**：判断WeakSet

```js
CompareObj({ a: 1, b: 2 }, { b: 3, a: 1 }); // { a: true, b: false }

EnvType(); // "node"
IsNode(); // true
IsWeb(); // false

IsEqual({ a: 1, b: 2 }, { b: 2, a: 1 }); // true

TypeOf(168); // "number"
IsEmptyObject({ a: 1, b: 2 }); // false
IsString(168); // false
```

##### Web函数工具库

[Cookie Cookie工具](https://github.com/JowayYoung/trample/blob/master/src/web/cookie.js)

- [x] **GetCookie()**：读取Cookie
- [x] **RemoveCookie()**：删除Cookie
	- key：键(`""`)
- [x] **SetCookie()**：设置Cookie
	- key：键(`""`)
	- val：值(`""`)
	- day：过期时间(`1`，日)

```js
GetCookie(); // { user_id: "12345", user_token: "abcde" }

RemoveCookie("user_id");

SetCookie("user_id", "123abc", 7);
```

[DOM DOM工具](https://github.com/JowayYoung/trample/blob/master/src/web/dom.js)

- [x] **AutoResponse()**：自适应
	- width：设计图宽度(`750`)
	- 备注：在DOM加载前使用，使DOM的尺寸自适应且使用`rem`定义(`1rem=100px`)，例如设计图里的按钮长宽是`100px * 40px`，则在CSS上书写`.btn{width:1rem;height:.4rem;}`
- [x] **CopyPaste()**：复制粘贴
	- elem：节点(`document.body`)
- [x] **DownloadFile()**：下载文件
	- url：地址(`""`)
	- name：文件名(`""`)
- [x] **FilterXss()**：过滤XSS
	- html：HTML内容(`""`)
- [x] **Img2Base64()**：图像转B64
	- url：地址(`""`)
	- type：类型(`"image/png"`，可选`image/jpeg、image/png`)
- [x] **Jsonp()**：JSONP
	- url：地址(`""`)
	- name：全局变量(`"jsonp"`)
	- cb：回调函数(`null`)
- [x] **LoadScript()**：加载脚本
	- url：地址(`""`)
	- pst：插入位置(`"body"`，可选`head、body`)

```js
AutoResponse(640);

CopyPaste(document.getElementById("btn"));

DownloadFile("https://xxx.yyy/pig.jpg", "pig.jpg");

FilterXss("<script>alert(123)</script>"); // "&lt;script&gt;alert(123)&lt;/script&gt;"

const img = await Img2Base64("https://xxx.yyy/pig.jpg", "image/jpeg"); // "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQAB..."

const flag = await Jsonp("https://xxx.yyy/trample.js", "trample", () => console.log(window.trample));

const flag = await LoadScript("https://xxx.yyy/trample.js", "body");
```

[Function 函数工具](https://github.com/JowayYoung/trample/blob/master/src/web/function.js)

- [x] **Ajax({ ... })**：异步请求
	- data：参数集合(`{}`)
	- error：失败回调函数(`null`)
	- success：成功回调函数(`null`)
	- type：类型(`"get"`，可选`get、post`)
	- url: 地址(`""`)

```js
Ajax({
    data: { a: 1, b: 2 },
    error: err => console.log(err),
    success: res => console.log(res),
    type: "post",
    url: "https://xxx.yyy"
});
```

[Storage Storage工具](https://github.com/JowayYoung/trample/blob/master/src/web/storage.js)

- [x] **ClearLStorage**：清空LocalStorage
- [x] **ClearSStorage**：清空SessionStorage
- [x] **GetLStorage**：读取LocalStorage
	- key：键(`""`)
- [x] **GetSStorage**：读取SessionStorage
	- key：键(`""`)
- [x] **RemoveLStorage**：移除LocalStorage
	- key：键(`""`)
- [x] **RemoveSStorage**：移除SessionStorage
	- key：键(`""`)
- [x] **SetLStorage**：设置LocalStorage
	- key：键(`""`)
	- val：值(`""`)
- [x] **SetSStorage**：设置SessionStorage
	- key：键(`""`)
	- val：值(`""`)

```js
ClearLStorage();
ClearSStorage();

GetLStorage("love"); // "Love"
GetSStorage("love"); // "Love"

RemoveSStorage("love");
RemoveSStorage("love");

SetLStorage("love", "我爱你");
SetSStorage("love", "我爱你");
```

[Type 类型工具](https://github.com/JowayYoung/trample/blob/master/src/web/type.js)

- [x] **BrowserType()**：浏览器类型(史上最全的浏览器类型判断，详情请戳[《详细判断浏览器运行环境》](https://juejin.im/post/5d0220a8f265da1bcc193c6c))
	- ua：用户代理(`navigator.userAgent.toLowerCase()`)
- [x] **IsElement()**：判断Element
	- data：数据

```js
BrowserType(); // { engine: "webkit", engineVs: "537.36", platform: "desktop", supporter: "chrome", supporterVs: "78.0.3904.108", system: "macos", systemVs: "10.14.6" }

IsElement(document.body); // true
```

[URL URL工具](https://github.com/JowayYoung/trample/blob/master/src/web/url.js)

- [x] **ParseUrlSearch()**：URL参数反序列化
- [x] **RemoveUrlSearch()**：删除URL参数
	- search：参数集合(`...[]`，多参数输入)
- [x] **SetUrlSearch()**：设置URL参数
	- search：参数集合(`{}`)
- [x] **StringifyUrlSearch()**：URL参数序列化
	- search：参数集合(`{}`)
	- clear：是否清除假值(`false`，假值包含`undefined、null、""、NaN`)

```js
ParseUrlSearch(); // { name: "young", sex: "male" }

RemoveUrlSearch("name", "sex");

SetUrlSearch({ name: "tong", sex: "female" });

StringifyUrlSearch({ address: "", name: "young", sex: "male" }, true); // "?name=young&sex=male"
```

##### Node函数工具库

[Fs 文件工具](https://github.com/JowayYoung/trample/blob/master/src/node/fs.js)

- [x] **CopyDir()**：复制文件路径
	- src：输入路径(`""`)
	- dist: 输出路径(`""`)
	- filter：过滤函数(`false`，返回`函数`表示过滤规则，返回`false`表示不复制)，函数入参为`stat`和`path`
- [x] **CreateDir()**：创建文件路径
	- dir：路径(`""`)
- [x] **ReadFileForBFS**：BFS读取文件(`广度优先遍历`)
	- dir：路径(`process.cwd()`)
	- igonre：忽略文件正则(`/(node_modules|\.git|\.DS_Store)$/`)
- [x] **ReadFileForDFS**：DFS读取文件(`深度优先遍历`)
	- dir：路径(`process.cwd()`)
	- igonre：忽略文件正则(`/(node_modules|\.git|\.DS_Store)$/`)
- [x] **RemoveDir()**：删除文件路径
	- dir：路径(`""`)

```js
import Path from "path";

function AbsPath(dir) {
    return Path.join(__dirname, dir);
}

CopyDir(
    AbsPath("./src"),
    AbsPath("./trample"),
    (stat, path) => !(stat === "file" && path.includes(".DS_Store"))
);

CreateDir(AbsPath("./assets/lib/trample"));

ReadFileForBFS(); // ["node.js", "web.js"]

ReadFileForDFS(); // ["node.js", "web.js"]

RemoveDir(AbsPath("./assets/lib/trample"));
```

[Process 进程工具](https://github.com/JowayYoung/trample/blob/master/src/node/process.js)

- [x] **RunCmd()**：运行命令
	- cmd：命令行(`"node -v"`)
	- 备注：只支持单行命令，多个命令同时执行可书写成`cmd1 && cmd2`

```js
RunCmd("npm -v"); // "6.11.3"
```

[Type 类型工具](https://github.com/JowayYoung/trample/blob/master/src/node/type.js)

- [x] **NodeType()**：Node类型

```js
NodeType(); // { nodeVs: "12.12.0", npmVs: "6.11.3", system: "macos", systemVs: "18.7.0" }
```

### 目录结构

> 开发目录

```txt
trample
├─ src
│  ├─ common
│  │  ├─ array.js
│  │  ├─ date.js
│  │  ├─ function.js
│  │  ├─ index.js
│  │  ├─ number.js
│  │  ├─ object.js
│  │  ├─ regexp.js
│  │  ├─ string.js
│  │  └─ type.js
│  ├─ node
│  │  ├─ fs.js
│  │  ├─ index.js
│  │  ├─ process.js
│  │  └─ type.js
│  ├─ web
│  │  ├─ cookie.js
│  │  ├─ dom.js
│  │  ├─ function.js
│  │  ├─ index.js
│  │  ├─ storage.js
│  │  ├─ type.js
│  │  └─ url.js
│  ├─ node.js
│  ├─ web.js
│  └─ web.umd.js
├─ .gitignore
├─ .npmignore
├─ license
├─ package.json
├─ readme.md
└─ rollup.config.js
```

### 构建编译

后续补发，构建编译过程正在完善中......

### 测试用例

后续补发，测试用例流程正在书写中......

### 待做

- [ ] 补全测试用例
- [ ] 接入TypeScript

### 后记

`trample`是笔者为了节省项目开发过程中常用工具函数复制粘贴的时间，而封装的一个**Web/Node通用函数工具库**。设计目的是为了`减少无谓的复制粘贴动作`和`统一管理项目开发中常用的工具函数`。

由于笔者是针对个人需求而定制的工具库，所以应用范围可能未包含上你常用的工具函数，可在[Issue](https://github.com/JowayYoung/trample/issues)上`提出你的宝贵建议`或`贴上你想增加的工具函数`。笔者会认真阅读你的宝贵建议和整合各位同学贡献的工具函数。

也可[Fork](https://github.com/JowayYoung/trample)本项目到自己的`Github`上，在原有的基础上增加自己`常用`、`易忘`和`代码量多`的工具函数，同时也可扩展原有的功能和构建方式，封装成自己熟悉的工具库，提升自己的开发能力，间接`减少晚上加班时间`和`增加上班摸鱼时间`。

若觉得`trample`对你有帮助，可在[Issue](https://github.com/JowayYoung/trample/issues)上`提出你的宝贵建议`，笔者会认真阅读并整合你的建议。喜欢`trample`的请给一个[Star](https://github.com/JowayYoung/trample)，或[Fork](https://github.com/JowayYoung/trample)本项目到自己的`Github`上，根据自身需求定制功能。

**关注公众号`IQ前端`，一个专注于CSS/JS开发技巧的前端公众号，更多前端小干货等着你喔**

![](https://static.yangzw.vip/frontend/account/IQ前端公众号.jpg)