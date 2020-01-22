
// validating the form fields


function validateForm(event) 
{

    event.preventDefault();
    var nameValid = validateName();
    var orgValid = validateOrg()
    var emailValid = validateEmail();
    var mobileValid = validateMobile();
    var radioValid = validateRadio();
    var checkValid = validateCheck();
    var cityValid  = validateCity();
    var countryValid = validateCountry();
    var singlecheckValid = validateSingleCheck();


    if (!nameValid || !orgValid || !emailValid || !mobileValid || !radioValid || !checkValid || !cityValid || !countryValid || !singlecheckValid) 
    {
        return;
    }

// programatically submit the form > event.target.submit();
    event.target.submit();
}
   



// name validation 

function validateName() 
{
    var name = document.getElementById("firstName").value;
    var lname = document.getElementById("lastName").value;
    var namecheck = /^[a-z A-Z.]{3,30}$/;

    if (name == null || name == "") {

        document.getElementById('firsterror').innerHTML = "please enter the firstname";
        return false;
    } 
    
    else if((name.length <= 2) || (name.length > 20)) 
    {
        document.getElementById('firsterror').innerHTML =" ** name  length must be between 2 and 20";
        return false;  
    }
    else if(!isNaN(name))
   {
       document.getElementById('firsterror').innerHTML =" ** only characters are allowed";
        return false;
    }
    else if(namecheck.test(name))
    {
        document.getElementById('firsterror').innerHTML = " ";
    }
    if (lname == null || lname == "") 
    {
                            
        document.getElementById('lasterror').innerHTML = "please enter the lastname";
        return false;
    }
   
    else if((lname.length <= 2) || (lname.length > 20)) {
        document.getElementById('lasterror').innerHTML =" ** name  length must be between 2 and 20";
        return false;  
    }
    else if(!isNaN(lname)){
        document.getElementById('lasterror').innerHTML =" ** only characters are allowed";
        return false;
    }
    else if(namecheck.test(lname))
    {
        document.getElementById('lasterror').innerHTML = '';
       return true;
    }
}





// organisation validation

function validateOrg() 
{
    var organisation= document.getElementById("organ").value;
    if (organisation == null || organisation == "") {
    document.getElementById('organerror').innerHTML = "please enter the name of the organization";
    return false;
    }
    document.getElementById('organerror').innerHTML = '';
    return true;
}





// email validation


function validateEmail() 
{
    var email = document.getElementById("email").value;
    if (email == null || email == "") {
    document.getElementById('emailerror').innerHTML = "please enter the email";
    return false;
    }
    else if(email.indexOf('@') <= 0 ){
    document.getElementById('emailerror').innerHTML =" ** @ Invalid Position";
    return false;
    }
    else if((email.charAt(email.length-4)!='.') && (email.charAt(email.length-3)!='.')){
    document.getElementById('emailerror').innerHTML =" ** . Invalid Position";
    return false;
    }
    document.getElementById('emailerror').innerHTML = '';
    return true;
}





// mobile number validation
                    

function validateMobile()
{
    var phone = document.getElementById("Mobileno").value; 
    var regex = /[7-9]\d{9}/;
    if (phone == null || phone == "") {
    document.getElementById('mobileerror').innerHTML = "please enter the mobile number";
    return false;
    } 
    else if(!regex.test(phone))
    {
    document.getElementById('mobileerror').innerHTML = 'please enter valid phone number';
    return false;
    }
    document.getElementById('mobileerror').innerHTML = '';
    return true;
}








// validating radiobuttons

function validateRadio()
{

    var radiobuttons = document.getElementById("form").containers,
    radioerror = document.getElementById("radError"),
    isChecked = false,
    i;
    radioerror.innerHTML = "";

    for (i = 0; i < radiobuttons.length; i += 1) {
        if (radiobuttons[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        radioerror.innerHTML = "* You must choose atleast one.";
        return false;
    }

    return true;
}
  

   


// validating checkboxes


function validateCheck()
{

    var checkboxes = document.getElementById("form").container,
    checkerror = document.getElementById("checkError"),
    isChecked = false,
    i;


    checkerror.innerHTML = "";

    for (i = 0; i < checkboxes.length; i += 1) {
        if (checkboxes[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        checkerror.innerHTML = "* You must choose atleast one.";
        return false;
    }

    return true;

  
}

//city validation


function validateCity()
{
    var city = document.getElementById("form").container,
    errorSpan = document.getElementById("cityerror"),
    isChecked = false,
    i;

    errorSpan.innerHTML = "";

    for (i = 0; i < city.length; i += 1) {
        if (city[i].checked) {
            isChecked = true;
            break;
        }
    }

    if (!isChecked) {
        errorSpan.innerHTML = "* please select atleast one";
        return false;
    }

    return true;
}





// country validation

function validateCountry()
{

    var city = document.getElementById("form").container,
    errorSpan = document.getElementById("countryerror"),
    isChecked = false,
    i;
    errorSpan.innerHTML = "";

    for (i = 0; i < city.length; i += 1) {
    if (city[i].checked) {
        isChecked = true;
        break;
    }
    }

   if (!isChecked) {
    errorSpan.innerHTML = "* please choose atleast one";
    return false;
   }

    return true;

   
   
}



 //single checkbox field validation

function validateSingleCheck()
{
   
    var singlecheck = document.getElementById('singlecheck').checked
    if(singlecheck == false )
    {
        document.getElementById('singlecheckerror').innerHTML =" this is required field";
        return false;
    }
    else
    {
        document.getElementById('singlecheckerror').innerHTML = " ";
    }
}
 
