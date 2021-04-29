let hide = false;
let initTitle = false;
!(function injectCustomJs(e, t) {
    e = e || "page.js";
    var n = document.createElement("script");
    n.setAttribute("type", "text/javascript"), n.src = t ? e : chrome.extension.getURL(e), document.body.appendChild(n), n.onload = function () {
        this.parentNode.removeChild(this)
    }
}())



document.onkeydown = function (event) {
    if (event.altKey && event.key == 'x') {
        hide = !hide
        let tagNames = ['img', 'video', 'iframe']
        tagNames.forEach(tagName => {
            toggleShow(tagName)
        })
        if (!initTitle) {
            // 改变title
            document.querySelectorAll('title')[0].innerText = '乐药基础数据中心';
            //改变图标
            let linkNode = document.createElement('link');
            linkNode.rel = 'icon';
            linkNode.setAttribute('href', 'https://testdatacenter.leyopharm.com/icon.ico');
            document.querySelectorAll('head')[0].appendChild(linkNode);
            initTitle = true
        }

    }

}

function toggleShow(tagName) {
    let elements = document.querySelectorAll(tagName)
    for (let i = 0; i < elements.length; i++) {
        if (hide) {
            elements[i].style.display = 'none'
        } else {
            elements[i].style.display = ''
        }
    }
}
