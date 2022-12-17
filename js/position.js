var position = document.querySelector('img.position');

var arr = ['translateY(-5px)', 'translateY(0)', 'translateY(5px)'];

var j = 0;

setInterval(function () { 
    j++;
    if (j === 3) { 
        j = 0;
    }
    console.log(arr[j])
    position.style.transform = arr[j];
},500)