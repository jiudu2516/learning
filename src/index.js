import { sum } from "./js/math";
import git from './assets/imgs/git.png'
import  './assets/css/my.css'

const image = new Image()
image.src = git
document.body.appendChild(image)

console.log('Hello Webpack!', sum(2, 3))
document.getElementById('root').innerHTML = '<h1>Hello4444</h1>'