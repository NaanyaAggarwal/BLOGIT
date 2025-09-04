//WELCOME MSSG
const username = localStorage.getItem("username");
if (username) {
  document.getElementById("user").innerText = username;
}

//BLOG POSTING
function post(){  
    const enttitle = document.getElementById("title").value;
    const entcontent = document.getElementById("content").value;
    const username = localStorage.getItem("username");
    let blogs = JSON.parse(localStorage.getItem("blogs") || "[]");

    blogs.push({username: username, title: enttitle, content: entcontent});
    localStorage.setItem("blogs", JSON.stringify(blogs));
    document.getElementById("title").value = "";
    document.getElementById("content").value = "";

    
}
displayblogs()

//BLOGLIST
function displayblogs(){
    const username = localStorage.getItem("username");
    const bloglist = document.getElementById("bloglist");
    bloglist.innerHTML = "";

    const blogs = JSON.parse(localStorage.getItem("blogs") || "[]");
    
    if (blogs.length === 0){
        bloglist.innerHTML = "<p>No blog posts yet.</p>";
        return;
    }

    blogs.reverse().forEach(blog => {
        const div = document.createElement("div");
        div.className = "post";
        
        div.innerHTML = `
        <h4>${blog.title}</h4>
        <h5>${blog.username}</h5>
        <p>${blog.content}</p>
        `;
        bloglist.appendChild(div);
    });

}










//NOTE TO SELF
//dont keep same ids
//keep mind of div in html
//add styles.css
