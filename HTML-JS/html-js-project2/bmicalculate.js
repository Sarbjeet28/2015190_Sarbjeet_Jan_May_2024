let subform = document.querySelector('form')

subform.addEventListener('submit', function(e){
    e.preventDefault()

    let height= parseInt(document.querySelector('#height').value)
    let weight= parseInt(document.querySelector('#weight').value)
    let result= document.querySelector('#results')
    let msg= document.querySelector('#msg')

    if(height==='' || height<0 || isNaN(height)){
       result.innerHTML='Please select valid height'
    }
    else if(weight==='' || weight<0 || isNaN(weight)){
        result.innerHTML='Please select valid weight'
     }
     else{
        let bmi =( weight / ((height * height) / 10000)).toFixed(2)
        result.innerHTML= bmi;

        if(bmi<18.6){
            msg.innerHTML = "Under Weight"
        }
        else if(bmi>=18.9 & bmi<=24.9){
            msg.innerHTML = "Normal Range"
        }
        else if (bmi>24.9){
            msg.innerHTML = "Over Weight"
        }

     }


});