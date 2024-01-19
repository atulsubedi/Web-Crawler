//  function normalizeURL(url){
//      const urlObj = new URL(url)
//      let fullPath = `${urlObj.hostname}${urlObj.pathname}`
//     if (fullPath.length > 0 && fullPath.slice(-1) === '/'){
//         fullPath = fullPath.slice(0,-1)
//     }
//     return fullPath
// }
// // using jsdom

 const jsdom = require("jsdom");
  const { JSDOM } = jsdom;
function getURLSFromHTML(htmlBody, baseURL){
    let dom = new JSDOM(htmlBody);
    let link = dom.window.document.querySelectorAll('a');
    result = [];
    for (let i = 0; i < link.length; i++){
        if(link[i].href.slice(0,1) === '/'){
            result.push(baseURL + link[i].href)
            break
        }
        result.push(link[i].href.slice(0, -1))
    }
    return result
}

 module.exports = {
//     normalizeURL,
     getURLSFromHTML
}

// testing 
// const dom = new JSDOM(`<!DOCTYPE html><p>/Hello world</p><br/><p>hey </p>`);
// const url = new URL('https://atulsubedi.com.np')
// let fullPath = `${url.hostname}`
// let texts = (dom.window.document.querySelectorAll("p")); // "Hello world"
// result = [];
// for (let i = 0; i < texts.length; i++){
//     if (texts[i].textContent.slice(0,1) === '/'){
//         result.push(fullPath + texts[i].textContent)
//     }
//     result.push(texts[i].textContent)
// }
// console.log(result)
