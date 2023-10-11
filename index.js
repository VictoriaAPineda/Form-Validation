// check for empty input boxes
// check for each criteria
function validateFunction(){

    // Get input from form elements
    const firstNameEl = document.querySelector("#fName").value;
    const lastNameEl = document.querySelector("#lName").value;
    const emailEl = document.querySelector("#email").value;
    const phoneEl = document.querySelector("#phone").value;
    const passwordEl = document.querySelector("#pwd").value;
    const confirmPasswordEl = document.querySelector("#confirmPwd").value;

    // Error pop ups
    const firstNameErrorEl = document.querySelector("#fName_error_msg");
    const lastNameErrorEl = document.querySelector("#lName_error_msg");

    // Tests true if only contains alphabetical characters OR is empty(*)
    // "Error specific" message will not display if input is empty because
    // there is not input to examine. 
    let nameRegex = /^[a-zA-Z]*$/;
    
    // [1] Checks for any empty fields [done]
    if(firstNameEl == "" || lastNameEl == "" || emailEl == "" || phoneEl == "" || passwordEl == "" || confirmPasswordEl == "") {
        window.alert("Please fill out all input boxes in order to submit.");
    } 

    // [2] Check Names - accepts only letter characters
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


  
  

}
