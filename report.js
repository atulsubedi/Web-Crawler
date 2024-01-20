function printReport(pages){
    console.log('The report is shown below')
    const sP = sortPages(pages)
    for (const p of sP){
        const url = p[0]
        const count = p[1]
        console.log(`The link ${url} have appeared ${count} times`)
        console.log('=============================================================')
    }


}

function sortPages(pages){
    const pagesArr = Object.entries(pages)
    pagesArr.sort((pageA, pageB) => {
        return pageB[1] - pageA[1]
    })
    return pagesArr
}

module.exports ={
    printReport,
    sortPages
}