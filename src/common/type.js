/** 类型工具 **/

/**
 * @name 数据类型
 * @param {*} data 数据
 * @param {*} type 类型
 */
function DataType(data, type) {
	const dataType = Object.prototype.toString.call(data).replace(/\[object (\w+)\]/, "$1").toLowerCase();
	return type ? dataType === type : dataType;
}

/**
 * @name 判断基础数据类型：undefined、null、string、number、boolean、array、object、symbol、date、regexp、function、class
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
 * @name 判断复合数据类型：set、map、weakset、weakmap
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
 * @name 判断函数类型：asyncfunction、function、arguments
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
 * @name 判断空类型：error、empty、emptyarray、emptyobject
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
 * @name 环境类型
 */
function EnvType() {
	return typeof window !== "undefined"
		? "web"
		: typeof global !== "undefined" ? "node" : "unknow";
}

/**
 * @name 判断环境
 */
function IsWeb() {
	return EnvType() === "web";
}

function IsNode() {
	return EnvType() === "node";
}

/**
 * @name 判断相等
 * @param {*} data1 数据1
 * @param {*} data2 数据2
 */
function IsEqual(data1, data2) {
	if (data1 === data2) {
		return true;
	}
	if (IsArray(data1) && IsArray(data2)) {
		if (data1.length !== data2.length) {
			return false;
		}
		return data1.map((v, i) => {
			for (let j = 0; j < data2.length; j++) {
				if (IsEqual(data1[i], data2[j])) {
					data2.splice(j, 1);
					return true;
				}
			}
			return false;
		}).every(v => v);
	} else if (data1 && data2 && IsObject(data1) && IsObject(data2)) {
		const keys1 = Object.keys(data1);
		const keys2 = Object.keys(data2);
		if (keys1.length !== keys2.length) {
			return false;
		}
		return keys1.map(key => IsEqual(data1[key], data2[key])).every(v => v);
	}
	return false;
}

/**
 * @name 比较对象
 * @param {object} obj1 对象1
 * @param {object} obj2 对象
 */
function CompareObj(obj1, obj2) {
	const result = {};
	const keys = Object.keys(obj1);
	keys.forEach(k => (result[k] = IsEqual(obj1[k], obj2[k])));
	return result;
}

export {
	CompareObj,
	DataType,
	EnvType,
	IsArguments,
	IsArray,
	IsAsyncFunction,
	IsBoolean,
	IsClass,
	IsDate,
	IsEmpty,
	IsEmptyArray,
	IsEmptyObject,
	IsEqual,
	IsError,
	IsFunction,
	IsMap,
	IsNode,
	IsNull,
	IsNumber,
	IsObject,
	IsRegExp,
	IsSet,
	IsString,
	IsSymbol,
	IsSyncFunction,
	IsUndefined,
	IsWeakMap,
	IsWeakSet,
	IsWeb
};

export default {
	DataType, // 数据类型
	EnvType, // 环境类型
	IsArguments, // 判断Arguments
	IsArray, // 判断数组
	IsAsyncFunction, // 判断异步函数
	IsBoolean, // 判断布尔值
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
	IsWeakSet, // 判断WeakSet
	IsWeb // 判断Web
};