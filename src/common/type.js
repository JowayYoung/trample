/** 类型判断 **/

/**
 * 数据类型
 * @param {*} data 数据
 * @param {*} type 类型
 */
function DataType(data, type) {
	const dataType = Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, "$1").toLowerCase();
	return type ? dataType === type : dataType;
}

/**
 * 判断基础数据类型：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、class
 * @param {*} data 数据
 */
function IsUndefined(data) {
	return DataType(data, "undefined");
}

function IsNull(data) {
	return DataType(data, "null");
}

function IsString(data) {
	return DataType(data, "string");
}

function IsNumber(data) {
	return DataType(data, "number");
}

function IsBoolean(data) {
	return DataType(data, "boolean");
}

function IsArray(data) {
	return DataType(data, "array");
}

function IsObject(data) {
	return DataType(data, "object");
}

function IsSymbol(data) {
	return DataType(data, "symbol");
}

function IsDate(data) {
	return DataType(data, "date");
}

function IsRegExp(data) {
	return DataType(data, "regexp");
}

function IsFunction(data) {
	return DataType(data, "function");
}

function IsClass(data) {
	const classRegexp = /^class\s|^function\s+[A-Z]/;
	return DataType(data, "function") && classRegexp.test(data.toString());
}

/**
 * 判断复合数据类型：set、map、weakset、weakmap
 * @param {*} data 数据
 */
function IsSet(data) {
	return DataType(data, "set");
}

function IsMap(data) {
	return DataType(data, "map");
}

function IsWeakSet(data) {
	return DataType(data, "weakset");
}

function IsWeakMap(data) {
	return DataType(data, "weakmap");
}

/**
 * 判断函数类型：asyncfunction、function、arguments
 * @param {*} data 数据
 */
function IsAsyncFunction(data) {
	return DataType(data, "asyncfunction");
}

function IsSyncFunction(data) {
	return DataType(data, "function");
}

function IsArguments(data) {
	return DataType(data, "arguments");
}

/**
 * 判断空类型：error、empty、emptyarray、emptyobject
 * @param {*} data 数据
 */
function IsError(data) {
	return data instanceof Error;
}

function IsEmpty(data) {
	return !data; // undefined null "" 0 false NaN
}

function IsEmptyArray(data) {
	return Array.isArray(data) && !data.length;
}

function IsEmptyObject(data) {
	return IsObject(data) && !Object.keys(data).length;
}

/**
 * 环境类型
 */
function EnvType() {
	return typeof window !== "undefined"
		? "browser"
		: typeof global !== "undefined"
			? "node"
			: "unknow";
}

/**
 * 判断环境是否为Browser
 */
function IsBrowser() {
	return EnvType() === "browser";
}

/**
 * 判断环境是否为Node
 */
function IsNode() {
	return EnvType() === "node";
}

export default {
	DataType, // 数据类型
	EnvType, // 环境类型
	IsArguments, // 判断Arguments对象
	IsArray, // 判断数组
	IsAsyncFunction, // 判断异步函数
	IsBoolean, // 判断布尔值
	IsBrowser, // 判断Browser
	IsClass, // 判断类
	IsDate, // 判断日期
	IsEmpty, // 判断空
	IsEmptyArray, // 判断空数组
	IsEmptyObject, // 判断空对象
	IsError, // 判断错误
	IsFunction, // 判断函数
	IsMap, // 判断Map
	IsNode, // 判断Node
	IsNull, // 判断空值
	IsNumber, // 判断数值
	IsObject, // 判断对象
	IsRegExp, // 判断正则
	IsSet, // 判断Set
	IsString, // 判断字符串
	IsSymbol, // 判断Symbol
	IsSyncFunction, // 判断同步函数
	IsUndefined, // 判断未定义
	IsWeakMap, // 判断WeakMap
	IsWeakSet // 判断WeakSet
};