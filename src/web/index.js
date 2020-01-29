import Cookies, {
	GetCookie,
	RemoveCookie,
	SetCookie
} from "./cookie";
import Doms, {
	AutoResponse,
	CopyPaste,
	DownloadFile,
	FilterXss,
	Img2Base64,
	LoadScript,
	ToastMsg
} from "./dom";
import Types, {
	BrowserType,
	IsElement
} from "./type";
import Urls, {
	ParseUrlSearch,
	RemoveUrlSearch,
	SetUrlSearch,
	StringifyUrlSearch
} from "./url";

export {
	AutoResponse,
	BrowserType,
	CopyPaste,
	DownloadFile,
	FilterXss,
	GetCookie,
	Img2Base64,
	IsElement,
	LoadScript,
	ParseUrlSearch,
	RemoveCookie,
	RemoveUrlSearch,
	SetCookie,
	SetUrlSearch,
	StringifyUrlSearch,
	ToastMsg
};

export default {
	...Cookies,
	...Doms,
	...Types,
	...Urls
};