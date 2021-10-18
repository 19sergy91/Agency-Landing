let position = 0
const slidesShow = 3
const slidesScroll = 1
const productsSlider = document.querySelector ('.products__slider')
const productsList = document.querySelector ('.products__list')
const arrowLeft = document.querySelector ('.arrow-left')
const arrowRight = document.querySelector ('.arrow-right')
const productsItem = document.querySelectorAll ('.products__item')
const itemCount = productsItem.length
const itemWidth = productsSlider.clientWidth / slidesShow
const movePosition = slidesScroll * itemWidth

productsItem.forEach((items) => {
    items.style.minWidth = `${itemWidth}px`
})

arrowLeft.addEventListener('click', () => {
    const itemLast = Math.abs(position) / itemWidth
    position += itemLast >= slidesScroll ? movePosition : itemLast * itemWidth

    setPosition()
    checkBtn()
})
arrowRight.addEventListener('click', () => {
    const itemLast = itemCount - (Math.abs(position) + slidesShow * itemWidth) / itemWidth
    position -= itemLast >= slidesScroll ? movePosition : itemLast * itemWidth

    setPosition()
    checkBtn()
})

const setPosition = () => {
    productsList.style.transform = `translateX(${position}px)`
}

const checkBtn = () => {
    arrowLeft.disabled = position ===0
    arrowRight.disabled = position <= -(itemCount - slidesShow) * itemWidth
}
