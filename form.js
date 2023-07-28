var btnk = document.getElementById("btnok")
function subm() {
    var fname = document.getElementById("fname").value
    // document.getElementById("data").innerHTML = fname

    var lname = document.getElementById("lname").value
    document.getElementById("data").innerHTML = fname +" "+lname 
}

btnk.addEventListener("click", () => subm())
