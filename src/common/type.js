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
 * 基础数据类型判断：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、class
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
 * 复合数据类型判断：set、map、weakset、weakmap
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
 * 函数类型判断：asyncfunction、function、arguments
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
 * 空类型判断：error、empty、emptyarray、emptyobject
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
 * 环境判断
 */
function IsBrowser() {
	return EnvType() === "browser";
}

function IsNode() {
	return EnvType() === "node";
}

export default {
	DataType, // 数据类型
	EnvType, // 环境类型
	IsArguments, // Arguments判断
	IsArray, // 数组判断
	IsAsyncFunction, // 异步函数判断
	IsBoolean, // 布尔值判断
	IsBrowser, // Browser判断
	IsClass, // 类判断
	IsDate, // 日期判断
	IsEmpty, // 空判断
	IsEmptyArray, // 空数组判断
	IsEmptyObject, // 空对象判断
	IsError, // 错误判断
	IsFunction, // 函数判断
	IsMap, // Map判断
	IsNode, // Node判断
	IsNull, // 空值判断
	IsNumber, // 数值判断
	IsObject, // 对象判断
	IsRegExp, // 正则判断
	IsSet, // Set判断
	IsString, // 字符串判断
	IsSymbol, // Symbol判断
	IsSyncFunction, // 同步函数判断
	IsUndefined, // 未定义判断
	IsWeakMap, // WeakMap判断
	IsWeakSet // WeakSet判断
};