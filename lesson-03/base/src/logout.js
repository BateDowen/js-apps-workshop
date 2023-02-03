import { sertified } from "./auth.js";

export function logout() {
   localStorage.removeItem('user');
   sertified();

}