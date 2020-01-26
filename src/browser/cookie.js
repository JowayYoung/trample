/** Cookie操作 **/

/**
 * @name Cookie读取
 */
function GetCookie() {
	const cookies = document.cookie;
	return cookies ? cookies.split("; ").reduce((t, v) => {
		const cookie = v.split("=");
		t[cookie[0]] = cookie[1];
		return t;
	}, {}) : {};
}

/**
 * @name Cookie删除
 * @param {string} [key=""] 键
 */
function RemoveCookie(key = "") {
	key && SetCookie(key, "", -1);
}

/**
 * @name Cookie设置
 * @param {string} [key=""] 键
 * @param {string} [val=""] 值
 * @param {number} [day=1] 过期时间(日)
 */
function SetCookie(key = "", val = "", day = 1) {
	if (!key) return;
	const date = new Date();
	date.setDate(date.getDate() + day);
	document.cookie = `${key}=${val};expires=${date}`;
}

export {
	GetCookie,
	RemoveCookie,
	SetCookie
};

export default {
	GetCookie,
	RemoveCookie,
	SetCookie
};