async function crawlPage(crawlUrl){
    console.log(`crawling ${crawlUrl}....`)
    try{
        const resp = await fetch(crawlUrl)
        if (resp.status > 399){
            console.log(`Got HTTP error, status code:${resp.status}`)
            return
        }
        const contentType = resp.headers.get('content-type')
        if (!contentType.includes('text/html')){
            console.log(`Gon non-html respones: ${contentType}`)
            return
        }
        console.log(await resp.text())
    }catch (err){
        console.log(err.message)
    }
} 



 function normalizeURL(url){
     const urlObj = new URL(url)
     let fullPath = `${urlObj.hostname}${urlObj.pathname}`
    if (fullPath.length > 0 && fullPath.slice(-1) === '/'){
        fullPath = fullPath.slice(0,-1)
    }
    return fullPath
}
// // using jsdom
const { JSDOM } = require('jsdom')
function getURLsFromHTML(htmlBody, baseURL){
  const urls = []
  const dom = new JSDOM(htmlBody)
  const aElements = dom.window.document.querySelectorAll('a')
  for (const aElement of aElements){
    if (aElement.href.slice(0,1) === '/'){
      try {
        urls.push(new URL(aElement.href, baseURL).href)
      } catch (err){
        console.log(`${err.message}: ${aElement.href}`)
      }
    } else {
      try {
        urls.push(new URL(aElement.href).href)
      } catch (err){
        console.log(`${err.message}: ${aElement.href}`)
      }
    }
  }
  return urls
}


 module.exports = {
     normalizeURL,
     getURLsFromHTML,
     crawlPage
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
