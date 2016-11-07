var _ua = navigator.userAgent.toLowerCase();
window._iswx = _ua.indexOf('micromessenger') != -1;
window._PFM_TIMING = [
    [_iswx ? 12 : 13, new Date()]
];
window.$id = function(id) {
    return document.getElementById(id) || document.createElement('span');
};
window.getCookie = function(name) {
    var reg = new RegExp("(^| )" + name + "(?:=([^;]*))?(;|$)"),
        val = document.cookie.match(reg);
    return val ? (val[2] ? unescape(val[2]) : "") : '';
};


/*
 */
window.$jsonToTpl = function(json, tpl) { //js代码中需要用到
    var outStr = '';
    try {
        outStr = (tpl || '').replace(/{#(\w+)#}/g, function(a, b) {
            return json[b] === 0 ? '0' : (json[b] || "");
        });
    } catch (e) {}
    return outStr;
};

/**

*/
window.getUrlParam = function(name, url) {
    var u = arguments[1] || window.location.search,
        reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", 'i'),
        r = u.substr(u.indexOf("\?") + 1).match(reg);
    return r != null ? r[2] : "";
};


/*
examples
*/
window._skuTpl = '<div class="sku" id="sku{#no#}" ptag="7001.1.5"><h3>{#name#}</h3><div class="sku_list">{#option#}</div></div>';

var outHtml = $jsonToTpl({
    no: noNum,
    name: name,
    option: '<span class="option" no="' + noNum + '">' + arr1.join('</span><span class="option" no="' + noNum + '">') + '</span>'
}, _skuTpl);





/*

*/
