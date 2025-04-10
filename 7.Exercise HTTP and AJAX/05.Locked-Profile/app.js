async function lockedProfile() {
     
    let baseUrl = `http://localhost:3030/jsonstore/advanced/profiles`;
    let mainSite = document.getElementById('main');
 
    mainSite.innerHTML = '';
 
        try {
            let response = await fetch(baseUrl);
            let profileData = await response.json();
            let profiles = Object.values(profileData);
            
            for (let profile of profiles) {
                let username = profile.username;
                let email = profile.email;
                let age = profile.age;
                let idx = profiles.indexOf(profile) + 1;
 
                let profileCard = createProfileCard(username, email, age, idx);
                mainSite.appendChild(profileCard);
            }
 
        } catch (error) {
            console.error(error);
        }
        
    function createProfileCard(username, email, age, userIndex) {
        let profileCard = document.createElement('div');
        profileCard.classList.add('profile');
    
        let img = document.createElement('img');
        img.src = './iconProfile2.png';
        img.classList.add('userIcon');
    
        let lockLabel = document.createElement('label');
        lockLabel.textContent = 'Lock';
    
        let lockRadio = document.createElement('input');
        lockRadio.type = 'radio';
        lockRadio.name = `user${userIndex}Locked`;
        lockRadio.value = 'lock';
        lockRadio.checked = true;
    
        let unlockLabel = document.createElement('label');
        unlockLabel.textContent = 'Unlock';
    
        let unlockRadio = document.createElement('input');
        unlockRadio.type = 'radio';
        unlockRadio.name = `user${userIndex}Locked`;
        unlockRadio.value = 'unlock';
    
        let br = document.createElement('br');
        let hr1 = document.createElement('hr');
    
        let usernameLabel = document.createElement('label');
        usernameLabel.textContent = 'Username';
    
        let usernameInput = document.createElement('input');
        usernameInput.type = 'text';
        usernameInput.name = `user${userIndex}Username`;
        usernameInput.value = username;
        usernameInput.disabled = true;
        usernameInput.readOnly = true;
    
        let hiddenDiv = document.createElement('div');
        hiddenDiv.classList.add(`user${userIndex}Username`);
        hiddenDiv.style.display = 'none';
    
        let hr2 = document.createElement('hr');
    
        let emailLabel = document.createElement('label');
        emailLabel.textContent = 'Email:';
    
        let emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.name = `user${userIndex}Email`;
        emailInput.value = email;
        emailInput.disabled = true;
        emailInput.readOnly = true;
    
        let ageLabel = document.createElement('label');
        ageLabel.textContent = 'Age:';
    
        let ageInput = document.createElement('input');
        ageInput.type = 'number';
        ageInput.name = `user${userIndex}Age`;
        ageInput.value = age;
        ageInput.disabled = true;
        ageInput.readOnly = true;
    
        hiddenDiv.appendChild(hr2);
        hiddenDiv.appendChild(emailLabel);
        hiddenDiv.appendChild(emailInput);
        hiddenDiv.appendChild(ageLabel);
        hiddenDiv.appendChild(ageInput);
    
        let showMoreBtn = document.createElement('button');
        showMoreBtn.textContent = 'Show more';
    
        showMoreBtn.addEventListener('click', showMore);
    
        profileCard.appendChild(img);
        profileCard.appendChild(lockLabel);
        profileCard.appendChild(lockRadio);
        profileCard.appendChild(unlockLabel);
        profileCard.appendChild(unlockRadio);
        profileCard.appendChild(br);
        profileCard.appendChild(hr1);
        profileCard.appendChild(usernameLabel);
        profileCard.appendChild(usernameInput);
        profileCard.appendChild(hiddenDiv);
        profileCard.appendChild(showMoreBtn);
    
        return profileCard;
    }
    
    function showMore (event) {
        let button = event.currentTarget;
        let currentProfile = event.currentTarget.parentElement;
        let currentProfileHidden = currentProfile.querySelector('div:last-of-type');
        let currentProfileLock = currentProfile.querySelector('input[type="radio"][value="lock"]');
        let isLocked = currentProfileLock.checked;
 
        if (button.textContent === 'Show more') {
            
            if(!isLocked) {
                button.textContent = 'Hide it';
                currentProfileHidden.style.display = 'block';
            }
        } else {
            button.textContent = 'Show more';
            currentProfileHidden.style.display = 'none';
        }
    }
}