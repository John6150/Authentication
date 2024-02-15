let ar = JSON.parse(localStorage.getItem("User")) || []


if (ar[0].FirstName == null || ar[0].FirstName == undefined) {

} else {
    document.getElementById("title").innerHTML = `Welcome ${ar[0].FirstName} ${ar[0].SecondName}`

}