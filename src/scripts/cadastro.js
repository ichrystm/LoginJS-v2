
export { getUserInfo };


document.getElementById('signup-open').addEventListener('click', function() {
    document.querySelector(".bg-modal").style.display = 'flex';
});

document.getElementById('close-btn').addEventListener('click', function() {
    closeSignup();
});

document.getElementById('submit-button').addEventListener('click', function() {
    validateEmail();
})

const validateEmail = () => {
        
        var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if(getUserInfo().email.match(mailformat)) {

        validatePassword();

        } else {

        alert('E-mail inválido');

        }
    }

const validatePassword = () => {

    if(getUserInfo().password.length >= 8) {
        registerUser();
    }else {
        alert('A senha deve conter no mínimo 7 caracteres.');
    }
}

const registerUser = () => {

    sendUserToApi();
    clearFields();
    closeSignup();

}

const clearFields = () => {
    document.getElementById('user_name').value = "";
    document.getElementById('user_email').value = "";
    document.getElementById('user_password').value = "";
}

const closeSignup = () => {
    document.querySelector(".bg-modal").style.display = 'none';
}

const getUserInfo = () => {

    let userInfo = {
        name: document.getElementById('user_name').value,
        email: document.getElementById('user_email').value,
        password: document.getElementById('user_password').value,
    }

    return userInfo;
}

const sendUserToApi = () => {

    axios.post('http://localhost:3000/auth/register', {
        name: getUserInfo().name,
        email: getUserInfo().email,
        password: getUserInfo().password,
    })
    .then(function(response) {
        alert('Usuário cadastrado com sucesso');
    })
    .catch(function(error) {
        console.log('Erro ao cadastrar o usuário')
    })

}