<!-- Task 1 : Calculator -->
	var calcpercentage = false;
	  var calcpercentagevalue = 0;
	  // Insertion (Numbers, Addition, subtraction, Mutliplication, Division)
         function insert(num){		 
		 if(num=="%"){
		 calcpercentage = true;
		 calcpercentagevalue = document.form.view.value;		 
		 }
         	document.form.view.value = document.form.view.value + num;
         }
		 // Equal to
         function equal(){
		 if(calcpercentage){
		var res= document.form.view.value.split("%");
		var exp = res[0];
         	var exp1 = res[1];
         	result = (exp1/100)*exp;
         	document.form.view.value = result;
		cleanPercentageValues();
         	return true;
		 }
         	var exp = document.form.view.value;
         	if(exp){
         		result = eval(exp);
         		document.form.view.value = result;
         		return true;
         	}
         }
		 // Clean
         function clean(){
         	exp = "";
         	document.form.view.value = "";
			cleanPercentageValues();
         	return true;
         }
		 // Percentage
		 function cleanPercentageValues(){
		  calcpercentage = false;
	      calcpercentagevalue = 0;
		  return true;
		 }
		 // Back option
         function back(){
         	var exp = document.form.view.value;
         	exp = exp.substring(0,exp.length-1);
         	document.form.view.value = exp;
         	return true;
         }
		 // Square root
         function sqrt(){
         	var exp = document.form.view.value;
         	exp = Math.round(Math.sqrt(exp)*1000)/1000;
         	document.form.view.value = exp;
         	return true;
         }
		 // Absolute value
         	function absolute(){
         	var exp = document.form.view.value;
         	exp = Math.abs(exp);
         	document.form.view.value = exp;
         	return true;
         }

<!-- Task 2 : Form Validation Function -->
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

<!-- Task 3: Palindrome & Anagram Checker -->
	
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
<!-- Task 4: Who will Survive? -->
	function calculate() {
	    console.log(CaluculateResult());
        alert(CaluculateResult());
    }

    function CaluculateResult() {
        var input1 = parseInt(document.getElementById("input1").value);
        var input2 = parseInt(document.getElementById("input2").value);
        input1 = input1 < 2 ? input1 : (input1 % 3);
        input2 = input2 < 2 ? input2 : (input2 % 3);
        //Rule 1
        if (input1 == input2) {
            return "Tie";
        }
        //Rule 2
        else if ((input1 == 0 && input2 == 1) || (input2 == 0 && input1 == 1)) {
            return "Human Wins...!!! :)";
        }
        //Rule 3
        else if ((input1 == 1 && input2 == 2) || (input2 == 1 && input1 == 2)) {
            return "Cocroach Wins...!!!!" ;
        }
        //Rule 4
        else if ((input1 == 0 && input2 == 2) || (input2 == 0 && input1 == 2)) {
            return "Nuclear bomb Wins...!!!";
        }

        return "No match found";
    }
<! -- Task 5:  Currency Converter -->
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
