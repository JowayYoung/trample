# Bruce Cli <img src="https://img.shields.io/badge/trample-Web/Node通用工具库-f66.svg">

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

本项目根据**Web**和**Node**两种JS运行环境进行代码划分，生成三个`bundle`文件。每个文件在不同的JS运行环境下才能运行，必须根据JS运行环境引入文件，否则会报错。

- **Common**：公共函数工具库，`Web`和`Node`运行环境下都能使用，对应文件是`dist/index.js` (浏览器和服务器)
- **Web**：Web函数工具库，只能在`Web`运行环境下使用，对应文件是`dist/web.js` (浏览器)
- **Node**：Node函数工具库，只能在`Node`运行环境下使用，对应文件是`dist/node.js` (服务器)