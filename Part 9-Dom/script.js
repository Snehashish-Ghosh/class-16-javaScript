//**DOM: Document Object Model
//1: getElementById Method: We can select anything in html by this id method. to select id
document.getElementById("id1");
console.log(document.getElementById("id1"));
//Another way & usable
const id1 = document.getElementById("id1");
console.log(id1);

//a: innerhtml: to select only written text(content)
id1.innerHTML;
console.log(id1.innerHTML);

//b:(to change content through js) id1.innerHTML = "";
id1.innerHTML = "Change the Content";
//Another way to write
document.getElementById("id1").innerHTML = "Again we can change the content";

//2: To select with tag: getElementByTagName
const tag1 = document.getElementsByTagName("h3")[1];
console.log(tag1); //to select content
console.log(tag1.innerHTML); //to see contect
tag1.innerHTML = "We have changed My Link 2 "; //To change text & another way is in below
tag1.innerText = "We have changed My Link 2 ";

//3: Class Selector: getElementByClassName

// const class1 = document.getElementsByClassName("class1");
// console.log(class1); //to select tag
const class1 = document.getElementsByClassName("class1")[0];
console.log(class1.innerText); //to select text
class1.innerText = "Changed Class selector text"; //to change selector text

//4: Dom Element Style: for changing color & design
const design = document.getElementById("id1");
console.log(design);
console.log(design.innerText);
design.style.color = "Pink";
design.style.backgroundColor = "DarkGreen";
design.style.fontSize = "40px";

//5 Dom Element Attributes: to know all attributes of a Element :NamedNodeMap

const attri = document.getElementById("id4");

attri.attributes;
console.log(attri.attributes);
console.log(attri.attributes.length);

// 6 : Get attribute: to select one attributes
attri.getAttribute("class");
console.log(attri.getAttribute("class"));
console.log(attri.getAttribute("id"));

//7 : Remove attribute
attri.removeAttribute("class");

//7 : Add attribute
const id5 = document.getElementById("id5");
console.log("id5");

id5.setAttribute("class", "class2");
