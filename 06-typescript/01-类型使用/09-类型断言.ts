//document.getElementById()的返回值类型时HtmlElement，
//但是该类型只包含所有标签的公共属性，不包含a标签的href属性
//此时可以使用类型断言将类型强行指定为HtmlElement的子类型
const link = document.getElementById('a') as HTMLAnchorElement
console.log(link.href)

const img = document.getElementById('img') as HTMLImageElement
console.log(img.src)
console.log(img.alt)
