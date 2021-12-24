let line = document.getElementsByClassName('line');
let i = 0, k = 0;

let circle=document.getElementsByClassName('circle');

let prev = document.getElementById('btn1');

let next = document.getElementById('btn2');

prev.addEventListener('click', previous);
next.addEventListener('click', nexter);

document.getElementById('btn1').setAttribute('disabled', 'disabled');
document.getElementById('btn1').style.background = "gray";



function previous() {
    if (k == 0) k = 100;
    k-=2;
    if (k > 0) {
        line[i - 1].style.width = k + 'px';
        setTimeout(previous, 10);
    }
    else {
        line[i - 1].style.width = 0;
        i--;
        circle[i+1].style.border='2px solid gray';
    }

    if (i == 0) {
        document.getElementById('btn1').setAttribute('disabled', '');
        document.getElementById('btn1').style.background = "gray";
    }
    else if (i > 0) {
        document.getElementById('btn1').removeAttribute('disabled');
        document.getElementById('btn1').style.background = "rgb(0, 204, 255)";
    }

    if (i == 3) {
        document.getElementById('btn2').setAttribute('disabled', '');
        document.getElementById('btn2').style.background = "gray";
    }
    else if (i<3) {
        document.getElementById('btn2').removeAttribute('disabled');
        document.getElementById('btn2').style.background = "rgb(0, 204, 255)";
    }


}

function nexter() {
    line[i].style.width = k + 'px';

    k += 2;
    if (k < 102)
        setTimeout(nexter, 10);
    else {
        k = 0;
        i++;
        circle[i].style.border='2px solid rgb(0, 204, 255)';
    }

    if (i == 0) {
        document.getElementById('btn1').setAttribute('disabled', '');
        document.getElementById('btn1').style.background = "gray";
    }
    else if (i > 0) {
        document.getElementById('btn1').removeAttribute('disabled');
        document.getElementById('btn1').style.background = "rgb(0, 204, 255)";
    }


    if (i == 3) {
        document.getElementById('btn2').setAttribute('disabled', '');
        document.getElementById('btn2').style.background = "gray";
    }
    else if (i<3) {
        document.getElementById('btn2').removeAttribute('disabled');
        document.getElementById('btn2').style.background = "rgb(0, 204, 255)";
    }

}
