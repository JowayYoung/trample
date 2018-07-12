import Path from "path";

function absPath(path) {
	return Path.join(__dirname, "..", path);
}

export default {
	absPath
};