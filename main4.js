let block=document.querySelectorAll('.block');


document.addEventListener('scroll',defer1);

function defer1(){

    const trigger=window.innerHeight/5 *4;

    block.forEach(box => {
        const boxTop=box.getBoundingClientRect().top;

        console.log(boxTop);

        if(boxTop<trigger){
            box.classList.add('show');
        }
        else{
            box.classList.remove('show');
        }
    });
}

console.log(k);