//Form Validation

//helper function

function showErr(fieldid,message){
  const errorEl = document.getElementById(`${fieldid}-error`);
  errorEl.textContent=message;
  document.getElementById(fieldid).classList.add("invalid");
}

function removeErr(fieldid){
    const errorEl = document.getElementById(`${fieldid}-error`);
  errorEl.textContent="";
  document.getElementById(fieldid).classList.add("valid");
}

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const passwordRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;

//The Main Submit Validator
const form=document.getElementById("login-form");
form.addEventListener("submit",(e)=>{
    e.preventDefault();
const name=document.getElementById("name");
const email=document.getElementById("email");
const password=document.getElementById("password");
let isvalid=true;

if (name.value.length===0){
    showErr("name","full name is required");
    isvalid=false;
}else if(name.value.length<3){
    showErr("name","Name must be at least 3 characters.");
    isvalid=false;
}else{
    removeErr("name");
}
if(email.value.length===0){
    showErr("email","email is required");
     isvalid = false;
}else if(!emailRegex.test(email.value)){
    showErr("email","Please enter a valid email address");
    isvalid=false;
}else{
    removeErr("email")
}
if(password.value.length===0){
    showErr("password","please enter a password");
    isvalid = false;
}else if(password.value.length<8){
    showErr("password","password must be atleast 8 characters");
    isvalid = false;
}else if(!passwordRegex.test(password.value)){
    showErr("password","please enter a valid password");
    isvalid=false;
}else{
    removeErr("password");
}

if (isvalid) {
    alert("Form submitted successfully!");
}
});


