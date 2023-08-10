function checkPassword(){
    let password = document.getElementById
    ("password").value;
    let cnfrmPassword = document.getElementById
    (cnfrm-Password).value;
    console.log(password ,cnfrmPassword)
    let message = document.getElementById
    ("message");

    if(password.length != 0){
        if(password == cnfrmPassword){
            message.textContent = "Passwords match";
        }
        else{
            message.textContent = "Password dont match";
        }
    }
}