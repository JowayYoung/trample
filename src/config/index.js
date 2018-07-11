const _lang = "cn"; // cn表示中文，en表示英文

function errorMsg(msgOpt) {
	const msg = {
		cn: msgOpt[0],
		en: msgOpt[1]
	};
	return new Error(msg[_lang]);
}

function warnMsg(msgOpt) {
	const msg = {
		cn: msgOpt[0],
		en: msgOpt[1]
	};
	console.warn(msg[_lang]);
}

export default {
	errorMsg,
	warnMsg
};