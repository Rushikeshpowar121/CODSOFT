var header = document.getElementById("header");
var h2r = document.getElementById("H2R");
var ducati = document.getElementById("DUCATI");
var hayabusa = document.getElementById("HAYABUSA");
var yzf_r1 = document.getElementById("YZF-R1");
var s1000rr = document.getElementById("S1000RR");
var ktm1290 = document.getElementById("KTM1290");
var rsv4 = document.getElementById("RSV4");
var model = document.getElementById("model");
var mph = document.getElementById("mph");
var speed = document.getElementById("speed");
var range = document.getElementById("range");

function preloadImages() {
    var images = [
        'img/img_h2r.jpg',
        'img/img_ducati.jpg',
        'img/img_hayabusa.jpg',
        'img/img_r1.jpg',
        'img/img_s1000.jpg',
        'img/img_ktm.jpg',
        'img/img_aprila.jpg'
    ];
    images.forEach(function(image) {
        var img = new Image();
        img.src = image;
    });
}

window.onload = function() {
    preloadImages();
};

h2r.onclick = function() {
    header.style.backgroundImage = "url('img/img_h2r.jpg')";
    model.innerHTML = "Kawasaki H2R";
    mph.innerHTML = "2.5s";
    speed.innerHTML = "400 km/hr";
    range.innerHTML = "400 km";
};

ducati.onclick = function() {
    header.style.backgroundImage = "url('img/img_ducati.jpg')";
    model.innerHTML = "Ducati V4";
    mph.innerHTML = "2.8s";
    speed.innerHTML = "306 km/hr";
    range.innerHTML = "241 km";
};

hayabusa.onclick = function() {
    header.style.backgroundImage = "url('img/img_hayabusa.jpg')";
    model.innerHTML = "Suzuki Hayabusa";
    mph.innerHTML = "2.9s";
    speed.innerHTML = "299 km/hr";
    range.innerHTML = "290 km";
};

yzf_r1.onclick = function() {
    header.style.backgroundImage = "url('img/img_r1.jpg')";
    model.innerHTML = "Yamaha YZF-R1";
    mph.innerHTML = "2.7s";
    speed.innerHTML = "299 km/hr";
    range.innerHTML = "257 km";
};

s1000rr.onclick = function() {
    header.style.backgroundImage = "url('img/img_s1000.jpg')";
    model.innerHTML = "BMW S1000 RR";
    mph.innerHTML = "2.6s";
    speed.innerHTML = "299 km/hr";
    range.innerHTML = "257 km";
};

ktm1290.onclick = function() {
    header.style.backgroundImage = "url('img/img_ktm.jpg')";
    model.innerHTML = "KTM 1290 Super Duke";
    mph.innerHTML = "2.8s";
    speed.innerHTML = "290 km/hr";
    range.innerHTML = "241 km";
};

rsv4.onclick = function() {
    header.style.backgroundImage = "url('img/img_aprila.jpg')";
    model.innerHTML = "Aprilia RSV4";
    mph.innerHTML = "2.8s";
    speed.innerHTML = "299 km/hr";
    range.innerHTML = "241 km";
};