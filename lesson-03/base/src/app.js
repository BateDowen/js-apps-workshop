import { sertified } from "./auth.js";
import { router } from "./router.js";
sertified();
router('/')
const navigationEl = document.querySelector('.nav');
navigationEl.addEventListener('click', (e) =>{
    e.preventDefault();
    if (e.target.tagName == 'A') {
        let url = new URL(e.target.href)
        router(url.pathname);
        document.querySelector('.active').classList.remove('active');
        e.target.classList.add('active')
    };
});
