//Fetch API

 const url="https://jsonplaceholder.typicode.com";

// fetch(`${url}/users/1`)
// .then(response=>{
//     console.log(response);
//     console.log(response.status);
//     console.log(response.ok);
//     return response.json();
// })
// .then(user=>{
//     console.log(user);
// })
// .catch(error =>{
//     console.error("network error:",error);
// })

//Cleaner Fetches, Rendered to the DOM

// async function getuser(id){
//     const response =await fetch(`${url}/users/${id}`);
//     const user=await response.json();
//     return user;

// }
// async function main(){
//     const user=await getuser(1);
//     console.log(user);
// }
// main();

//Fetch a List, Render to the DOM

// async function displayuser() {
//     const list = document.getElementById("user-list");

//     const response = await fetch(`${url}/users`);
//     const users = await response.json();

//     users.forEach(user => {
//         const li = document.createElement("li");
//         li.innerHTML = `<strong>${user.name}</strong>`;
//         list.appendChild(li);
//     });
// }

// displayuser();

//GET Requests With Query Parameters

// const userid=1;
// async function getpost(){
//     const response = await fetch(`${url}/posts?userId=${userid}`);
//     const post =await response.json();
//     return post.length;
// }
// async function main(){
//     const post = await getpost();
//     console.log(post);
// }
// main();

//get request to get albums for userid=2
// async function getalbum(){
//     const userid=2;
//     const response=await fetch(`${url}/albums?userId=${userid}`);
//     const albums=await response.json();
//     return albums.length;
// }
// async function main(){
//     const album = await getalbum();
//      console.log(album);
//  }
// main();

//making a POST request

// async function createpost(title,body,userid){
//     const response=await fetch(`${url}/posts`,{
//         method:"POST",
//         headers:{"Content-Type":"application/json"},
//         body:JSON.stringify({title,body,userid})
//     });
//     if(!response.ok){
//         throw new Error(`failed;${response.status}`);
//     }
//     const newpost =await response.json();
//     return newpost;
// }
//  async function main(){
//     const newpost = await createpost("Hello", "This is my first post", 1);
//      console.log(newpost);
//   }
//  main();

//Fetch and Display Posts

const loadbtn =document.getElementById("loadbtn");
loadbtn.addEventListener("click", async()=>{
    try{
        postdiv.textContent="Loading posts......"
   const posts = await loadPosts();

    postdiv.innerHTML = posts
        .map(post => `<h3>${post.title}</h3>
            <p>${post.body}</p>
            `,

        )
        .join("");
    }
    catch(error){
          postdiv.textContent="Failed to load posts. Try again";
          postdiv.style.color = "red";

    }
})
const postdiv=document.getElementById("posts");

async function loadPosts(){
    const response = await fetch(`${url}/posts?_limit=5`);
    const posts=await response.json();
    return posts;
}

