//Why Browser Storage?
//The Storage API — Same Methods, Different Lifetimes

// localStorage -- persists until explicitly cleared
localStorage.setItem("theme","dark");
const theme =localStorage.getItem("theme");
console.log(theme);
localStorage.removeItem("theme");// remove one key
localStorage.setItem("isActive","true")
localStorage.setItem("login","true");
localStorage.clear();//removes all key

//sessionstorage -- will be cleared when tab closes

// sessionStorage.setItem("theme","darsk");

//Important Limitation: Strings Only
const user={name:"Alice",age:34};
//localstorage.setitem("user",user):will gives as object so convert into string using stringify
localStorage.setItem("user",JSON.stringify(user));

//// READING BACK -- parse the JSON string into an object

const userback=JSON.parse(localStorage.getItem("user"));
console.log(userback);

//Persisting a Dark Mode Preference

const toggleBtn = document.querySelector("#theme-btn");
toggleBtn.addEventListener("click", () => {
 document.body.classList.toggle("dark-mode");
 const isDark = document.body.classList.contains("dark-mode");
 localStorage.setItem("theme", isDark ? "dark" : "light");
});
// On page load -- restore saved preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
 document.body.classList.add("dark-mode");
}

//Persisting a Shopping Cart

const CART_KEY = "shopCart";
function getCart() {
 return JSON.parse(localStorage.getItem(CART_KEY) || "[]");
}
function saveCart(cart) {
 localStorage.setItem(CART_KEY, JSON.stringify(cart));
}
function addToCart(product) {
 const cart = getCart();
 cart.push(product);
 saveCart(cart);
}
addToCart({ id: 1, name: "Phone", price: 9999 });
// still there after refresh!