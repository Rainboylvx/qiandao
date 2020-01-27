// ==UserScript==
// @name              luogu打卡
// @namespace         https://github.com/rainboylvx/soulsign-chrome
// @version           1.0.0
// @author            rainboy
// @loginURL          https://www.luogu.com.cn
// @updateURL         https://raw.githubusercontent.com/Rainboylvx/qiandao/master/luogu.js
// @expire            900e3
// @domain            www.luogu.com.cn
// ==/UserScript==

exports.run = async function() {
    var { data } = await axios.get('https://www.luogu.com.cn/index/ajax_punch');
    var message = JSON.stringify(data)
    if (/html/.test(message)) return '任务已完成';
    if (/已经打过卡/.test(message)) return '签过了';
    if (/登录/.test(message)) throw '未登录';
    throw '失败';
};

exports.check = async function() {
    var { status, data } = await axios.get('https://www.luogu.com.cn/index/ajax_punch');
    var message = JSON.stringify(data)
    return /message/.test(message);
};
