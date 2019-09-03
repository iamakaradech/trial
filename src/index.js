const request = require('request')
const fs = require('fs')
const path = require('path')
const jsdom = require('jsdom')
const { JSDOM } = jsdom
const parse = (url) => {
  return new Promise((resolve, reject) => {
    request(url, (error, response, body) => {
      if (error) throw new Error(error)

      const reg = RegExp(/(data\/Members\/[^\)]+)/g)
      const items = []
      const dom = new JSDOM(body)

      const memberBoxes = dom.window.document.querySelector('.boxMem').querySelectorAll('.divMemMembers')

      memberBoxes.forEach((box) => {
        let imagePath = box.querySelector('.ImgMem').getAttribute('style').trim().match(reg)

        if (!imagePath.length) {
          return
        }

        let item = {
          name: box.querySelector('.nameMem').textContent.trim(),
          imagePath: imagePath[0]
        }

        items.push(item)
      })

      resolve(items)
    })
  })
}

const saveImage = (url, destination = null) => {
  var file = fs.createWriteStream(destination)
  request.get(url).pipe(file)
}

const baseUrl = 'https://www.bnk48.com'
const basePath = path.join(__dirname, '../images')

if (!fs.existsSync(basePath)) {
  fs.mkdirSync(basePath)
}
parse(`${baseUrl}/index.php?page=members`).then((items) => {
  items.map(async (item) => {
    let extname = path.extname(item.imagePath)
    const fileName = `${item.name}${extname}`
    const destination = path.join(basePath, fileName)
    await saveImage(`${baseUrl}/${item.imagePath}`, destination)
  })
})
