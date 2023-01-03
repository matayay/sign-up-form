const button = document.querySelector('button');

button.addEventListener('mouseover', () => {
    const password = document.getElementById('user_password');
    const confirm_password = document.getElementById('confirm_password');
    const pass_div = document.getElementById('pass');
    const not_same = pass_div.querySelector('p');

    if ( password.value != confirm_password.value )
    {
        password.value = "";
        confirm_password.value = "";

        not_same.textContent = "*Passwords do not match.";
        password.style.border = "2px solid red";
        confirm_password.style.border = "2px solid red";
    }
});