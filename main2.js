let button = document.getElementsByClassName('button');
let j = [0];
for(let i=0;i<j.length;i++) j[i]=0;
button[0].addEventListener('click', function(){
    title(0);
});



for(let i=0;i<button.length;i++){
    if(i==0){
        button[0].addEventListener('click', function(){
            title(0);
        });
    }
    button[i].addEventListener('click', function(){
        title(i);
    });
}


function title(i) {
    let k = document.getElementsByClassName('subtile');
    let k1=document.getElementsByClassName('block');
    if (j[i] == 0) {
        k1[i].style.height = '100px';
        button[i].innerHTML = '<img src="images/x-icon.png" alt="" width="25">';
        k1[i].style.background=`url('../19\ день/images/phone.jpg')`;
        k1[i].style.backgroundRepeat='no-repeat';
        k[i].style.backgroundPosition='180%';
        j[i]=1;
    } else {
        k1[i].style.height = '60px';
        button[i].innerHTML = '<img src="images/arrow.png" alt="" width="25">';
        j[i]=0;
        k1[i].style.background=``;
        k[i].style.backgroundPosition='180%';
    }   
}