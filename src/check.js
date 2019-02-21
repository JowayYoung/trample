// 检测数据类型
function isUndefined(tgt) {
	return Object.prototype.toString.call(tgt) === "[object Undefined]";
}

function isNull(tgt) {
	return Object.prototype.toString.call(tgt) === "[object Null]";
}

function isString(tgt) {
	return Object.prototype.toString.call(tgt) === "[object String]";
}

function isNumber(tgt) {
	return Object.prototype.toString.call(tgt) === "[object Number]";
}

function isBoolean(tgt) {
	return Object.prototype.toString.call(tgt) === "[object Boolean]";
}

function isArray(tgt) {
	return Object.prototype.toString.call(tgt) === "[object Array]";
}

function isObject(tgt) {
	return Object.prototype.toString.call(tgt) === "[object Object]";
}

function isFunction(tgt) {
	return Object.prototype.toString.call(tgt) === "[object Function]";
}

function isElement(tgt) {
	return typeof HTMLElement === "object"
		? tgt instanceof HTMLElement
		: tgt
			? typeof tgt === "object" && tgt.nodeType === 1 && typeof tgt.nodeName === "string"
			: false;
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
	isArray, // 判断数据是否为数组
	isBoolean, // 判断数据是否为布尔
	isElement, // 判断数据是否为Element对象
	isEmpty, // 判断数据是否为空
	isEmptyArray, // 判断数据是否为空数组
	isEmptyObject, // 判断数据是否为空对象
	isFunction, // 判断数据是否为函数
	isNull, // 判断数据是否为空
	isNumber, // 判断数据是否为数字
	isObject, // 判断数据是否为对象
	isString, // 判断数据是否为字符串
	isUndefined // 判断数据是否为未定义
};