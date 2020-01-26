import Dates from "./date";
import Functions from "./function";
import Numbers from "./number";
import Regexps from "./regexp";
import Strings from "./string";
import Types from "./type";

export default {
	...Dates,
	...Functions,
	...Numbers,
	...Regexps,
	...Strings,
	...Types
};