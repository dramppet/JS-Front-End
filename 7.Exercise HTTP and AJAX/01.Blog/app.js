function attachEvents() {
    let postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    let commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';
 
    let loadBtn = document.getElementById('btnLoadPosts');
    let viewBtn = document.getElementById('btnViewPost');
 
    let selectSection = document.getElementById('posts');
    let postTitle = document.getElementById('post-title');
    let postBody = document.getElementById('post-body');
    let list = document.getElementById('post-comments');
 
    loadBtn.addEventListener('click', loadPosts);
    viewBtn.addEventListener('click', loadComments);
 
    async function loadPosts () {
        try {
            let posts = await fetch(postsUrl);
            let postData = await posts.json();
 
            let postEntries = Object.entries(postData);
 
            for (let [key, post] of postEntries) {
                let newOption = document.createElement('option');
                newOption.value = key;
                newOption.textContent = post.title;
 
                selectSection.appendChild(newOption);
            }
 
        } catch (error) {
            console.error(error);
        }
    }
 
    async function loadComments () {
        let currentKey = selectSection.value;
        let currentPost;
 
        try {
            let posts = await fetch(postsUrl);
            let postData = await posts.json();
 
            let currentPost = postData[currentKey];
 
            postTitle.textContent = currentPost.title;
            postBody.textContent = currentPost.body;
 
        } catch (error) {
            console.error(error);
        }
 
        try {
            let comments = await fetch(commentsUrl);
            let commentsData = await comments.json();
            list.innerHTML = '';
            
            let filteredComments = Object.values(commentsData).filter(c => c.postId === currentKey);
 
            filteredComments.forEach(comment => {
                const li = document.createElement('li');
                li.textContent = comment.text;
                list.appendChild(li);
            });
 
        } catch (error) {
            console.log(error);
        }
    }
 
}
 
attachEvents();