import { sertified } from "./auth.js";
import { renderHome } from "./home.js";

export const login = document.querySelector('.login');
const loginForm = login.querySelector('form');
export function loginPage() {
    login.style.display = 'block'
	loginForm.addEventListener('submit', (e)=>{
	    e.preventDefault();
	    const formData = new FormData(e.currentTarget);
	    const { email,password } = Object.fromEntries(formData);
           const resp =  fetch('http://localhost:3030/users/login',{
                method: 'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email,password })
            })
            .then((resp) => {
                if (!resp.ok) {
                    throw new Error();
                };
                resp.json();

            })
            .then((user) => {
                localStorage.setItem('user',JSON.stringify(user));
                sertified()
                alert('Successfull login!');
            })
            .catch((error) => alert('Something wrong'));
            loginForm.reset()
            hideContent()
            renderHome()
	})
}
function hideContent() {
    const main = document.querySelector('.main-constent');
    for (const section of main.children) {
        section.style.display = 'none'
    }
}
