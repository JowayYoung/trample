import Config from "../config";

function asyncTo(func) {
	if (!func || !Promise.prototype.isPrototypeOf(func)) {
		return new Promise((resolve, reject) => {
			reject(Config.errorMsg(
				"参数func只能为Promise函数且不能为空",
				"The func can only be promise function and cannot be empty"
			));
		}).catch(err => [err, null]);
	}
	return func
		.then(function() { return [null, ...arguments]; })
		.catch(err => [err, null]);
}

export default {
	asyncTo
};