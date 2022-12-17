var navBoxes = document.querySelectorAll('.nav_box');

for (var i = 0; i < navBoxes.length; i++) {
    navBoxes[i].addEventListener('click', function () {
        location.href = "menu.html";
    })
}