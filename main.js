let slider=document.getElementById('img1');
let i=1;

let left=document.getElementById('left');
let right=document.getElementById('right');
function slid(){

    slider.style.background=`url('../19\ день/images/${i}.jpg')`;
    document.body.style.background=`url('../19\ день/images/${i}.jpg')`;
    document.body.style.background=`url('../19\ день/images/${i}.jpg')`;
    document.body.style.backgroundSize=`cover`;
    document.body.style.backgroundRepeat=`no-repeat`;
    
    
}

left.addEventListener('click',left1);

right.addEventListener('click',right1);

function left1(){
    if(i>1){
    i--;
    slid();
    }
    document.html.style.background=`images/${i}.jpg`

}

function right1(){
    if(i<4){
    i++;
    slid();
    }
}