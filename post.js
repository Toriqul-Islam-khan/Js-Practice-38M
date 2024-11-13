function postData() {
    fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => dispalyPosts(data));
}

function dispalyPosts(posts) {
    for (const post of posts) {
        const postdiv = document.createElement('div');
        postdiv.classList.add('post');
        postdiv.innerHTML = `
        <h4>User -${post.userId}</h4>
        <h5>Title -${post.title}</h5>
        <p>Post Description: ${post.body}
        `;
console.log(postdiv)
        document.getElementById('postContainer').appendChild(postdiv);
    }
}

postData();