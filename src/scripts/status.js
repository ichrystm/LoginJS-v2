export { showMessage };
import { loginstatus } from './login.js';

function showMessage() {
    whichStatus();
    document.querySelector(".login-status").style.display = 'flex';
    setTimeout(function(){document.querySelector(".login-status").style.display = 'none';}, 4000); 
}

function whichStatus() {
    if(loginstatus == 0){
        document.querySelector(".stats-message").innerHTML="Nenhum usuário cadastrado no sistema."
    }if(loginstatus == 2){
        document.querySelector(".stats-message").innerHTML="Senha incorreta."
    }if(loginstatus == 3){
        document.querySelector(".stats-message").innerHTML="Usuário não encontrado."
    }if(loginstatus == 4){
        document.querySelector(".stats-message").innerHTML="Login Realizado."
    }
}