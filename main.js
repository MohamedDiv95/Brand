// document.getElementById("logo").style.color = "red";


// let tit = "Elzero"
// let des = "Elzero webschool"
// let da = "25-10"


// let markup = `<div>
// <h3> hello ${tit}</h3>
// <p>${des}</p>
// <span>${da}</span>
// </div>
// `

// document.write(markup)

// let a = 10;
// let b = "20";
// let c = 80;

// // 11+20+80-11

// console.log(++a + +b++ + +c++ - +a++);



// let a = 1_00;
// let b = 2_00.5;
// let c = 1e6;
// let d = 2.4;


// console.log(Math.round(Math.min(a, b, c, d)))
// console.log(a ** Math.round(d));

// console.log(Math.round(d));
// console.log(Math.trunc(d));
// console.log(Math.floor(d));
// console.log(parseInt(d));


// console.log((parseInt(b) / Math.ceil(d)).toFixed(2))
// console.log(Math.round(b) / Math.ceil(d))

// let a = "mohamed"


// console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));
// console.log(a.charAt(13).toUpperCase().repeat(8));
// console.log(a.slice(0, 7).split());
// console.log(a.substr(0, 6) + a.substr(10, 17))

// console.log(a.charAt(0).toLowerCase() + a.substring(1, a.length - 1).toUpperCase() + a.charAt(a.length - 1).toLowerCase(

// let a = 10;

// a < 10 ? console.log(10) : a >= 10 && a <= 40 ? console.log("10 To 40") : a > 40 ? console.log("> 40") : console.log("unknown");

// let st = "Elzero Web School"

// if (st.slice(0, 6).repeat(2) === "ElzeroElzero") {
//     console.log("Good");
// }

// console.log(st.slice(0, 6));

// let job = "Developer";
// let salary = 0;

// switch (job) {
//     default:
//         salary = 4000;
//         console.log(salary)
//         break;
//     case "Manager":
//         salary = 8000;
//         console.log(salary);
//         break;
//     case "IT":
//     case "Support":
//         salary = 6000;
//         console.log(salary);
//         break;
//     case "Developer":
//     case "Designer":
//         salary = 7000;
//         console.log(salary)
//         break;
// }

// let holidays = 4;
// let money = 0;

// if (holidays === 0) {
//     money = 5000;
//     console.log(money);
// } else if (holidays === 1 || holidays === 2) {
//     money = 3000;
//     console.log(money)
// } else if (holidays === 3) {
//     money = 2000;
//     console.log(money)
// } else if (holidays === 4) {
//     money = 1000;
//     console.log(money)
// } else if (holidays === 5) {
//     money = 0;
//     console.log(money)
// } else {
//     money = 0;
//     console.log(money)
// }


// let zero = 0;
// let counter = 3;
// let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];

// console.log(my.slice(0, 4).reverse());

// console.log(my.slice(zero, counter).concat(my[counter]).reverse())

// console.log(my.slice(my.indexOf("Mazero"), my.indexOf("Osama")).reverse());

// console.log(my[--counter].slice(zero, counter) + my[++zero].slice(counter));

// console.log(my[++zero].slice(++counter).slice(zero).toUpperCase());

// console.log(my.slice(zero, (++counter)).reverse());

// console.log(my.slice((++zero), counter).reverse());

// console.log(my[--counter].slice(zero, counter) + my[++zero].slice(counter));

// console.log(my[++zero].slice(++counter, ++counter) + my[--counter, zero]
// );

// let myAdmins = ["Ahmed", "Osama", "Sayed", "Stop", "Samera"];
// let myEmplyees = ["Amgad", "Samah", "Ameer", "Omar", "Othman", "Amany", "Samia", "Anwar"];

// document.write(`<div> <h1> We Have ${myAdmins.length - 2} Admins </h1></div>`);

// for (let i = 0; i < myAdmins.length; i += 1) {
//     if (myAdmins[i] === "Stop") {
//         break;
//     }
//     document.write(` <hr> <div>`);
//     document.write(`<h3>The Admin For Team ${i + 1} Is ${myAdmins[i]}</h3 >`);
//     document.write(`<h2> Team Members :</h2>`);
//     for (let j = 0; j < myEmplyees.length; j += 1)
//         if (myAdmins[i].startsWith(`A`) && myEmplyees[j].startsWith(`A`)) {
//             document.write(`<h4>--${myEmplyees[j]}</h4>`);
//         } else if (myAdmins[i].startsWith(`O`) && myEmplyees[j].startsWith(`O`)) {
//             document.write(`<h4>--${myEmplyees[j]} </h4>`)
//         } else if (myAdmins[i].startsWith(`S`) && myEmplyees[j].startsWith(`S`)) {
//             document.write(`<h4>--${myEmplyees[j]} </h4>`)
//         }

