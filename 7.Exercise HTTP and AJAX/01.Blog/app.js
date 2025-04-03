function attachEvents() {
    const postsUrl = 'http://localhost:3030/jsonstore/blog/posts';
    const commentsUrl = 'http://localhost:3030/jsonstore/blog/comments';

    const loadBtn = document.getElementById('btnLoadPosts');
    const viewBtn = document.getElementById('btnViewPost');

    const selectSection = document.getElementById('posts');
    const postTitle = document.getElementById('post-title');
    const postBody = document.getElementById('post-body');
    const list = document.getElementById('post-comments');

    loadBtn.addEventListener('click', loadPosts);
    viewBtn.addEventListener('click', loadComments);

    async function loadPosts() {
        try {
            const response = await fetch(postsUrl);
            const postData = await response.json();
            selectSection.innerHTML = '';

            Object.entries(postData).forEach(([key, post]) => {
                const newOption = document.createElement('option');
                newOption.value = key;
                newOption.textContent = post.title;
                selectSection.appendChild(newOption);
            });
        } catch (error) {
            console.error('Error loading posts:', error);
        }
    }

    async function loadComments() {
        const currentKey = selectSection.value;
        if (!currentKey) return;

        try {
            const response = await fetch(postsUrl);
            const postData = await response.json();
            const currentPost = postData[currentKey];

            postTitle.textContent = currentPost.title;
            postBody.textContent = currentPost.body;
        } catch (error) {
            console.error('Error loading post details:', error);
        }

        try {
            const response = await fetch(commentsUrl);
            const commentsData = await response.json();
            list.innerHTML = '';

            Object.values(commentsData)
                .filter(comment => comment.postId === currentKey)
                .forEach(comment => {
                    const li = document.createElement('li');
                    li.textContent = comment.text;
                    list.appendChild(li);
                });
        } catch (error) {
            console.error('Error loading comments:', error);
        }
    }
}

attachEvents();