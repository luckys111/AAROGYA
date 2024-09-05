function myfunc(event) {
    event.preventDefault();
    var name = document.getElementById("loginID").value;
    var password = document.getElementById("password").value;

    localStorage.setItem('is_name', name);
    localStorage.setItem('is_password', password);
}