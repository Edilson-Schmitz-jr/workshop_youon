

var i = setInterval(function () {
    clearInterval(i);
    document.getElementById("load_screen").classList.add("active");
    document.querySelector('.video_class_welc').play();
}, 3000);