/** 数据类型 **/

// 返回数据类型
function getType(tgt) {
	const type = Object.prototype.toString.call(tgt);
	return type.replace(/\[object /g, "").replace(/\]/g, "").toLowerCase();
}

// 判断基础数据类型
function isUndefined(tgt) {
	return getType(tgt) === "undefined";
}

function isNull(tgt) {
	return getType(tgt) === "null";
}

function isString(tgt) {
	return getType(tgt) === "string";
}

function isNumber(tgt) {
	return getType(tgt) === "number";
}

function isBoolean(tgt) {
	return getType(tgt) === "boolean";
}

function isArray(tgt) {
	return getType(tgt) === "array";
}

function isObject(tgt) {
	return getType(tgt) === "object";
}

function isSymbol(tgt) {
	return getType(tgt) === "symbol";
}

function isDate(tgt) {
	return getType(tgt) === "date";
}

function isRegExp(tgt) {
	return getType(tgt) === "regexp";
}

function isFunction(tgt) {
	return getType(tgt) === "function";
}

function isClass(tgt) {
	const classRegexp = /^class\s|^function\s+[A-Z]/;
	return getType(tgt) === "function" && classRegexp.test(tgt.toString());
}

// 判断复合数据类型
function isSet(tgt) {
	return getType(tgt) === "set";
}

function isMap(tgt) {
	return getType(tgt) === "map";
}

function isWeakSet(tgt) {
	return getType(tgt) === "weakset";
}

function isWeakMap(tgt) {
	return getType(tgt) === "weakmap";
}

function isElement(tgt) {
	return typeof HTMLElement === "object"
		? tgt instanceof HTMLElement
		: tgt ? typeof tgt === "object" && tgt.nodeType === 1 && typeof tgt.nodeName === "string" : false;
}

// 判断函数类型
function isAsyncFunction(tgt) {
	return getType(tgt) === "asyncfunction";
}

function isSyncFunction(tgt) {
	return getType(tgt) === "function";
}

function isArguments(tgt) {
	return getType(tgt) === "arguments";
}

// 判断空类型
function isError(tgt) {
	return tgt instanceof Error;
}

function isEmpty(tgt) {
	return !tgt; // undefined null "" 0 false
}

function isEmptyArray(tgt) {
	return Array.isArray(tgt) && !tgt.length;
}

function isEmptyObject(tgt) {
	return isObject(tgt) && !Object.keys(tgt).length;
}

export default {
	getType, // 返回数据类型
	isArguments, // 判断数据是否为Arguments对象
	isArray, // 判断数据是否为数组
	isAsyncFunction, // 判断数据是否为异步函数
	isBoolean, // 判断数据是否为布尔值
	isClass, // 判断数据是否为类
	isDate, // 判断数据是否为日期
	isElement, // 判断数据是否为Element对象
	isEmpty, // 判断数据是否为空
	isEmptyArray, // 判断数据是否为空数组
	isEmptyObject, // 判断数据是否为空对象
	isError, // 判断数据是否为错误
	isFunction, // 判断数据是否为函数
	isMap, // 判断数据是否为Map
	isNull, // 判断数据是否为空值
	isNumber, // 判断数据是否为数值
	isObject, // 判断数据是否为对象
	isRegExp, // 判断数据是否为正则表达式
	isSet, // 判断数据是否为Set
	isString, // 判断数据是否为字符串
	isSymbol, // 判断数据是否为Symbol
	isSyncFunction, // 判断数据是否为同步函数
	isUndefined, // 判断数据是否为未定义
	isWeakMap, // 判断数据是否为WeakMap
	isWeakSet // 判断数据是否为WeakSet
};