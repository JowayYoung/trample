import Dates, {
	FormatCountdown,
	FormatDiffTime
} from "./date";
import Functions, {
	Ajax,
	AsyncTo,
	WaitFor
} from "./function";
import Numbers, {
	FillNum,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	ThousandNum
} from "./number";
import Regexps, {
	CheckText,
	CheckTextPlus,
	MatchBracketText
} from "./regexp";
import Strings, {
	RandomColor,
	RandomId,
	StartScore
} from "./string";
import Types, {
	DataType,
	EnvType,
	IsArguments,
	IsArray,
	IsAsyncFunction,
	IsBoolean,
	IsClass,
	IsDate,
	IsEmpty,
	IsEmptyArray,
	IsEmptyObject,
	IsError,
	IsFunction,
	IsMap,
	IsNode,
	IsNull,
	IsNumber,
	IsObject,
	IsRegExp,
	IsSet,
	IsString,
	IsSymbol,
	IsSyncFunction,
	IsUndefined,
	IsWeakMap,
	IsWeakSet,
	IsWeb
} from "./type";

export {
	Ajax,
	AsyncTo,
	CheckText,
	CheckTextPlus,
	DataType,
	EnvType,
	FillNum,
	FormatCountdown,
	FormatDiffTime,
	IsArguments,
	IsArray,
	IsAsyncFunction,
	IsBoolean,
	IsClass,
	IsDate,
	IsEmpty,
	IsEmptyArray,
	IsEmptyObject,
	IsError,
	IsFunction,
	IsMap,
	IsNode,
	IsNull,
	IsNumber,
	IsObject,
	IsRegExp,
	IsSet,
	IsString,
	IsSymbol,
	IsSyncFunction,
	IsUndefined,
	IsWeakMap,
	IsWeakSet,
	IsWeb,
	MatchBracketText,
	RandomColor,
	RandomId,
	RandomNum,
	RandomNumPlus,
	RoundNum,
	StartScore,
	ThousandNum,
	WaitFor
};

export default {
	...Dates,
	...Functions,
	...Numbers,
	...Regexps,
	...Strings,
	...Types
};