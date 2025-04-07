function attachEvents() {
    const baseURL = 'http://localhost:3030/jsonstore/phonebook';
    const loadBtn = document.getElementById('btnLoad');
    const addBtn = document.getElementById('btnCreate');
    const phoneBook = document.getElementById('phonebook');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');

    loadBtn.addEventListener('click', loadPhones);
    addBtn.addEventListener('click', addPhone);

    async function loadPhones() {
        try {
            const response = await fetch(baseURL);
            if (!response.ok) {
                throw new Error('Failed to fetch phonebook data');
            }
            const phoneData = await response.json();
            phoneBook.innerHTML = '';

            Object.values(phoneData).forEach(entry => {
                const liItem = document.createElement('li');
                liItem.textContent = `${entry.person}: ${entry.phone} `;

                const deleteBtn = document.createElement('button');
                deleteBtn.textContent = 'Delete';
                deleteBtn.dataset.id = entry._id;
                deleteBtn.addEventListener('click', deletePhone);

                liItem.appendChild(deleteBtn);
                phoneBook.appendChild(liItem);
            });
        } catch (error) {
            console.error('Error loading phonebook:', error);
        }
    }

    async function deletePhone(event) {
        const id = event.target.dataset.id;
        try {
            const response = await fetch(`${baseURL}/${id}`, { method: 'DELETE' });
            if (!response.ok) {
                throw new Error('Failed to delete entry');
            }
            loadPhones();
        } catch (error) {
            console.error('Error deleting entry:', error);
        }
    }

    async function addPhone() {
        const newPerson = personInput.value.trim();
        const newPhone = phoneInput.value.trim();

        if (!newPerson || !newPhone) {
            alert('Both fields are required!');
            return;
        }

        try {
            const response = await fetch(baseURL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ person: newPerson, phone: newPhone })
            });

            if (!response.ok) {
                throw new Error('Failed to add entry');
            }

            personInput.value = '';
            phoneInput.value = '';
            loadPhones();
        } catch (error) {
            console.error('Error adding entry:', error);
        }
    }
}

attachEvents();