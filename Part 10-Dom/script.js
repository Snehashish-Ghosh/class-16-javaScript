//1 Query selector: Most usable method. We can select all element in html. in will be under string value. it will select 1st tag not the 2nd tag, so index will not matter but if we want to select 2nd one then we have to use index number 01234...

//example 1
const tag1 = document.querySelector("h2");
console.log(tag1);

//example 2 class selector: for select id or class by qeuryselector then we have to give a class or id in html for class ("."), have to use dot & for id we will use #
const class1 = document.querySelector(".class1");
console.log(class1);

//example 3 id selector:
const id1 = document.querySelector("#id1");
console.log(id1);

//example 4 All Query selector: it will select all & will give us a NODE list. like in below selector it will selct all h2 tag in our html. for selection sepecific then we have to use index number 01234...

const tag2 = document.querySelectorAll("h2");
console.log(tag2[0]);
console.log(tag2[0]);
console.log(tag2[0].innerText); //fior check the text
console.log(tag2[1].innerText);

//example 5; for selct specific class:
const cls = document.querySelectorAll(".class1");
console.log(cls);
console.log(cls[0]);
console.log(cls[1].innerText);

//another example of yester class
const tag3 = document.getElementsByTagName("h2");
console.log(tag3);

// 2 Child Nodes: what is under this tag & how many or details
const id2 = document.getElementById("id1");
console.log(id2);
console.log(id2.childNodes);

// example 1: to know how many childreds under the tag

const chill = document.getElementById("list-id");
console.log(chill);
console.log(chill.children);

// example 0: to add new li under this ul li through JS: Create element method
const newList = document.createElement("li"); //firest create thi li
console.log(newList);
newList.innerHTML = "List 5"; // then we push the text
console.log(newList.innerHTML);
const listid1 = document.getElementById("list-id");
listid1.appendChild(newList);

//Now we will Use append child to show this in website: Append child
const anotherList = document.createElement("li");
anotherList.innerText = "List 6";
console.log(anotherList);
const listid = document.getElementById("list-id");
console.log(listid);
listid.appendChild(anotherList);

//example 1: append child:: first ID.
const id3 = document.getElementById("div-text");
const newHeading = document.createElement("h2");
newHeading.innerText = "This is new Heading";
id3.appendChild(newHeading);

//to remove the child element: remove child
const remv = document.getElementById("new-list");
// console.log(remv);
const remvList1 = remv.children[0];
remv.removeChild(remvList1);
// console.log(remvList);
// console.log(remvList[0].innerText); //to check which one selected

//To replace again: replace child
//first we have selected which one want to replace
const rplc = document.getElementById("new-list");
const remvList3 = rplc.children[1];
// Now what we want to add
const NewInput = document.createElement("li");
NewInput.innerText = "NewInput";
//formula rplc.replaceChild (what will add, which one will replace)
rplc.replaceChild(NewInput, remvList3);

// to access a title in html through js: title
console.log(document.title);
console.log((document.title.innerText = "new title"));

// to select body
console.log(document.body);
//to hide all body text & show somethign new
// document.body.innerHTML =
//   "<h1>You have done, Please wait for confirmation</h1>";

//different between inner text & html
const another = document.getElementById("id1");
another.innerHTML = "<p>This is a Paragraph</p>";
another.innerText = "<p>This is a Paragraph</p>";
