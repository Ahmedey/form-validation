// select all elements

const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const form = document.querySelector("#form");


const showError = (input,message) => {
    // let parentElement = input.parentElement;
    // parentElement.classList = 'form-control error';
    // const small = parentElement.querySelector("small");
    // const successIcon = parentElement.querySelectorAll("i")[0];
    // const errorIcon = parentElement.querySelectorAll("i")[1];
    // errorIcon.style.visibility = 'visible';
    // successIcon.style.visibility = 'hidden';
    // small.innerText = message;

    let parentElement = input.parentElement;
    parentElement.classList = 'form-control error';
    const small = parentElement.querySelector("small");
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = 'visible';
    successIcon.style.visibility = 'hidden';
    small.innerText = message;
    
}

const showSuccess = (input) => {
    let parentElement = input.parentElement;
    parentElement.classList = 'form-control success';
    const successIcon = parentElement.querySelectorAll("i")[0];
    const errorIcon = parentElement.querySelectorAll("i")[1];
    errorIcon.style.visibility = 'hidden';
    successIcon.style.visibility = 'visible';
    
    
}

const checkEmpty = (elements) => {
        elements.forEach((element) => {
            if(element.value === ''){
                showError(element, 'input required');
            }else{
                showSuccess(element);
            }

        });

}

const checkEmail = (email) =>{
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if(reg.test(email.value)){
        showSuccess(email);
    }else{
        showError(email, 'Invalid Email');
    }
}
const checkPasswordLength = (input, min, max) => {
    if(input.value.length < min){
        showError(input, `password length should be at least more than ${min} character`);
    }else if (input.value.length > max){
        showError(input, `password length should not be more than ${max} character`);

    }else{
        showSuccess(input);
    }
}

form.addEventListener("submit", (event) =>{
    event.preventDefault();
    
    checkEmpty( [username,email,password,confirmPassword]);

    checkEmail(email);

    checkPasswordLength(password, 6,20);
});