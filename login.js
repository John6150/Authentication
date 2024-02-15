let email_ = document.getElementById("email_")
let password_ = document.getElementById("password_")
let data_ = JSON.parse(localStorage.getItem("Data"))
let check_ = undefined

let UserAr = []

function submit_(ev) {
    ev.preventDefault()
}

function login() {
    if (check_ == null) {
        check_ = data_.find((e) => e.Email == email_.value)
        if (check_.Email == email_.value && check_.Password == password_.value) {
            UserAr.push(check_)
            localStorage.setItem("User", JSON.stringify(check_))
            window.location.href = "dashboard.html"
            return;
        } else {
            alert("Wrong User")
            window.location.href = "login.html"
            return;
        }
    } else
    if (email_.value == "" || password_.value == "") {
        alert("Please, fill in the black spaces")
        return
    } else {
        alert("Sorry,. user does not exist. Sign up first")
        window.location.href = "index.html"
        return
    }
}