//     document.write(`</div>`);

// }

// function showDetails(a, b, c) {
//     let name;
//     let age;
//     let status;
// if (typeof a === "string") {
//     name = a;
// } else if (typeof a === "number") {
//     age = a;
// } else {
//     status = a;
// }
// typeof a === "string" ? name = a : typeof a === "number" ? age = a : status = a; 
// if (typeof b === "string") {
//     name = b;
// } else if (typeof b === "number") {
//     age = b;
// } else {
//     status = b;
// }
// if (typeof c === "string") {
//     name = c;
// } else if (typeof c === "number") {
//     age = c;
// } else {
//     status = c;
// } if (status === true) {
//     status = `You Are Availble For  Hire`
// } else { status = `You Are Not Availble For  Hire` }
//     typeof a === "string" ? name = a : typeof a === "number" ? age = a : status = a;

//     typeof b === "string" ? name = b : typeof b === "number" ? age = b : status = b;


//     typeof c === "string" ? name = c : typeof c === "number" ? age = c : status = c;

//     status === true ? status = `You Are Availble For  Hire` : status = `You Are Not Availble For  Hire`;

//     document.write(`<p>Hello ${name},Your Age IS ${age}, ${status} </p>`)
// }

// showDetails("mohamed", 38, true);
// showDetails(38, "Osama", true);
// showDetails(true, 38, "Osama");
// showDetails(false, "Osama", 38);

// function showDetails(a, b, c) {
//     let name;
//     let age;
//     let status;
//     // if (typeof a === "string") {
//     //     name = a;
//     // } else if (typeof a === "number") {
//     //     age = a;
//     // } else {
//     //     status = a;
//     // }
//     typeof a === "string" ? name = a : typeof a === "number" ? age = a : status = a;
//     if (typeof b === "string") {
//         name = b;
//     } else if (typeof b === "number") {
//         age = b;
//     } else {
//         status = b;
//     }
//     if (typeof c === "string") {
//         name = c;
//     } else if (typeof c === "number") {
//         age = c;
//     } else {
//         status = c;
//     } if (status === true) {
//         status = "Have a Skills"
//     } else {
//         status = "Do Not Have a Skills"
//     }
//     document.write(`<div>`)
//     document.write(` <p> Hello My Name IS ${name} And My Age Is ${age} ${status}</p>`);
//     document.write(`</div>`)
// }



// showDetails("mohamed", 38, true);
// showDetails(38, "Osama", true);
// showDetails(true, 38, "Osama");
// showDetails(false, "Osama", 38);


// function showInfo(username, age, rate, show, ...skills) {


// }

// let names = function (...name) {
//     return "String" + [[name]] + '=> Done !';
// };

// console.log(names("Osama", "Mohamed", "Ali", "Ibrahim"));

// let names = (...name) => `String [${name.join("], [")}]` + '=> Done !';

// console.log(names("Osama", "Mohamed", "kouta", "Ali", "Ibrahim"));

// let invertedNumbers = [1, -10, -20, 100, -30];

// let ignorNumbers = "Elz123er4o"

// let inv = invertedNumbers.map(function (el) {
//     return -el;
// })
// console.log(inv);

// let ig = ignorNumbers
//     .split("")
//     .map(function (el) {
//         return isNaN(parseInt(el)) ? el : "";
//     })
//     .join("");

// console.log(ig);
// Arrow function
// let ig = ignorNumbers.split("").map((el) => isNaN(parseInt(el)) ? el : "").join("");

// console.log(ig);

// let mix = "A13BS2ZX";

// let mx = mix
//     .split("")
//     .filter(function (el) {
//         return !isNaN(parseInt(el))
//     }).map(function (el) {
//         return el * el
//     })
//     .join("");


// document.write(mx);

// let myString = "1,2,3,EE,l,z,e,r,o,_,W,e,b,_,S,c,h,o,o,l,2,0,Z";

// let solution = myString.split("").map(function (el) {
//     return el !== ","
// })
//     .join("");

