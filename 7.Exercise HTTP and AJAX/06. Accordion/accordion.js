function solution() {
    let baseUrl = `http://localhost:3030/jsonstore/advanced/articles/list`;
    let detailUrl = `http://localhost:3030/jsonstore/advanced/articles/details/`;
    let mainSection = document.getElementById('main');
    
    getArticles();
 
    async function getArticles () {
        
        try{
            let response = await fetch(baseUrl);
            let data = await response.json();
            let titles = Object.values(data);
 
            for (let item of titles) {
                let title = item.title;
                let id = item._id;
 
                let articleObiect = await fetch(detailUrl + id);
                let articleDetails = await articleObiect.json();
                let articleBody = articleDetails.content;
 
                createTitleDiv(title, id, articleBody);
            }
 
 
        } catch (error) {
            console.error(error);
        }
        
    }
 
    function createTitleDiv(title, id, articleBody) {
        let newArticle = document.createElement('div');
        newArticle.classList.add('accordion')
 
        let newTitle = document.createElement('div');
        newTitle.classList.add('head');
 
        let titleSpan = document.createElement('span');
        titleSpan.textContent = title;
 
        let newMoreBtn = document.createElement('button');
        newMoreBtn.classList.add('button');
        newMoreBtn.dataset.id = id;
        newMoreBtn.textContent = 'More';
 
        newMoreBtn.addEventListener('click', showDetail)
 
        let extraDiv = document.createElement('div');
        extraDiv.classList.add('extra');
        extraDiv.style.display = 'none';
 
        let extraPara = document.createElement('p');
        extraPara.textContent = articleBody;
 
 
        newTitle.appendChild(titleSpan);
        newTitle.appendChild(newMoreBtn);
        extraDiv.appendChild(extraPara);
        newArticle.appendChild(newTitle);
        newArticle.appendChild(extraDiv);
        mainSection.appendChild(newArticle);
    }
 
    function showDetail (event) {
        let currentBtn = event.currentTarget;
        let id = currentBtn.dataset.id;
        let parentArticle = currentBtn.parentElement.parentElement;
 
        let extraDiv = parentArticle.querySelector('.extra');
        
        if (extraDiv) {
            if (extraDiv.style.display === 'block') {
                extraDiv.style.display = 'none';
                currentBtn.textContent = 'More';
            } else {
                extraDiv.style.display = 'block';
                currentBtn.textContent = 'Less';
            }
            return
        };
    }
}
 
solution();