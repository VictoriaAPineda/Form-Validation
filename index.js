
function validateFunction(){

    // Get input from form elements
    const firstNameEl = document.querySelector("#fName").value;
    const lastNameEl = document.querySelector("#lName").value;
    const emailEl = document.querySelector("#email").value;
    const phoneEl = document.querySelector("#phone").value;
    const passwordEl = document.querySelector("#pwd").value;
    const confirmPasswordEl = document.querySelector("#confirmPwd").value;

    // Error pop ups locations
    const firstNameErrorEl = document.querySelector("#fName_error_msg");
    const lastNameErrorEl = document.querySelector("#lName_error_msg");
    const emailErrorEl = document.querySelector("#email_error_msg");
    const phoneErrorEl = document.querySelector("#phone_error_msg");
    const passwordErrorEl = document.querySelector("#password_error_msg");

    // tests pass?
    let emptyFieldsTest = true;
    let firstNameTest = false;
    let lastNameTest = false;
    let emailTest = false;
    let phoneTest= false;
    let passwordTest = false;
    let allTestsPassed = false;

    // [1] Checks for any empty fields 
    if(firstNameEl == "" || lastNameEl == "" || emailEl == "" || phoneEl == "" || passwordEl == "" || confirmPasswordEl == "") {
        window.alert("Please fill out all input boxes in order to submit.");
    }else{
        emptyFieldsTest = false;
    }

    // [2] Check Names - accepts only letter characters
    // Tests true if only contains alphabetical characters OR is empty(*)
    let nameRegex = /^[a-zA-Z]*$/;
    // "Error specific" message will not display if input is empty because
    // there is no input to examine. 
    if (nameRegex.test(firstNameEl)) {
        firstNameErrorEl.textContent = ""; // removes error if user fixed it. 
        firstNameTest = true  
    } else {
        firstNameErrorEl.textContent = "* Please enter only letters";
    }
    if (nameRegex.test(lastNameEl)) {
        lastNameErrorEl.textContent = "";
        lastNameTest = true;
    } else {
        lastNameErrorEl.textContent = "* Please enter only letters";
    }

    // [3] Check for correct email format
    // username + @(domain name.) + domain ending <- ends with 2-4 characters(ex: com / net)
    let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})*$/;
    if(emailRegex.test(emailEl)){
        emailErrorEl.textContent = "";
        emailTest = true;
    }else{
        emailErrorEl.textContent = "Please enter a valid email format";
    }

    // [4] Check phone number 
    // Clean up input in case of (), -, and spaces
    let cleanPhoneNumber = phoneEl.replaceAll(/[()\s-]/g,"");
    // Check that input only contains numbers
    let numOnlyRegex = /^(\d)*$/;
    if (numOnlyRegex.test(cleanPhoneNumber)) {
        phoneErrorEl.textContent = "";
        phoneTest = true;
   
    } else {
        phoneErrorEl.textContent = "*Please type only numbers"
    }

    // [5] Check and compare passwords
    if(passwordEl ===  confirmPasswordEl){
        passwordErrorEl.textContent = "";
        passwordTest = true;
    }else{
        passwordErrorEl.textContent = "*Passwords do not match"
    }

    // All tests pass?
    if(emptyFieldsTest == false && firstNameTest == true && lastNameTest == true && emailTest == true && phoneTest == true && passwordTest == true){
        allTestsPassed = true;
        window.confirm("Account succesffuly created!");
        resetForm();
          
    }
}

// Clears out form
function resetForm(){
    document.querySelector("#fName").value =  '';
    document.querySelector("#lName").value = '';
    document.querySelector("#email").value = '';
    document.querySelector("#phone").value = '';
    document.querySelector("#pwd").value = '';
    document.querySelector("#confirmPwd").value = '';
}
