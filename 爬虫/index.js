const axios = require("axios")
require( './index.css')
// axios.defaults.headers.host = 'zhihu.com'
// axios.interceptors.request.use(function (config) {
//     return config;
// }, function (error) {
//     return Promise.reject(error);
// });
console.log('你好啊！')

getHtmlGBK('https://vatti.tmall.com/?spm=875.7931836/B.2017039.6.1162426593MwPC&pos=1&turing_bucket=4&acm=&scm=1049.lyg_turing_-1_69.162446.162446-THJH_274640&lygClk=1&impid=e0PkdDraQLY').then(html => {
    console.log(html)
})

//获取GBK编码的网站源码
function getHtmlGBK(url) {
    return new Promise((resolve, reject) => {
        axios({ url, responseType: 'stream' }).then(res => {
            let chunks = []
            res.data.on('data', chunk => {
                chunks.push(chunk)
            })
            res.data.on('end', () => {
                const buffer = Buffer.concat(chunks)
                const str = iconv.decode(buffer, 'gbk')
                resolve(str)
            })
        })
    })
}


