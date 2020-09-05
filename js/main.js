
<!-- Form Validation Function -->
function checkvalid_form()
{
	var form = document.getElementById('form').value;
	var name = document.getElementById('name');
	var email = document.getElementById('email');
	var phonenumber = document.getElementById('phonenumber');

	var name_validators = /^[^0-9][0-9a-zA-Z]+$/;
	var email_validators = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	var phonenumber_validators = /^[0-9]\d{9}$/;
	
	if(!name.value.match(name_validators)){
		alert('Invalid Name! Cannot take a number as starting letter');
		return false;
	}

	if(!email.value.match(email_validators)){
		alert('Invalid Email-id! Has to have a @ and . in the email url');
		return false;
	}

	if(!phonenumber.value.match(phonenumber_validators)){
		alert('Invalid Phone Number! Has to be 10 digits, and no alphabets are allowed');
		return false;
	}
	
	alert('Registration Successful!!');
	return true
	}

<!-- Palindrome & Anagram Checker -->
	
	function palindrome(text){
	var inputString = text.toLowerCase();
        var reversedString = inputString.split("").reverse().join("");
        if (reversedString === inputString){
    	alert('Yes! Palindrome');
       }
      else{
    	alert('No! Not Palindrome');
       }
       } 


       function anagram(text1, text2){
	var string1 = text1.toLowerCase().split('').sort().join();
	var string2 = text2.toLowerCase().split('').sort().join(); 

	if(string1 == string2){
		alert('Yes! Anagram');
	}
	else{
		alert('No! Not Anagram');
	}
        }   
<! -- Currency Converter -->
	function currencyConverter(){		
		var amount = document.getElementById("input1").value;
		var fromcurrency = document.getElementById("from_currency");
		fromcurrency = fromcurrency.options[fromcurrency.selectedIndex].value;
		var tocurrency = document.getElementById("to_currency");
		tocurrency = tocurrency.options[tocurrency.selectedIndex].value;
		var query = fromcurrency + "_" + tocurrency;
		
		var url = "https://free.currconv.com/api/v7/convert?q=" + query + "&compact=ultra&apiKey=ecd96f38ab9cbbe978b7";
		
		// This is to make api call for currency converter.
		var request = new XMLHttpRequest()

request.open('GET', url, true)
request.onload = function () {
  var data = JSON.parse(this.response);
  if (request.status >= 200 && request.status < 400) {
	  document.getElementById("displayvalue").innerHTML  = parseInt(amount) * data[query];
  } else {
    alert('error')
  }
}

request.send();
		
}
