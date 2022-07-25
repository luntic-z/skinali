const price = {
  0: 1273,
  1: 2634,
  2: 5124,
  3: 4346,
}

const priceTags = document.querySelectorAll('.price__price-tag')
let i = 0
price.forEach(item => {
  priceTags[i].innerHTML = `${item}`
  i++
})