// 检测数据类型
function isUndefined(obj) {
	return Object.prototype.toString.call(obj) === "[object Undefined]";
}

function isNull(obj) {
	return Object.prototype.toString.call(obj) === "[object Null]";
}

function isString(obj) {
	return Object.prototype.toString.call(obj) === "[object String]";
}

function isNumber(obj) {
	return Object.prototype.toString.call(obj) === "[object Number]";
}

function isBoolean(obj) {
	return Object.prototype.toString.call(obj) === "[object Boolean]";
}

function isArray(obj) {
	return Object.prototype.toString.call(obj) === "[object Array]";
}

function isObject(obj) {
	return Object.prototype.toString.call(obj) === "[object Object]";
}

function isFunction(obj) {
	return Object.prototype.toString.call(obj) === "[object Function]";
}

function isWindow(obj) {
	return obj && obj === obj.window;
}

function isDocument(obj) {
	return obj && obj.nodeType === obj.DOCUMENT_NODE;
}

function isProcess(obj) {
	return obj && obj === obj.process;
}

function isEmptyObject(obj) {
	if (!isObject(obj)) return false;
	for (let name in obj) return false;
	return true;
}

function isElement(obj) {
	return typeof HTMLElement === "object"
		? obj instanceof HTMLElement
		: obj && typeof obj === "object" && obj.nodeType === 1 && typeof obj.nodeName === "string";
}

export default {
	isArray, // 判断数据是否为数组
	isBoolean, // 判断数据是否为布尔
	isDocument, // 判断数据是否为Document对象
	isElement, // 判断数据是否为Element对象
	isEmptyObject, // 判断数据是否为空对象
	isFunction, // 判断数据是否为函数
	isNull, // 判断数据是否为空
	isNumber, // 判断数据是否为数字
	isObject, // 判断数据是否为对象
	isProcess, // 判断数据是否为Process对象
	isString, // 判断数据是否为字符串
	isUndefined, // 判断数据是否为未定义
	isWindow // 判断数据是否为Window对象
};