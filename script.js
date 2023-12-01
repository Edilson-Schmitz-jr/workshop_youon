

var i = setInterval(function () {
    clearInterval(i);
    document.getElementById("load_screen").classList.add("active");
}, 3000);