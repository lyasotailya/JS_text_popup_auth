let popup = () => document.querySelector('#subscribe-modal').classList.toggle('modal_active')
let close = document.querySelector('div.modal__close')

let setCookie = (name, val) => document.cookie = encodeURIComponent(name) + '=' + encodeURIComponent(val)
let getCookie = (name) => {
    let pairs = document.cookie.split(';')
    let cook = pairs.find(p => p.startsWith(name + '='))
    return cook.substring(name.length + 1)
}

try {
    let popupOpenStatus = getCookie('popup')
    popupOpenStatus !== 'true' ? popup() : false
    //console.log(document.cookie)
} catch (e) {
    popup()
}

close.onclick = () => {
    popup()
    document.cookie = 'popup=true'
    //console.log(document.cookie)
}

