
import { renderHome } from "./home.js";
import { login, loginPage } from "./login.js";
import { reg, regPage } from "./reg.js";
import { renderCreate } from "./create.js";
import { logout } from "./logout.js";

const routes ={
    '/' : renderHome,
    '/create': renderCreate,
    '/login': loginPage,
    '/reg': regPage,
    '/logout': logout

}
export function router(path) {
    hideContent()
    const page = routes[path];
    page()
    
}
function hideContent() {
    const main = document.querySelector('.main-constent');
    for (const section of main.children) {
        section.style.display = 'none'
    }
}