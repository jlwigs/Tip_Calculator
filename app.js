window.onload = function()
	//the function called when Calculate button is clicked.
	{
		/*calling a function calculateTip
		which will calculate the tip for the bill.*/
		document.querySelector('#calculate').onclick = calculateTip;
	}

function calculateTip() {
	/*assign values of ID : amount, person and service to
	variables for further calculations.*/
	let amount = document.querySelector('#amount').value;
	let persons = document.querySelector('#persons').value;
	let service = document.querySelector('#services').value;

	console.log(service);
	/*if statement will work when user presses
		calculate without entering values. */
	//so will display an alert box and return.
	if (amount === '' && service === 'Select') {
		alert("Please enter valid values");
		return;
	}

	//now we are checking number of persons
	if (persons === '1'){
	//if there is only one person then we need not to display each.
		document.querySelector('#each').style.display = 'none';
		document.querySelector('#per_person').style.display = 'none';
	}
	else {
	//if there are more than one person we will display each.
		document.querySelector('#each').style.display = 'block';
		document.querySelector('#per_person').style.display = 'block';
	}

	let tip = (amount * service);
	tip = tip.toFixed(2);
	let grandtotal = (Number(amount) + Number(tip)) / Number(persons);
	grandtotal = grandtotal.toFixed(2);
	let single = (Number(amount) + Number(tip))
	single = single.toFixed(2);
	//finally displaying the tip value
	document.querySelector('.float').style.display = 'block';
	document.querySelector('#total').innerHTML = single;

	document.querySelector('.float').style.display = 'block';
	document.querySelector('#tip').innerHTML = tip;

	document.querySelector('.float').style.display = 'inline-block';
	document.querySelector('#per_person').innerHTML = '$' + grandtotal;


}
