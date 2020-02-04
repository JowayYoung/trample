import _Dates from "./common/date";
import _Functions from "./common/function";
import _Numbers from "./common/number";
import _Regexps from "./common/regexp";
import _Strings from "./common/string";
import _Types from "./common/type";
import Fses from "./node/fs";
import Processes from "./node/process";
import Types from "./node/type";

export default {
	..._Dates,
	..._Functions,
	..._Numbers,
	..._Regexps,
	..._Strings,
	..._Types,
	...Fses,
	...Processes,
	...Types
};