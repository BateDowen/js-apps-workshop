import { sertified } from "./auth.js";

export const reg = document.querySelector('.reg');
const regForm = reg.querySelector('form')
export function regPage() {
    reg.style.display = 'block';
    regForm.addEventListener('submit', (e) =>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
	    const { email,password } = Object.fromEntries(formData);
        try {
           const resp =  fetch('http://localhost:3030/users/register',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email,password })
            })
            .then((resp) => resp.json())
            .then((user) => {
            
                localStorage.setItem('user',JSON.stringify(user));
                sertified()
                alert('Successfull login!');
            })
            .catch((error) => alert(error.message))
            
        } catch (error) {
            alert(error.message)
            return
        }
    })
}