// document.write(solution);

// let member = {
//     name: "Elzero",
//     age: 38,
//     country: "Egypt",
//     fullDetails: function () {
//         return `My Name Is ${member.name}, My Age Is ${member.age}, I Live in ${member.country}`;
//     }
// }

// // Create Your Object Here

// console.log(member.name); // Elzero
// console.log(member.age); // 38
// console.log(member.country); // Egypt
// // console.log(member.fullDetails());
// // My Name Is Elzero, My Age Is 38, I Live in Egypt

// Method One
// Create Your Object Here
// let objMethodOne = {
//     property: "Method one"
// }
// console.log(objMethodOne.property); // "Method One"

// // Method Two
// // Create Your Object Here
// let objMethodTwo = Object.create({});
// objMethodTwo.property = "Method Two";

// console.log(objMethodTwo.property); // "Method Two"

// // Method Three
// // Create Your Object Here
// let objMethodThree = new Object({
//     property: "Method Three",
// })

// console.log(objMethodThree.property); // "Method Three"

// // Method Four
// // Create Your Object Here
// let objMethodFour = Object.assign({}, { property: "Method Four" })

// console.log(objMethodFour.property); // "Method Four"


// let a = 1;

// let threeNums = {
//     b: 2,
//     c: 3,
//     d: 4,
// };

// let twoNums = {
//     e: 5,
//     f: 6,
// };
// let finalObject = Object.assign({}, { a }, threeNums, twoNums)
// // Create Your Object Here in One Line

// console.log(finalObject);

// /*
//   a: 1
//   b: 2
//   c: 3
//   d: 4
//   e: 5
//   f: 6
// */





// // The Object To Work With
// let myFavGames = {
//     "Trinity Universe": {
//         publisher: "NIS America",
//         price: 40,
//     },
//     "Titan Quest": {
//         publisher: "THQ",
//         bestThree: {
//             one: "Immortal Throne",
//             two: "Ragnarök",
//             three: "Atlantis",
//         },
//         price: 50,
//     },
//     YS: {
//         publisher: "Falcom",
//         bestThree: {
//             one: "Oath in Felghana",
//             two: "Ark Of Napishtim",
//             three: "origin",
//         },
//         price: 40,
//     },
// };

// // Code One => How To Get Object Length ?
// let objectLength = Object.keys(myFavGames).length;

// for (let i = 0; i < objectLength; i++) {
//     console.log(`The Game Name Is ???????`);
//     console.log(`The Publisher Is ???????`);
//     console.log(`The Price Is ???????`);

//     // Check If Nested Object Has Property (bestThree)
//     if (???????) {
//         console.log("- Game Has Releases");
//         console.log(`First => ???????`);
//         console.log(`Second => ???????`);
//         console.log(`Third => ???????`);
//     }
//     console.log("#".repeat(20));
// }

// // Ouput

// "The Game Name Is Trinity Universe"
// "The Publisher Is NIS America"
// "The Price Is 40"
// "####################"
// "The Game Name Is Titan Quest"
// "The Publisher Is THQ"
// "The Price Is 50"
// "- Game Has Releases"
// "First => Immortal Throne"
// "Second => Ragnarök"
// "Third => Atlantis"
// "####################"
// "The Game Name Is YS"
// "The Publisher Is Falcom"
// "The Price Is 40"
// "- Game Has Releases"
// "First => Oath in Felghana"
// "Second => Ark Of Napishtim"
// "Third => origin"
// "####################"

// let mymainElement = document.createElement("div");
// let myHeading = document.createElement("h2");
// let myParagraph = document.createElement("p");

// let myHeadingText = document.createTextNode("Product Title");
// let myParagraphText = document.createTextNode("Product Description");

// mymainElement.className = "product";

// myHeading.appendChild(myHeadingText);

// myParagraph.appendChild(myParagraphText);




// mymainElement.appendChild(myHeading);
// mymainElement.appendChild(myParagraph);
// document.body.appendChild(mymainElement);

// for (let i = 0; i <= 100; i++) {


// }
// for (let i = 0; i <= 50; i++) {
//     let Element = document.createElement("div");
//     Element.class = "product";
//     let myHeading = document.createElement("h2");
//     let myHeadingText = document.createTextNode("Product" + i)
//     let myParagraph = document.createElement("p");
//     let myParagraphText = document.createTextNode("Product Description");
//     myHeading.appendChild(myHeadingText);
//     myParagraph.appendChild(myParagraphText);
//     Element.appendChild(myHeading);
//     Element.appendChild(myParagraph);
//     document.body.appendChild(Element);
// }







