
let posts = [];

function addPost() {
  let title = document.getElementById("title").value;
  let content = document.getElementById("content").value;

  if (title === "" || content === "") {
    alert("Please fill all fields");
    return;
  }

  let post = {
    id: Date.now(),
    title: title,
    content: content,
    comments: []
  };

  posts.push(post);

  document.getElementById("title").value = "";
  document.getElementById("content").value = "";

  displayPosts();
}

function displayPosts() {
  let container = document.getElementById("posts");
  container.innerHTML = "";

  posts.forEach(post => {
    container.innerHTML += `
      <div class="post">
        <h3>${post.title}</h3>
        <p>${post.content}</p>

        <div class="actions">
          <button onclick="deletePost(${post.id})">Delete</button>
        </div>

        <div class="comment-box">
          <input type="text" id="c${post.id}" placeholder="Add comment">
          <button onclick="addComment(${post.id})">Send</button>
        </div>

        <div>
          ${post.comments.map(c => `<p>💬 ${c}</p>`).join("")}
        </div>
      </div>
    `;
  });
}

function deletePost(id) {
  posts = posts.filter(p => p.id !== id);
  displayPosts();
}

function addComment(id) {
  let input = document.getElementById("c" + id);
  let comment = input.value;

  if (comment === "") return;

  let post = posts.find(p => p.id === id);
  post.comments.push(comment);

  input.value = "";
  displayPosts();
}