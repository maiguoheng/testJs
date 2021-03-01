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
    if (event.altKey && event.keyCode == 88) {
        hide = !hide
        let tagNames = ['img', 'video', 'iframe']
        tagNames.forEach(tagName => {
            toggleShow(tagName)
        })
        if (!initTitle) {
            // 改变title
            document.querySelectorAll('title')[0].innerText = '促销宝';
            //改变图标
            let linkNode = document.createElement('link');
            linkNode.rel = 'icon';
            linkNode.setAttribute('href', 'https://pm.cxb123.com/v/favicon.ico');
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
