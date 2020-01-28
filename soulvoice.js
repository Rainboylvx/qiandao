// ==UserScript==
// @name              pt聆音签到
// @namespace         https://github.com/rainboylvx/qiandao
// @version           1.0.0
// @author            rainboy
// @loginURL          https://pt.soulvoice.club/
// @updateURL         https://raw.githubusercontent.com/Rainboylvx/qiandao/master/soulvoice.js
// @expire            900e3
// @domain            pt.soulvoice.club
// ==/UserScript==

exports.run = async function() {
    var { data } = await axios.get('https://pt.soulvoice.club/attendance.php');
    let message = data
    if (/签到成功/.test(message)) return '任务已完成';
    if (/重复/.test(message)) return '签过了';
    if (/登录/.test(message)) throw '未登录';
    throw '失败';
};

exports.check = async function() {
    var { status, data } = await axios.get('https://pt.soulvoice.club/attendance.php');
    let message = data
    return /签到/.test(message);
};
