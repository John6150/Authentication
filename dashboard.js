let ar = JSON.parse(localStorage.getItem("User"));
console.log(ar);


if (ar == null || ar.FirstName == null || ar.FirstName == undefined) {
    console.log("hey");

    window.location.href = "login.html"
} else{
    document.getElementById("title").innerHTML = `Welcome ${ar.FirstName} ${ar.SecondName}`
}