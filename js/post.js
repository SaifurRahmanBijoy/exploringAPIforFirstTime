function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((res) => res.json())
    .then((data) => displayposts(data));
}
function displayposts(posts) {
  const postContainer = document.getElementById("post-container");
  for (const post of posts) {
    const postDiv=document.createElement('div');
    postDiv.classList.add('post')
    postDiv.innerHTML = `
    <h5>User-${post.userId}</h5>
    <h5>Post:${post.title}</h5>
    <p>Post Description:${post.body}</p>
    `;
    postContainer.appendChild(postDiv);
  }
}
loadPosts();
