
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

 
    
    // [1] Checks for any empty fields 
    if(firstNameEl == "" || lastNameEl == "" || emailEl == "" || phoneEl == "" || passwordEl == "" || confirmPasswordEl == "") {
        window.alert("Please fill out all input boxes in order to submit.");
    } 

    // [2] Check Names - accepts only letter characters
    // Tests true if only contains alphabetical characters OR is empty(*)
    let nameRegex = /^[a-zA-Z]*$/;
    // "Error specific" message will not display if input is empty because
    // there is no input to examine. 
    if (nameRegex.test(firstNameEl)) {
        firstNameErrorEl.textContent = ""; // removes error if user fixed it.   
    } else {
        firstNameErrorEl.textContent = "* Please enter only letters";
    }
    if (nameRegex.test(lastNameEl)) {
        lastNameErrorEl.textContent = "";
    } else {
        lastNameErrorEl.textContent = "* Please enter only letters";
    }

    // [3] Check for correct email format
    // username + @(domain name.) + domain ending <- ends with 2-4 characters(ex: com / net)
    let emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})*$/;
    if(emailRegex.test(emailEl)){
        emailErrorEl.textContent = "";
    }else{
        emailErrorEl.textContent = "Please enter a valid email format.";
    }


  
  

}
