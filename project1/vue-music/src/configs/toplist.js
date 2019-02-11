import jsonp from './jsonp.js'
import {
    commonParams,
    options,
} from './commparam.js'

export function getTopList() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg'
    const data = Object.assign({}, commonParams, {
        uin: 0,
        format: "json",
        outCharset: "utf-8¬ice=0",
        platform: "h5",
        needNewCode: 1,
        tpl: 3,
        page: "detail",
        type: "top",
        topid: 27,
    })
    return jsonp(url, data, options)
}
