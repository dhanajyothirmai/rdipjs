
<!-- Form Validation Function -->
function Form_Validation()
{
	var form = document.getElementById('form').value;
	var Name = document.getElementById('Name');
	var E-mail = document.getElementById('E-mail');
	var PhoneNumber = document.getElementById('PhoneNumber');

	var name_validators = /^[^0-9][0-9a-zA-Z]+$/;
	var email_validators = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var phonenumber_validators = /^[0-9]\d{9}$/;
	
	if(!username.value.match(name_validators)){
		alert('Invalid Name! Cannot take a number as starting letter');
		return false;
	}

	if(!email.value.match(var email_validators)){
		alert('Invalid Email-id Has to have a ‘’@’ and “.” in the email url');
		return false;
	}

	if(!mobNumber.value.match(var phonenumber_validators)){
		alert('Invalid Phone Number! Has to be 10 digits, and no alphabets are allowed');
		return false;
	}
	
	alert('Successful!!');
	return true
	}
