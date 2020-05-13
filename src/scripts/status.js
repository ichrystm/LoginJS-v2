export { showMessage };
import { loginstatus } from './login.js';

function showMessage() {
    whichStatus();
    document.querySelector(".login-status").style.display = 'flex';
    setTimeout(function(){document.querySelector(".login-status").style.display = 'none';}, 4000); 
}

function whichStatus() {
    if(loginstatus == 401){
        document.querySelector(".stats-message").innerHTML="Senha incorreta."
    }if(loginstatus == 404){
        document.querySelector(".stats-message").innerHTML="Usuário não encontrado."
    }if(loginstatus == 200){
        document.querySelector(".stats-message").innerHTML="Login Realizado."
    }
}