

var i = setInterval(function () {
    clearInterval(i);
    document.getElementById("load_screen").classList.add("active");
    document.querySelector('.video_class_welc').play();
}, 3000);

var u = setInterval(function () {
    clearInterval(i);
    document.querySelector('.video_class_welc').classList.add("active");
    document.querySelector('.img_plano_de_fundo').classList.add("active");
    document.querySelector('.video_class_welc').pause();
}, 10000);
