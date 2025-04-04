function attachEvents() {
    let messageUrl = `http://localhost:3030/jsonstore/messenger`;
    let sendBtn = document.getElementById('submit');
    let refreshBtn = document.getElementById('refresh');
    let messageScreen = document.getElementById('messages');
 
    sendBtn.addEventListener('click', addMsg);
    refreshBtn.addEventListener('click', displayMsg);
 
    async function addMsg () {
        let authorName = document.getElementsByName('author')[0].value;
        let msgText = document.getElementsByName('content')[0].value;
 
        if (!authorName || !msgText) {
            return;
        }
 
        let newMsg = {
            author: authorName,
            content: msgText,
        }
 
        try {
            await fetch(messageUrl, {
                method: 'post',
                headers: { 'Content-type': 'application/json' },
                body: JSON.stringify(newMsg),
                })
        } catch (error) {
            console.error(error);
        }
    }
 
    async function displayMsg () {
        try {
            let response = await fetch(messageUrl);
            let messages = await response.json();
            messageScreen.textContent = ''
            let result = [];
 
            let messageValues = Object.values(messages);
 
            for (let message of messageValues) {
                let currentStr = `${message.author}: ${message.content}`;
                result.push(currentStr);
            }
 
            messageScreen.textContent = result.join('\n');
        } catch (error) {
            console.error(error);
        }
    } 
}
 
attachEvents();