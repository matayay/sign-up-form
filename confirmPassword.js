const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
    const password = document.getElementById('user_password');
    const confirm_password = document.getElementById('confirm_password');
    const pass_div = document.getElementById('pass');

    if ( password.value != confirm_password.value )
    {
        password.value = "";
        confirm_password.value = "";

        const msg = document.createElement('p');
        msg.textContent = "*Passwords do not match.";
        msg.style.color = "red";
        msg.style.margin = "0rem";
        msg.style.fontSize = "0.8rem"
        pass_div.appendChild(msg);

        password.style.border = "2px solid red";
        confirm_password.style.border = "2px solid red";
    }
});