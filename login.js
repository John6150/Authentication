let email_ = document.getElementById("email_")
let password_ = document.getElementById("password_")
let data_ = JSON.parse(localStorage.getItem("Data"))
let check_

let UserAr = []

function login (){
    check_ = data_.find((e) => e.Email == email_.value)
    if(check_.Email == email_.value && check_.Password == password_.value){
       UserAr.push(check_)
       localStorage.setItem("User", JSON.stringify(UserAr))
       dashboard()
       window.location.href = "index.html"
    }else{
        alert("Wrong User")
    }
}


function  dashboard(){
    console.log("hi");
}
