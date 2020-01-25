import Functions from "./function";
import Numbers from "./number";
import Regexps from "./regexp";
import Strings from "./string";
import Times from "./time";
import Types from "./type";

export default {
	...Functions,
	...Numbers,
	...Regexps,
	...Strings,
	...Times,
	...Types
};