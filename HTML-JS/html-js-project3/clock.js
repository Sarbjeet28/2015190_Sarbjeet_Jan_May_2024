let clock= document.querySelector('#clock');

setInterval((date) => {
    date= new Date();
    // clock.innerHTML= date.toLocaleString();
    clock.innerHTML= date.toLocaleTimeString();
    
}, 1000);