
document.addEventListener("DOMContentLoaded", function () {
    let regBtn = document.getElementById("regBtn");
    let nombre = document.getElementById("nombre");
    let apellido = document.getElementById("apellido");
    let email = document.getElementById("email");
    let password1 = document.getElementById("password1");
    let password2 = document.getElementById("password2");
    let terminos = document.getElementById("terminos");
    let alertSuccess = document.getElementById("alert-success");
    let alertDanger = document.getElementById("alert-danger");

    regBtn.addEventListener("click", function () {
        alertSuccess.classList.remove("show");

        if (
            nombre.value === "" ||
            apellido.value === "" ||
            email.value === "" ||
            password1.value === "" ||
            password2.value === "" ||
            !terminos.checked
        ) {
            alertDanger.classList.add("show")
            setTimeout(() => {
                alertDanger.classList.remove("show")
            }, 3000);
            return;
        }

        if (password1.value.length < 6) {
            alertDanger.classList.add("show")
            setTimeout(() => {
                alertDanger.classList.remove("show")
            }, 3000);
            return;
            
        }

        if (password1.value !== password2.value) {
            alertDanger.classList.add("show")
            setTimeout(() => {
                alertDanger.classList.remove("show")
            }, 3000);
            return;
            
        }
else
        alertSuccess.classList.add("show");
        setTimeout(() => {
            alertSuccess.classList.remove("show")
        }, 3000);
        return;
    })
})






     
    

