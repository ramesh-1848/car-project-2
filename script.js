function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // simple login check
    if (user === "admin" && pass === "1234") {
        // redirect to next page
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Invalid Login!";
    }
}function login() {
    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    // multiple users
    if (
        (user === "admin" && pass === "1234") ||
        (user === "carbuyer" && pass === "1848")
    ) {
        // redirect to next page
        window.location.href = "home.html";
    } else {
        document.getElementById("error").innerText = "Invalid Login!";
    }
}
