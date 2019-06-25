export function fileNameByUrl(url){
    const decoded = decodeURIComponent(url)
    return decoded.substring(decoded.lastIndexOf('/') + 1)
}

export function removeClass(selector, _className){
    document.querySelectorAll(selector).forEach(el => {
        el.classList.remove(_className)
    })
}