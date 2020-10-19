var regexName=/^[a-zA-Z]+$/;
var isValidFirstName=false;
var isValidLastName=false;
var regexEmail=/^[a-zA-z0-9.-_]+@[a-zA-Z]+\.(com|org)$/;
var isValidEmail=false;
var regexMobile=/^[0-9]+$/;
var isValidMobile=false;
var isValidCreatePW=false;
var isValidConfirmPW=false;



function onLoad(){
  var firstNameWarning=document.getElementById("firstNameWarning");
  var lastNameWarning=document.getElementById("lastNameWarning");
  var emailWarning=document.getElementById("emailWarning");
  var mobileWarning=document.getElementById("mobileWarning");
  var createWarning=document.getElementById("createWarning");
  var confirmWarning=document.getElementById("confirmWarning");
}

function onSubmitClick(){
  
  //FIRST NAME VALIDATIONNN
  var firstName=document.getElementById("firstName").value;
  if(!regexName.test(firstName) && firstName !=""){
    firstNameWarning.classList.remove("warning-hide");
    firstNameWarning.setAttribute('title','only alphabates are allowed');
    isValidLastName=false;

  }

  else if(regexName.test(firstName)){
    firstNameWarning.classList.add("warning-hide");
      isValidLastName=true;
  }

  else if(firstName==""){
    firstNameWarning.classList.remove("warning-hide");
    firstNameWarning.setAttribute('title','First name is required');
      isValidLastName=false;
  }





  //FIRST NAME VALIDATIONNN
  var lastName=document.getElementById("lastName").value;
  if(!regexName.test(lastName) && lastName !=""){
    lastNameWarning.classList.remove("warning-hide");
    lastNameWarning.setAttribute('title','only alphabates are allowed');
    isValidFirstName=false;

  }

  else if(regexName.test(lastName)){
    lastNameWarning.classList.add("warning-hide");
      isValidFirstName=true;
    

  }

  else if(lastName==""){
    lastNameWarning.classList.remove("warning-hide");
    lastNameWarning.setAttribute('title','First name is required');
      isValidFirstName=false;
  }


  //email validation
  var email=document.getElementById('email').value;
  if(!regexEmail.test(email) && email !=""){
    emailWarning.classList.remove("warning-hide");
    emailWarning.setAttribute('title','invalid email adress');
    isValidEmail=false;
  }
  else if(regexEmail.test(email)){
    emailWarning.classList.add("warning-hide");
    isValidEmail=true;
  }

  else if(email==""){
    emailWarning.classList.remove("warning-hide");
    emailWarning.setAttribute('title','Email is required');
    isValidEmail=false;
  }

  //mobile validation
  var mobile=document.getElementById("mobile").value;
  if(!regexMobile.test(mobile) || mobile.length < 10){
   mobileWarning.classList.remove("warning-hide");
    mobileWarning.setAttribute('title','invalid mobile number');
    isValidMobile=false;

  }

  else if(regexMobile.test(mobile) && mobile.length == 10){
    mobileWarning.classList.add('warning-hide');
    isValidMobile=true;
  }
  else if(mobile ==""){
    mobileWarning.classList.remove("warning-hide");
    mobileWarning.setAttribute('title','Mobile number is required');
    isValidMobile=false;
  }


  var createPW=document.getElementById("createPW").value;
  if(createPW==""){
    createWarning.classList.remove("warning-hide");
    createWarning.setAttribute('title','password cannot be empty');
    var isValidCreatePW=false;
  }
  else if(createPW.length<8){
    createWarning.classList.remove("warning-hide");
    createWarning.setAttribute('title','length of password must be greate thn 7');
    var isValidCreatePW=false;

  }

  else{
    createWarning.classList.add("warning-hide");
    var isValidCreatePW=true;
  }

  //confirms password
  var ConfirmPW=document.getElementById('ConfirmPW').value;
  if(ConfirmPW!=createPW){
    confirmWarning.classList.remove("warning-hide");
    confirmWarning.setAttribute('title','password mismatch');
    var isValidConfirmPW=false;

  }
  else{
    confirmWarning.classList.add("warning-hide");
    var isValidConfirmPW=true;
  }

  if(isValidFirstName && 
    isValidLastName &&
    isValidEmail &&
    isValidMobile &&
    isValidCreatePW &&
    isValidConfirmPW){
      alert("sucess");
      document.getElementById("signup-form").reset();
    }




}
