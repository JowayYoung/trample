import Dates from "./common/date";
import Functions from "./common/function";
import Numbers from "./common/number";
import Regexps from "./common/regexp";
import Strings from "./common/string";
import Types from "./common/type";

export default {
	...Dates,
	...Functions,
	...Numbers,
	...Regexps,
	...Strings,
	...Types
};