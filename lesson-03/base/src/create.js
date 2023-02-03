const createSec = document.querySelector('.create');
const formEl = createSec.querySelector('form');
let url = `http://localhost:3030/data/recipes`;

export function renderCreate() {
    createSec.style.display = 'block';
    formEl.addEventListener('submit', onSubmit)
    formEl.reset()
}
async function onSubmit(e) {
        e.preventDefault();
        const user = JSON.parse(localStorage.getItem('user'));
        const formData = new FormData(formEl);
        let {name,img,ingredients,steps} = Object.fromEntries(formData)
        try {
            const resp = await fetch(url, {
                method: 'POST',
                headers:{
                    'Content-Type': 'aplication/json',
                    'X-Authorization': user.accessToken
                },
                body: JSON.stringify({ name,img,ingredients,steps })
            });
            if (!resp.ok) {
                const err = await resp.json()
                throw new Error(err.message)
            };
            
        } catch (error) {
            alert(error.message);
            throw error
        }
    
}