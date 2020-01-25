import Functions from "./function";
import Numbers from "./number";
import Strings from "./string";
import Times from "./time";
import Types from "./type";

export default {
	...Functions,
	...Numbers,
	...Strings,
	...Times,
	...Types
};