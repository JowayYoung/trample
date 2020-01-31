# Trample <img src="https://img.shields.io/badge/trample-Web/Node通用函数工具库-66f.svg">

<img src="https://img.shields.io/badge/author-JowayYoung-f66.svg">
<img src="https://img.shields.io/badge/version-0.0.3-f66.svg">
<img src="https://img.shields.io/badge/web-%3E%3D%2095%25-3c9.svg">
<img src="https://img.shields.io/badge/node-%3E%3D%208.0.0-3c9.svg">
<img src="https://img.shields.io/badge/test-passing-f90.svg">
<img src="https://img.shields.io/badge/build-passing-f90.svg">
<img src="https://img.shields.io/badge/coverage-100%25-09f.svg">
<img src="https://img.shields.io/badge/license-MIT-09f.svg">

### 前言

**工欲善其事，必先利其器**。应用在项目开发上就是：`做好一个项目，前期的工作准备非常重要`。项目开发的前期准备无非都是`合理规划项目结构`、`按需编写构建代码`、`批量创建入口文件`、`复制粘贴工具函数`等。

在这里先推荐笔者写的一个**React/Vue应用自动化构建脚手架**[bruce-cli](https://github.com/JowayYoung/bruce-cli)，其零配置开箱即用的优点非常适合入门级、初中级、快速开发项目的前端同学使用，还可通过创建`brucerc.js`文件来覆盖其默认配置，只需专注业务代码的编写无需关注构建代码的编写，让项目结构更简洁。

通过`bruce-cli`能把常规的前期准备都解决了，但是我们经常会复制粘贴一些之前项目常用的工具函数过来新项目上，新开项目时又会重新执行这些操作。

项目开发过程中时常会重复使用一些工具函数，例如`浏览器类型`、`时间差格式化`、`URL参数反序列化`、`XSS过滤`等，为了避免项目开发时重复的复制粘贴操作所带来不必要的麻烦，笔者将平时常用的一些工具函数按功能分类和统一封装，并发布到`npm`上。每次项目开发时直接安装，提高开发效率，将时间用在正确的位置上。

### 安装

- `npm i trample`
- `yarn add trample`

> 安装失败

- 将npm源镜像设置为淘宝镜像：`npm config set registry https://registry.npm.taobao.org`
- 重新执行命令安装：`npm i trample` 或 `yarn add trample`

### 使用

`trample.js`根据**Web**和**Node**两种JS运行环境进行代码划分，生成三个`bundle`文件。每个文件在不同的JS运行环境下才能运行，必须根据JS运行环境引用文件，否则会报错。

> 区别

模块|工具库|运行环境|对应文件|兼容ES5的对应文件
:-:|:-:|:-:|-|-
**Common**|公共函数工具库|浏览器和服务器|被下面文件包含|被下面文件包含
**Web**|Web函数工具库|浏览器|`dist/web.js`|`dist/web.es5.js`
**Node**|Node函数工具库|服务器|`dist/node.js`|`dist/node.es5.js`

> 引用

`trample.js`使用`UMD`通用模块规范进行打包，因此可使用`HTML`、`AMD`、`CJS`和`ESM`四种方式引用。但是推荐使用`HTML`、`CJS`、`ESM`三中引用方式。

工具库的代码使用`ESM`的形式进行开发，使用`export default {}`进行导出。所以使用`HTML引用方式`时必须使用`trample.default.xxx()`的形式，使用`CJS引用方式`时必须使用`require("trample").default.xxx()`的形式。

##### HTML引用方式

最简单最方便的引用方式没有之一。把`node_modules/trample/dist/web.es5.js`复制出来，放到新建的`js/trample`文件夹下，通过HTML的`<script>`直接引用，只适用于`Web`。

```html
<body>
    <script src="js/trample/web.es5.js"></script>
    <script>trample.default.FormatDiffTime("2019-03-31")</script>
</body>
```

##### CJS引用方式

适用于`Web`和`Node`

```js
// Common
const T = require("trample").default;
T.DataType("trample", "string");

// Web
const TW = require("trample/dist/web").default;
TW.BrowserType();

// Node
const TN = require("trample/dist/node").default;
TN.NodeType();
```

##### ESM引用方式

适用于`Web`和`Node`

```js
// Common：全部导入
import T from "trample";
T.DataType("trample", "string");

// Common：按需导入
import { DataType } from "trample/common/index.js";
DataType("trample", "string");

// Web：全部导入
import TW from "trample/dist/web";
TW.BrowserType();

// Web：按需导入
import { BrowserType } from "trample/web/index.js";
BrowserType();

// Node：全部导入
import TN from "trample/dist/node";
TN.NodeType();

// Node：按需导入
import { NodeType } from "trample/node/index.js";
NodeType();
```

### 文档

> 公共函数工具库

[Date 日期工具](https://github.com/JowayYoung/trample/blob/master/src/common/date.js)

- [x] **FormatCountdown()**：倒计时格式化
	- time：时间(`""`，形式为`YYYY-MM-DD HH:mm:ss`)
- [x] **FormatDiffTime()**：时间差格式化
	- time：时间(`""`，形式为`YYYY-MM-DD HH:mm:ss`)

```js
FormatCountdown("2021-01-31"); // "367天15时55分17秒"

FormatDiffTime("2019-03-31"); // "10个月前"
```

[Function 函数工具](https://github.com/JowayYoung/trample/blob/master/src/common/function.js)

- [x] **Ajax({ ... })**：异步请求
	- data：参数(`{}`)
	- error：失败回调函数(`null`)
	- success：成功回调函数(`null`)
	- type：类型(`"get"`，可选`get、post`)
	- url: 地址(`""`)
- [x] **AsyncTo()**：异步返回值格式化
	- pfn：Promise函数(`Promise.resolve(true)`)
- [x] **WaitFor()**：等待
	- dura：时延(`1000`)

```js
Ajax({
    data: { a: 1, b: 2 },
    error: err => console.log(err),
    success: res => console.log(res),
    type: "post",
    url: "https://xxx.yyy"
});

(async() => {
    const [err, res] = await AsyncTo(GetData());
    await WaitFor(2000);
    console.log(err, res);
})();
```

[Number 数值工具](https://github.com/JowayYoung/trample/blob/master/src/common/number.js)

- [x] **FillNum()**：数值补零化
	- num：数值(`0`)
	- len：补位(`0`)
- [x] **RandomNum()**：范围随机数
	- min：最小数(`0`)
	- max：最大数(`10`)
- [x] **RandomNumPlus()**：N个范围随机数
	- min：最小数(`0`)
	- max：最大数(`10`)
	- count：个数(`1`)
- [x] **RoundNum()**：数值精确化(`四舍五入`和`百分比`)
	- num：数值(`0`)
	- dec：小数个数(`2`)
	- per：是否百分比(`false`)
- [x] **ThousandNum()**：数值千分化
	- num：数值(`0`)

```js
FillNum(999, 4); // "0999"

RandomNum(0, 100); // 88

RandomNumPlus(0, 100, 3); // [40, 59, 27]

RoundNum(0.331234, 2, true); // "33.12%"

ThousandNum(12345.6789); // "12,345.6,789"
```

[Regexp 正则工具](https://github.com/JowayYoung/trample/blob/master/src/common/regexp.js)

- [x] **CheckText()**：文本校验
	- type：类型(`""`，可选`address地址、count数量、date日期、email邮件、idcard身份证、image图片、name名称、number计数、password密码、phone手机`)
	- text：文本(`""`)
- [x] **CheckTextPlus()**：自定义文本校验
	- regexp：正则(`new RegExp()`)
	- msg：提示(`""`)
	- text：文本(`""`)
- [x] **MatchBracketText()**：括号文本匹配
	- tgt：括号形式(`"(*)"`，提取的内容必须使用`*`代替)
	- text：文本(`""`)

```js
CheckText("email", "young.joway@aliyun"); // { flag: false, msg: "邮箱只能由xxx@yyy.zzz形式组成" }

CheckTextPlus(/^(fe)?male$/g, "性别输入错误", "male"); // { flag: true, msg: "" }

MatchBracketText(
    "<img src=\"*\">",
    "<img src=\"pig.jpg\"><p>Trample</p><img src=\"dada.png\">"
); // ["pig.jpg", "dada.png"]
```

[String 字符工具](https://github.com/JowayYoung/trample/blob/master/src/common/string.js)

- [x] **RandomColor()**：随机HEX色值
- [x] **RandomId()**：随机长度ID
	- len：长度(`5`，在`1~10`之间)
- [x] **StartScore()**：星级评分
	- rate：星级(`0`，在`0~5`之间)
	- len：长度(`5`)

```js
RandomColor(); // "#26f455"

RandomId(8); // "6ohsln3s"

StartScore(8, 10); // "★★★★★★★★☆☆"
```

[Type 类型工具](https://github.com/JowayYoung/trample/blob/master/src/common/type.js)

- [x] **DataType()**：数据类型
	- data：数据
	- type：类型
	- **IsArguments()**：Arguments判断
	- **IsArray()**：数组判断
	- **IsAsyncFunction()**：异步函数判断
	- **IsBoolean()**：布尔值判断
	- **IsClass()**：类判断
	- **IsDate()**：日期判断
	- **IsEmpty()**：空判断
	- **IsEmptyArray()**：空数组判断
	- **IsEmptyObject()**：空对象判断
	- **IsError()**：错误判断
	- **IsFunction()**：函数判断
	- **IsMap()**：Map判断
	- **IsNull()**：空值判断
	- **IsNumber()**：数值判断
	- **IsObject()**：对象判断
	- **IsRegExp()**：正则判断
	- **IsSet()**：Set判断
	- **IsString()**：字符串判断
	- **IsSymbol()**：Symbol判断
	- **IsSyncFunction()**：同步函数判断
	- **IsUndefined()**：未定义判断
	- **IsWeakMap()**：WeakMap判断
	- **IsWeakSet()**：WeakSet判断
- [x] **EnvType()**：环境类型
	- **IsNode()**：Node判断
	- **IsWeb()**：Web判断

```js
DataType(168); // "number"
IsEmptyObject({ a: 1, b: 2 }); // false
IsString(168); // false

EnvType(); // "node"
IsNode(); // true
IsWeb(); // false
```

> Web函数工具库

[Cookie Cookie工具](https://github.com/JowayYoung/trample/blob/master/src/web/cookie.js)

- [x] **GetCookie()**：Cookie读取
- [x] **RemoveCookie()**：Cookie删除
	- key：键(`""`)
- [x] **SetCookie()**：Cookie设置
	- key：键(`""`)
	- val：值(`""`)
	- day：过期时间(`1`，日)

```js
GetCookie(); // { user_id: "abc123", user_token: "aaasss" }

RemoveCookie("user_id");

SetCookie("user_id", "123abc", 7);
```

[DOM DOM工具](https://github.com/JowayYoung/trample/blob/master/src/web/dom.js)

- [x] **AutoResponse()**：自适应
	- width：设计图宽度(`750`)
- [x] **CopyPaste()**：复制粘贴
	- elem：节点(`document.body`)
- [x] **DownloadFile()**：文件下载
	- url：地址(`""`)
	- name：文件名(`""`)
- [x] **FilterXss()**：XSS过滤
	- html：HTML内容(`""`)
- [x] **Img2Base64()**：图像B64化
	- url：地址(`""`)
	- type：类型(`"image/png"`，可选`image/jpeg、image/png`)
- [x] **LoadScript()**：脚本加载
	- url：地址(`""`)
	- pst：插入位置(`"head"`，可选`head、body`)
- [x] **ToastMsg()**：消息提示
	- msg：消息(`""`)
	- delay：时延(`1000`)
	- classNames：类名(`""`)
	- id：ID(`"toast"`)

```js
AutoResponse(640);

CopyPaste(document.getElementById("btn")); // "复制粘贴"

DownloadFile("https://xxx.yyy/pig.jpg", "pig.jpg");

FilterXss("<script>alert(123)</script>"); // "&lt;script&gt;alert(123)&lt;/script&gt;"

Img2Base64("https://xxx.yyy/pig.jpg", "image/jpeg"); // "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQAB..."

LoadScript("https://xxx.yyy/trample.js", "body");

ToastMsg("Hello World", 2000, "ellipsis");
```

[Type 类型工具](https://github.com/JowayYoung/trample/blob/master/src/web/type.js)

- [x] **BrowserType()**：浏览器类型(史上最全的浏览器类型判断，详情请戳[详细判断浏览器运行环境](https://juejin.im/post/5d0220a8f265da1bcc193c6c))
	- ua：用户代理(`navigator.userAgent.toLowerCase()`)
- [x] **IsElement()**：Element判断
	- data：数据

```js
BrowserType(); // { engine: "webkit", engineVs: "537.36", platform: "desktop", supporter: "chrome", supporterVs: "78.0.3904.108", system: "macos", systemVs: "10.14.6" }

IsElement(document.body); // true
```

[URL URL工具](https://github.com/JowayYoung/trample/blob/master/src/web/url.js)

- [x] **ParseUrlSearch()**：URL参数反序列化
- [x] **RemoveUrlSearch()**：URL参数删除
	- search：参数集合(`...[]`，多参数输入)
- [x] **SetUrlSearch()**：URL参数设置
	- search：参数集合(`{}`)
- [x] **StringifyUrlSearch()**：URL参数序列化
	- search：参数集合(`{}`)

```js
ParseUrlSearch(); // { name: "young", sex: "male" }

RemoveUrlSearch("name", "sex");

SetUrlSearch({ name: "tong", sex: "female" });

StringifyUrlSearch({ name: "young", sex: "male" }); // "?name=young&sex=male"
```

> Node函数工具库

[Path 路径工具](https://github.com/JowayYoung/trample/blob/master/src/node/path.js)

- [x] **AbsPath()**：绝对路径
	- path：相对路径(`""`)
	- mode: 是否运行模式(`false`，可选`true运行终端项目根目录、false项目根目录`)
- [x] **IsExistPath()**：路径存在判断
	- path：相对路径(`""`)
	- mode: 是否运行模式(`false`，可选`true运行终端项目根目录、false项目根目录`)

```js
AbsPath("../.."); // "/Users/young/Documents/trample/"

IsExistPath("../../build/utils.js"); // false
```

[Process 进程工具](https://github.com/JowayYoung/trample/blob/master/src/node/process.js)

- [x] **RunCmd()**：命令运行
	- cmd：命令行(`"node -v"`)

```js
RunCmd("npm -v"); // "6.11.3"
```

[Type 类型工具](https://github.com/JowayYoung/trample/blob/master/src/node/type.js)

- [x] **NodeType()**：Node类型

```js
NodeType(); // { nodeVs: "12.12.0", npmVs: "6.11.3" }
```

### 目录结构

```txt
trample
├─ build
│  ├─ index.js
│  └─ util.js
├─ src
│  ├─ common
│  │  ├─ date.js
│  │  ├─ function.js
│  │  ├─ index.js
│  │  ├─ number.js
│  │  ├─ regexp.js
│  │  ├─ string.js
│  │  └─ type.js
│  ├─ node
│  │  ├─ index.js
│  │  ├─ path.js
│  │  ├─ process.js
│  │  └─ type.js
│  ├─ web
│  │  ├─ cookie.js
│  │  ├─ dom.js
│  │  ├─ index.js
│  │  ├─ type.js
│  │  └─ url.js
│  ├─ common.js
│  ├─ node.js
│  └─ web.js
├─ .gitignore
├─ .npmignore
├─ license
├─ package.json
├─ readme.md
└─ yarn.lock
```

### 构建编译

后续补发，构建编译过程正在完善当中......

### 测试用例

后续补发，测试用例流程正在书写当中......

### 待做

- [ ] 补全测试用例
- [ ] 完善Node函数工具库

### 后记

`trample.js`是笔者为了节省项目开发过程中常用工具函数复制粘贴的时间，而封装的一个**Web**和**Node**通用函数工具库。设计目的是为了`减少无谓的复制粘贴动作`和`统一管理项目开发中常用的工具函数`。

由于笔者是针对个人需求而定制的工具库，所以应用范围可能没有包含上你常用的工具函数，可在[Issue](https://github.com/JowayYoung/trample/issues)上`提出你的宝贵建议`或`贴上你需要增加的工具函数`。笔者会认真阅读你的宝贵建议和整合各位同学贡献的工具函数。如果觉得`trample.js`不错，欢迎[Start](https://github.com/JowayYoung/trample)一个。

如果觉得`trample.js`对大家有用，建议[Fork](https://github.com/JowayYoung/trample)本项目到自己的	`Github`上，在原有的基础上增加自己`常用`、`易忘`和`代码量多`的工具函数，同时也可扩展原有的功能和构建方式，封装成自己熟悉的工具库，提升自己的开发能力，间接`减少晚上加班时间`和`增加上班摸鱼时间`。