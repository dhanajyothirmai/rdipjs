
<!-- Form Validation Function -->
function Form_Validation()
{
	var form = document.getElementById('form').value;
	var Name = document.getElementById('name');
	var Email = document.getElementById('email');
	var PhoneNumber = document.getElementById('phonenumber');

	var name_validators = /^[^0-9][0-9a-zA-Z]+$/;
	var email_validators = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var phonenumber_validators = /^[0-9]\d{9}$/;
	
	if(!username.value.match(name_validators)){
		alert('Invalid Name! Cannot take a number as starting letter');
		return false;
	}

	if(!email.value.match(email_validators)){
		alert('Invalid Email-id Has to have a ‘’@’ and “.” in the email url');
		return false;
	}

	if(!mobNumber.value.match(phonenumber_validators)){
		alert('Invalid Phone Number! Has to be 10 digits, and no alphabets are allowed');
		return false;
	}
	
	alert('Successful!!');
	return true
	}
