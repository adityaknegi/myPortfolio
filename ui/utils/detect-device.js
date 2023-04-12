
const requestedFrom = () => {
    if (navigator.userAgent.match(/Android/i)) {
        return 'ANDROID_WEB'
    }
    if (navigator.userAgent.match(/iPhone/i)) {
        return 'IPHONE_WEB'
    }
    if (navigator.userAgent.match(/iPad/i)) {
        return 'IPAD_WEB'
    }
    if (navigator.userAgent.match(/iPod/i)) {
        return 'IPOD_WEB'
    }
    if (navigator.userAgent.match(/Windows Phone/i)) {
        return 'WINDOW_PHONE_WEB'
    }
    if (navigator.userAgent.indexOf("Win")!=-1){
        return 'WINDOW_WEB'
    }
    if (navigator.userAgent.indexOf("Mac")!=-1){
        return 'MAC_WEB'
    }
    if (navigator.userAgent.indexOf("Linux")!=-1){
        return 'LINUX_WEB'
    }
    return 'WEB'

}

export default requestedFrom;