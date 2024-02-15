let do_ = document.getElementById("submit")
let pass = document.getElementById("password")
let pass2 = document.getElementById("cpassword")
let img = document.querySelector("img")
let passShow = document.getElementById("passShow")
let passShow2 = document.getElementById("passShow2")
let passShow3 = document.getElementById("passShow3")
let passShow4 = document.getElementById("passShow4")
let fname = document.getElementById("fname")
let lname = document.getElementById("lname")
let email = document.getElementById("email")


let ar = JSON.parse(localStorage.getItem("Data")) || []
let pas = ''

function submit_(ev) {
    ev.preventDefault()
}

function check() {
    pas = pass2.value
    if (pas == pass.value && pass.value == pass2.value) {
        document.getElementById("req").disabled = false
        document.getElementById("req").checked = false

    } else {
        document.getElementById("req").disabled = true
    }
}

function doS() {
    if (fname.value == "" || lname.value == "" || email.value == "" || pass.value == "" || req.checked == false) {
        alert("Please complete the form");
        return;
    }else
    if (pass.value != pass2.value) {
        alert("Sorry, passwords do not martch")
        return;
    } else {
        ar.push({ FirstName: fname.value, SecondName: lname.value, Email: email.value, Password: pass.value })
        localStorage.setItem("Data", JSON.stringify(ar))
        window.location.href = "login.html"
    }
}
function privacy1() {
    if (pass.type == 'password') {
        pass.type = 'text'
        passShow2.style = "display: none;"
        passShow.style = "display: block;"
    } else {
        pass.type = 'password'
        passShow.style = "display: none;"
        passShow2.style = "display: block;"
    }
}
function privacy2() {
    if (pass2.type == 'password') {
        pass2.type = 'text'
        passShow3.style = "display: none;"
        passShow4.style = "display: block;"

    } else {
        pass2.type = 'password'
        passShow3.style = "display: block;"
        passShow4.style = "display: none;"
    }
}