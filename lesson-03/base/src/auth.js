const userNav = document.getElementById('user');
const guestNav = document.getElementById('guest');

export function sertified() {
    const user = localStorage.getItem('user');
    if (user) {
        userNav.style.display = 'inline';
        guestNav.style.display = 'none';
    } else {
        guestNav.style.display = 'inline'; 
        userNav.style.display = 'none';
    }
}