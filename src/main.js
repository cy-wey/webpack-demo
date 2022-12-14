import css from "./style.styl"
import jpg from "./assets/1.jpg"

console.log(jpg);
const div = document.getElementById('app')
div.innerHTML = `<img src=${jpg}>`
console.log("webpack")

const button = document.createElement('button')
button.innerHTML = '懒加载'
button.onclick = () => {
    const promise = import('./lazy')
    promise.then((module) => {
        const fn = module.default
        fn()
    }, () => {
        console.log('模块加载错误');
    })
}
div.appendChild(button)
