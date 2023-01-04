const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/


form.addEventListener('submit', (event) =>{
    event.preventDefault();
    nameValidate();
    emailValidate();
    mainPasswordValidate();
    comparePassword();
})

setError = (index) => {
    campos[index].style.border = '2px solid red';
    spans[index].style.display= 'block'
}

removeError = (index) => {
    campos[index].style.border = '';
    spans[index].style.display= 'none'
}

nameValidate = () =>{
    if(campos[0].value.length < 3){
        setError(0)
    }
    else{
        removeError(0)
    }
}

emailValidate = () =>{
    if(!emailRegex.test(campos[1].value)){
       setError(1);
    }
    else{
        removeError(1);
    }
}


mainPasswordValidate = () =>{
    if(campos[2].value.length < 8){
        setError(2)
    }
    else{
        removeError(2);
        comparePassword();
    }
}

comparePassword = () =>{
    if(campos[2].value == campos[3].value && campos[3].value.length >= 8){
        removeError(3)
    }
    else{
        setError(3)
    }
}




let bnt = document.getElementById('visible');

bnt.addEventListener('click',()=>{
    let input = document.getElementById('input')

    if (input.type === "password"){
        input.type = "text"

        bnt.classList.remove("fa-eye-slash");
        bnt.classList.add("fa-eye");
    }
    else{
        input.type = "password"

        bnt.classList.remove("fa-eye");
        bnt.classList.add("fa-eye-slash");
    }

})