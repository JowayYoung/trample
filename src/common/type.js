/** 数据类型 **/

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
 * 判断复合数据类型：set、map、weakset、weakmap、element
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

function IsElement(data) {
	return typeof HTMLElement === "object"
		? data instanceof HTMLElement
		: data ? typeof data === "object" && data.nodeType === 1 && typeof data.nodeName === "string" : false;
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

export default {
	DataType, // 数据类型
	IsArguments, // 判断数据是否为Arguments对象
	IsArray, // 判断数据是否为数组
	IsAsyncFunction, // 判断数据是否为异步函数
	IsBoolean, // 判断数据是否为布尔值
	IsClass, // 判断数据是否为类
	IsDate, // 判断数据是否为日期
	IsElement, // 判断数据是否为Element对象
	IsEmpty, // 判断数据是否为空
	IsEmptyArray, // 判断数据是否为空数组
	IsEmptyObject, // 判断数据是否为空对象
	IsError, // 判断数据是否为错误
	IsFunction, // 判断数据是否为函数
	IsMap, // 判断数据是否为Map
	IsNull, // 判断数据是否为空值
	IsNumber, // 判断数据是否为数值
	IsObject, // 判断数据是否为对象
	IsRegExp, // 判断数据是否为正则表达式
	IsSet, // 判断数据是否为Set
	IsString, // 判断数据是否为字符串
	IsSymbol, // 判断数据是否为Symbol
	IsSyncFunction, // 判断数据是否为同步函数
	IsUndefined, // 判断数据是否为未定义
	IsWeakMap, // 判断数据是否为WeakMap
	IsWeakSet // 判断数据是否为WeakSet
};