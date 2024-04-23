// document.body.innerHTML = "hello world"
// do not use .write to do this
// .innerHTML allows you to actually write HTML... you can actually add HTML code ex. <div>Hello</div>

document.getElementById("test").style.color="red";
document.getElementsByClassName("box").innerHTML = "Hello";

// Can also store repetitive stuff into a variable to reference later:
// const idText = document.getElementById("test")
// idText.innerHTML = "ehllo"

// Shows that the getElements creates an HTML collection (similar to an array)
// console.log(document.getElementsByClassName("box"))

// Puts this into an array
const boxes = Array.from(document.getElementsByClassName("box"))

// Goes through each element and add in information
const data = [{name:"ted", color: black}, {name:"elliot", color: blue}]

boxes.forEach((i, idx)=>{
    i.computedStyleMap.color
    i.innerHTML=data[idx]
})

// creating a variable that creates an element, p tag
const ele = document.createElement("p");
ele.innerHTML="hi, im a paragraph";
ele.style.color="blue";



data.forEach((i)=>{
    const ele = document.createElement("p");
    const nameEle = document.createElement('h1');
    nameEle.innerHTML=i.name;
    ele.style.color=i.color;
})

// Adds the element to the HTML doc
document.body.appendChild(ele);
