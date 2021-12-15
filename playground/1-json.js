const fs = require('fs')
// const book = {
//     title:'Ego is the Enemy',
//     author: 'Ryan Holiday'
// }

// const bookJSON = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJSON)

// const dateBuffer = fs.readFileSync('1-json.json')
// const dataJSON = dateBuffer.toString()
// const data = JSON.parse(dataJSON)
// console.log(data)


fs.readFileSync('1-json.json')
const dateBuffer = fs.readFileSync('1-json.json')
const dataJSON = dateBuffer.toString()
const data = JSON.parse(dataJSON)
data.name = "Ahmed",
data.age = 28
console.log(data)