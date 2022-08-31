function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayposts(data));
}
function displayposts(posts) {
  
  //get the container
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    
    //create the child element
    const postDiv = document.createElement("div");
    postDiv.classList.add("post");

    //set inner html
    postDiv.innerHTML = `
    <h5>User-${post.userId}</h5>
    <h5>Post:${post.title}</h5>
    <p>Post Description:${post.body}</p>
    `;

    //appendchild
    postContainer.appendChild(postDiv);
  }
}
loadPosts();
