# Trample <img src="https://img.shields.io/badge/trample-Web/Node通用工具库-f66.svg">

<img src="https://img.shields.io/badge/author-Joway%20Young-f66.svg">
<img src="https://img.shields.io/badge/version-0.0.1-f66.svg">
<img src="https://img.shields.io/badge/web-%3E%3D%2095%25-3c9.svg">
<img src="https://img.shields.io/badge/node-%3E%3D%208.0.0-3c9.svg">
<img src="https://img.shields.io/badge/size-176kb-09f.svg">
<img src="https://img.shields.io/badge/coverage-100%25-09f.svg">
<img src="https://img.shields.io/badge/test-passing-f90.svg">
<img src="https://img.shields.io/badge/build-passing-f90.svg">
<img src="https://img.shields.io/badge/platform-win--32%20%7C%20win--64%20%7C%20mac--64%20%7C%20linux--64-66f.svg">
<img src="https://img.shields.io/badge/license-MIT-66f.svg">

### 🎥背景

项目开发过程中时常会重复使用一些工具函数，例如`浏览器类型`、`时间差格式化`、`URL参数反序列化`、`XSS过滤`等，为了避免开发项目时重复复制粘贴所带来的的麻烦，我将平时常用的一些工具函数进行按功能分类的统一封装，并发布到`npm`上。每次开发项目时直接安装，提高开发效率，将时间用在正确的留长上。

### 📦安装

- `npm i trample`
- `yarn add trample`

> 安装失败

- 将npm源镜像设置为淘宝镜像：`npm config set registry https://registry.npm.taobao.org`
- 重新执行命令安装：`npm i trample` 或 `yarn add trample`

### 💻使用

`trample.js`根据**Web**和**Node**两种JS运行环境进行代码划分，生成三个`bundle`文件。每个文件在不同的JS运行环境下才能运行，必须根据JS运行环境引用文件，否则会报错。

> 区别

模块|工具库|运行环境|对应文件|描述
:-:|:-:|:-:|-|-
**Common**|公共函数工具库|浏览器和服务器|`dist/index.js`
**Web**|Web函数工具库|浏览器|`dist/web.js`|包含`公共函数工具库`
**Node**|Node函数工具库|服务器|`dist/node.js`|包含`公共函数工具库`

> 引用

`trample.js`使用`UMD`通用模块规范进行打包，因此可使用`HTML`、`AMD`、`CJS`和`ESM`四种方式引用。但是推荐使用`HTML`、`CJS`、`ESM`三中引用方式。

工具库的代码使用`ESM`的形式进行开发，导出时使用了`export default {}`的形式。所以使用`HTML引用方式`时必须使用`trample.default.xxx()`的形式，使用`CJS引用方式`时必须使用`require("trample").default`的形式。

##### HTML引用方式

最简单最方便的引用方式没有之一。把`node_modules/trample/dist/web.js`复制出来，放到新建的`js/trample`文件夹下，通过HTML的`<script>`直接引用，只适用于`Web`。

```html
<body>
    <script src="js/trample/web.js"></script>
    <script>
        trample.default.FormatDiffTime("2019-03-31");
    </script>
</body>
```

##### CJS引用方式

适用于`Web`和`Node`

```js
// Web
const _ = require("trample/web").default;
_.FormatDiffTime("2019-03-31");

// Node
const _ = require("trample/node").default;
_.FormatDiffTime("2019-03-31");
```

##### ESM引用方式

适用于`Web`和`Node`

```js
// Web
import _ from "trample/web";
_.FormatDiffTime("2019-03-31");

// Node
import _ from "trample/node";
_.FormatDiffTime("2019-03-31");
```

### 📋文档

> Common公共函数工具库

[Date 日期工具](https://github.com/JowayYoung/trample/blob/master/src/common/date.js)

- [x] **FormatCountdown()**：倒计时格式化
	- time：时间(`""`，形式为`YYYY-MM-DD HH:mm:ss`)
- [x] **FormatDiffTime()**：时间差格式化
	- time：时间(`""`，形式为`YYYY-MM-DD HH:mm:ss`)

[Function 函数工具](https://github.com/JowayYoung/trample/blob/master/src/common/function.js)

- [x] **Ajax({ ... })**：异步请求
	- data：参数(`{}`)
	- error：失败回调函数(`null`)
	- success：成功回调函数(`null`)
	- type：类型(`get`，可选`get、post`)
	- url: 地址(`""`)
- [x] **AsyncTo()**：异步返回值格式化
	- pfn：Promise函数(`Promise.resolve(true)`)
- [x] **WaitFor()**：等待
	- dura：时延(`1000`)

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

[Regexp 正则工具](https://github.com/JowayYoung/trample/blob/master/src/common/regexp.js)

- **CheckText()**：文本校验
	- type：类型(`""`，可选`address地址、count数量、date日期、email邮件、idcard身份证、image图片、name名称、number计数、password密码、phone手机`)
	- text：文本(`""`)
- **CheckTextPlus()**：自定义文本校验
	- regexp：正则(`regexp=new RegExp()`)
	- msg：提示(`""`)
	- text：文本(`""`)
- **MatchBracketText()**：括号文本匹配
	- tgt：括号形式(`"(*)"`，提取的内容必须使用`*`代替)
	- text：文本(`""`)

[String 字符串工具](https://github.com/JowayYoung/trample/blob/master/src/common/string.js)

- **RandomColor()**：随机HEX色值
- **RandomId()**：随机长度ID
	- len：长度(`5`，在`1~10`之间)
- **StartScore()**：星级评分
	- rate：星级(`0`，在`0~5`之间)
	- len：长度(`5`)

[Type 类型判断](https://github.com/JowayYoung/trample/blob/master/src/common/type.js)

- **DataType()**：数据类型
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
- **EnvType()**：环境类型
	- **IsNode()**：Node判断
	- **IsWeb()**：Web判断

> Node函数工具库

[Path 路径操作](https://github.com/JowayYoung/trample/blob/master/src/node/path.js)

- **AbsPath()**：绝对路径
	- path：相对路径(`""`)
	- mode: 是否运行模式(`false`，可选`true运行终端项目根目录、false项目根目录`)
- **IsExistPath()**：路径存在判断
	- path：相对路径(`""`)
	- mode: 是否运行模式(`false`，可选`true运行终端项目根目录、false项目根目录`)

[Process 进程操作](https://github.com/JowayYoung/trample/blob/master/src/node/process.js)

- **RunCmd()**：命令运行
	- cmd：命令行(`"node -v"`)

[Type 类型判断](https://github.com/JowayYoung/trample/blob/master/src/node/type.js)

- **NodeType()**：Node类型