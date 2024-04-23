//获取url中的参数?
function getUrlParam(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	var r = window.location.search.substr(1).match(reg);
	// if (r != null) return unescape(r[2]); return null;
	if (r != null) return decodeURI(r[2]);
	return null;
}
function getQueryString(name) {
	var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	if (window.location.hash.indexOf("?") < 0) {
		return null;
	}
	var r = window.location.hash.split("?")[1].match(reg);
	if (r != null) return decodeURI(r[2]);
	return null;
}