// for (let i = 1; i <= 20; i++) {
//     let element = document.createElement("div");
//     element.className = "product";
//     let heading = document.createElement("h3");
//     let headText = document.createTextNode("our products" + i);
//     let prag = document.createElement("p");
//     let pragtext = document.createTextNode("this is text for our prag ");
//     document.body.appendChild(element);
//     element.appendChild(heading);
//     heading.appendChild(headText);
//     element.appendChild(prag);
//     prag.appendChild(pragtext);

// }

// let create = el => document.createElement(`${el}`);

// Create Element 
let header = document.createElement("header");
let logo = document.createElement("h1");
let menu = document.createElement("ul");
let content = document.createElement("div");
let footer = document.createElement("footer");

// Create Classnames

header.className = "website-head";
logo.className = "logo";
menu.className = "menu";
content.className = "content";
footer.className = "footer";

document.body.append(header);
header.append(logo);
header.append(menu);
document.body.append(content);
document.body.append(footer);

for (let i = 1; i <= 15; i++) {
    if (i <= 4) {
        let menulist = document.createElement("li");
        menulist.className = `menu-list-${i}`;
        menu.append(menulist);
        menulist.style.cssText = "cursor: pointer"
    }

    let prodbox = document.createElement("div");
    let prodnum = document.createElement("span");
    prodbox.className = "product";
    prodbox.textContent = "product";
    prodnum.textContent = `${i}`
    prodbox.prepend(prodnum);
    content.append(prodbox);
    prodbox.style.cssText = "color: rgb(136, 136, 136); padding: 20px; background-color: white; border: 1px solid rgb(221, 221, 221); width: calc((100% - 40px) / 3); border-radius: .5rem; box-sizing: border-box; text-algin: center";
    prodnum.style.cssText = "display: block; color: black; font-size: 40px; margin-bottom: 20px";
}




logo.textContent = "KoUta";
document.querySelector(".menu-list-1").textContent = "Home";
document.querySelector(".menu-list-2").textContent = "Service";
document.querySelector(".menu-list-3").textContent = "About";
document.querySelector(".menu-list-4").textContent = "Contact";
footer.textContent = "CopyRight 2024";


document.body.style.cssText = "margin: 0; background-color: rgb(236, 236, 236); font-family: Tahoma, Arial";
header.style.cssText = "display: flex; align-items: center; justify-content: space-between; padding: 20px; background-color: white";
logo.style.cssText = "color: rgb(35, 169, 110); font-size: 50px";
menu.style.cssText = "display: flex; justify-content: space-between; gap: 15px; list-style: none; padding: 20px";
content.style.cssText = "display: flex; flex-wrap: wrap; gap: 20px; padding: 20px; justify-content: center; box-sizing: border-box; min-height: calc(100vh - 142px); text-align: center";
footer.style.cssText = "background-color: rgb(35, 169, 110); font-size: 30px; text-align: center; font-wight: bold; padding: 20px";

// let prompMsg = prompt("Print Number From – To", "Example: 5-20");
// let prompNum = prompMsg.split("-").sort((a, b) => a - b);

// for (i = +prompNum[0]; i <= prompNum[1]; i++) {
//     let num = document.createElement("div");
//     num.textContent = i;
//     document.body.append(num);
// }


// let parent = document.createElement("div");
// let h1 = document.createElement("h1");
// let p = document.createElement("p");
// let btn = document.createElement("button");

// function popup() {
//     h1.textContent = "Welcome";
//     p.textContent = "welcome to elzero web school";
//     btn.textContent = "X";

//     parent.append(h1, p, btn);
//     document.body.append(parent);

//     btn.addEventListener("click", function () {
//         btn.parentElement.remove();
//     });
// }

// setTimeout(popup, 5000);

// let div = document.getElementById("di");

// function countDown() {
//     div.innerHTML -= 1;
//     if (div.innerHTML === "0") {
//         clearInterval(counter);
//         // location.href = "http://www.google.com";
//     } else if (div.innerHTML === "5") {
//         open("http://www.Elzero.org", "_blank", "width = 400, height = 600");

//     }

// }


// let counter = setInterval(countDown, 1000);

let btn = document.getElementsByClassName("menu-list-1");

