let mas1 = document.getElementsByClassName('text');
let j=[0,0,0];
setInterval(terka, 1);

function terka() {
    for (let i = 0; i < 3; i++) {
        mas1[i].innerHTML=Number(j[i]);
        j[i]+=i+1;
    }
    
}