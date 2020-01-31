import _Dates from "./common/date";
import _Functions from "./common/function";
import _Numbers from "./common/number";
import _Regexps from "./common/regexp";
import _Strings from "./common/string";
import _Types from "./common/type";
import Cookies from "./web/cookie";
import Doms from "./web/dom";
import Types from "./web/type";
import Urls from "./web/url";

export default {
	..._Dates,
	..._Functions,
	..._Numbers,
	..._Regexps,
	..._Strings,
	..._Types,
	...Cookies,
	...Doms,
	...Types,
	...Urls
};