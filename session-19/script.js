//DOM & events

/*------1.Selecting Elements-------- */

//using getelementbyid

const heading=document.getElementById('main-heading');

//using queryselector(id and class also can be used)
const dompara=document.querySelector('#para');

// using queryselectorall(class)
const firstbtn=document.querySelectorAll('.firstbtn');


console.log(heading);
console.log(dompara);
console.log(firstbtn);

/*------2.Reading & Modifying Content */

console.log(heading.innerHTML);
console.log(dompara.textContent);
heading.textContent="changed heading";
heading.innerHTML="<span style='color:red'>changed</span>heading";
const image=document.querySelector('#img')
console.log(image.getAttribute('src'));
image.setAttribute('src','./image2.jpg');

/*------3.Creating & Appending Elements--------- */

const newlist1=document.createElement('li');
newlist1.textContent="MALAPPURAM";
const newlist2=document.createElement('li');
newlist2.textContent="IDUKKI";

const list=document.getElementById('place-list');
list.appendChild(newlist1);
list.prepend(newlist2);

//to remove an element
newlist1.remove();


/*----------4.classList — Changing CSS Classes---------- */

const modebtn=document.querySelector('.mode-btn');
const body = document.body;

modebtn.addEventListener('click',()=>{
    body.classList.toggle("dark-mode");
})

/*--------5.event--------------------- */

const count=document.getElementById('count');
const addbtn=document.getElementById('addbtn');
const subbtn=document.getElementById('subbtn');

addbtn.addEventListener('click',(e)=>{
    count.textContent++;
})
subbtn.addEventListener('click',()=>{
    count.textContent--;
})

/*--------6.submit event ----------------------*/

const form = document.querySelector("#login-form");

const emailInput = document.querySelector("#email");
const passwordInput = document.querySelector("#password");
const errorEl = document.querySelector("#error");

form.addEventListener("submit", (e) => {

    // Stop page reload
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value;

    // Email validation
    if (!email) {
        errorEl.textContent = "Email is required.";
        return;
    }

    // Password validation
    if (password.length < 6) {
        errorEl.textContent = "Password must be at least 6 characters.";
        return;
    }

    // Successful submission
    errorEl.textContent = "";

    console.log("Form submitted:", {
        email: email,
        password: password
    });

});


/*----------------7.event bubbling-------------- */
document.querySelector("#btn").addEventListener("click", () => console.log("Button clicked"));
document.querySelector("#inner").addEventListener("click", () => console.log("Inner div clicked"));
document.querySelector("#outer").addEventListener("click", () => console.log("Outer div clicked"));

//stopPropagation — Stop the Bubble

document.querySelector("#btn")
.addEventListener("click", (e) => {
e.stopPropagation(); // stops HERE
console.log("Button clicked — no bubbling");
});