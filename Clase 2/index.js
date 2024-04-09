import { pinturas} from "./data/data.js";

console.log(pinturas)

const items=document.getElementById('items')

const templateCard= document.getElementById ('template-card').content

const fragment =document.createDocumentFragment()

const LoadData = pinturas => {
 pinturas.forEach(data => { 

    const{ id,name,Image } = data
    templateCard.querySelector('h5').textContent = name
    templateCard.querySelector('img').setAttribute('src',Image)
    const clone = templateCard.cloneNode(true)
    fragment.appendChild(clone)
});
items.appendChild(fragment)
}

document.addEventListener('DOMContentLoaded',()=> {
    LoadData(pinturas)
})