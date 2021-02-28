var axios = require('axios')
const cheerio=require('cheerio')
const iconv=require('iconv-lite')
getHtml('https://detail.tmall.hk/hk/item.htm?tbpm=1&id=618847163210&spm=875.7931836/B.2017041.4.13d74265riqUFp&scm=1007.12144.81309.73133_0_0&pvid=239e341b-e143-46b2-9389-fb9f960a4a24&utparam=%7B%22x_hestia_source%22:%2273133%22,%22x_object_type%22:%22item%22,%22x_hestia_subsource%22:%22default%22,%22x_mt%22:8,%22x_src%22:%2273133%22,%22x_pos%22:1,%22wh_pid%22:-1,%22x_pvid%22:%22239e341b-e143-46b2-9389-fb9f960a4a24%22,%22scm%22:%221007.12144.81309.73133_0_0%22,%22x_object_id%22:618847163210,%22tpp_buckets%22:%222144#0#81309#0%22%7D').then(res=>{
    console.log(res)
})
async function getHtml(url) {

    const res = await axios({
        url: url,
        responseType: 'stream' // 以数据流的方式输出
    })

    // 返回一个promise实例对象
    return new Promise(resolve => {
        const chunks = []
        res.data.on('data', chunk => {
            chunks.push(chunk)
        })
        res.data.on('end', () => {
            const buffer = Buffer.concat(chunks)
            const str = iconv.decode(buffer, 'gbk')
            resolve(str)
        })

    })

}