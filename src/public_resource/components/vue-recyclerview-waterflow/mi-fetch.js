/* eslint-disable*/
const baseData = [
    {
        "id": "0",
        "img_url": "https://hilongjw.github.io/vue-recyclerview/static/images/image0.jpg",
        "tag_img": ""
    }
]

let id = 0
let picIndex = 0
function pickeOne () {
    // return baseData[Math.floor(Math.random() * baseData.length)]
    const baseImage = [
    0,10,13,14,15,17,18,19,2,20,21,22,23,24,26,28,3,30,33,34,36,40,41,45,47,
    49,5,50,54,55,58,62,65,67,68,69,73,74,76,8,9
    ]
    // let pic_num = baseImage[Math.floor(Math.random() * baseImage.length)];
    let pic_num = baseImage[picIndex];
    if(++picIndex > baseImage.length - 1)
        picIndex = 0;
    return {
        "id":`${pic_num}`,
        "img_url": `https://hilongjw.github.io/vue-recyclerview/static/images/image${pic_num}.jpg`,
        "tag_img": ""
    }
}

function getItem () {
  return new Promise(resolve => {
    var item = pickeOne()
    item.id = ++id
    var image = new Image()
    image.src = item.img_url
    image.addEventListener('load', () => {
      resolve(item)
    })
    image.addEventListener('error', () => {
      item.img_url = ''
      resolve(item)
    })
  })
}

function query (limit, skip) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      var items = []
      for (var i = 0; i < limit; i++) {
        items[i] = getItem()
      }
      resolve(Promise.all(items))
    }, 200)
  })
}

export default function fetch (limit, skip) {
  limit = Math.max(30, limit)
  return query(limit, skip)
  .then(list => {
    return {
      list: list,
      count: 1000
    }
  })
}