let m;
let i=0;
let key="We love Programming!";
func();

function func(){
    m=document.getElementById('out').value;
    let speed=300/m;
    if(i!=key.length){
        document.getElementById('input').innerHTML+=key[i];
        i++;
    }
    else{
        document.getElementById('input').innerHTML="";
        i=0;
    }
    setTimeout(func,speed);
}

function random(min,max){
    return Math.floor(Math.random() * (max + min -1)) - min;
}