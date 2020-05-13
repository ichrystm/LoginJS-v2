
import { showMessage } from './status.js';
export { loginstatus };

const button = document.getElementById("login-button");
let loginstatus = 0;


const login = () => {

    loginToApi();

}


const getLoginInfo = () => {
    let loginInfo = {
        email: document.getElementById("email").value,
        password: document.getElementById('password').value,
    }

    return loginInfo;
}

const loginToApi = () => {

    axios.post('http://localhost:3000/auth/login', {
        email: getLoginInfo().email,
        password: getLoginInfo().password,
    })
    .then(function(response) {
        
        loginstatus = response.status;
        showMessage();

    })
    .catch(function(error) {

        loginstatus = error.response.status;
        showMessage();

    })

}

button.addEventListener('click', login);