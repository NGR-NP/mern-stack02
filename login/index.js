const defUsername = 'admin'
const defPassword = 'admin'

function handleClick(event) {
    const password = document.getElementById('password')
    const username = document.getElementById('username')
    if (event) {
        event.preventDefault();
    }
    else if( !username.value || !password.value){
        alert("enter your username and password")
    }
    else if (username.value === defUsername && password.value === defPassword) {
        window.location.href = "success.html";
    }
    else {
        window.location.href = "error.html";
    }
}
    // const username = prompt('enter your username:')
    // const password = prompt('enter your password:')
    // if (username == defUsername && password == defPassword) {
    //     window.location.href = "success.html";
    // }
    // else {
    //     window.location.href = 'error.html';
    // }