document.addEventListener('keydown',function(){
    clicka(event);
});



function clicka(event){
    document.getElementById('block').innerHTML=event.key;
    document.getElementById('block_1').innerHTML=event.keyCode;
    document.getElementById('block_2').innerHTML=event.code;
}