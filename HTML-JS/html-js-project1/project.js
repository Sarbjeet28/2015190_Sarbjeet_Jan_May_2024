let btns= document.querySelectorAll('.btn');
let body= document.querySelector('body');
btns.forEach(function(btn) {
    console.log(btn);
    btn.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        if(e.target.id==="grey"){
            body.style.backgroundColor= 'grey';
        }
        else if(e.target.id==="white"){
            body.style.backgroundColor= 'white';
        }
        else if(e.target.id==="blue"){
            body.style.backgroundColor= 'blue';
        }
        else if(e.target.id==="yellow"){
            body.style.backgroundColor= 'yellow';
        }
    });
});