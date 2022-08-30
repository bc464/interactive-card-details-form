const fullName = document.querySelector("#fullName");
const cardNumber = document.querySelector("#cardNum");
const expireDate = document.querySelector(".inputExpDate");
const expireYear = document.querySelector(".inputExpYear");
const inputCVC = document.querySelector(".inputCvc");
const errorCardNum =  document.querySelector(".error-text-cardNum");
const errorExpireDate = document.querySelector(".error-text-expireDate");
const errorCVC = document.querySelector(".error-text-inputCVC");

const border = "1px solid red";
const borderOld = "1px solid lightgrey"

// CHECKING FULLNAME FIELD

const checkFullName = () => {
	let valid = false;
	if(fullName.value === "") {
		
		fullName.style.border = border;
	} else {
		valid = true;
		fullName.style.border = borderOld;
	}
	return valid
}

// CHECKING CARD NUMBER FIELD

const checkCardNumber = () => {
	let valid = false;
	let numbers = /^\d{16}$/
	if (!cardNumber.value.match(numbers)) {
		
		errorCardNum.style.display = "block";
		cardNumber.style.border = border; 
		
	} else {
		valid = true;
		errorCardNum.style.display = "none";
		cardNumber.style.border = borderOld

	}
	return valid;
}

// CHECKING EXPIRE DATE FIELD

const checkExpireDate = () => {
	let valid = false;
	let numbers = /^\d{2}$/
	if (!expireDate.value.match(numbers)) {
		
		errorExpireDate.style.display = "block";
		expireDate.style.border = border; 
		
	} else {
		valid = true;
		errorExpireDate.style.display = "none";
		expireDate.style.border = borderOld

	}
	return valid;
}

// CHECKING EXPIRE YEAR FIELD

const checkExpireYear = () => {
	let valid = false;
	let numbers = /^\d{2}$/
	if (!expireYear.value.match(numbers)) {
		
		errorExpireDate.style.display = "block";
		expireYear.style.border = border; 
		
	} else {
		valid = true;
		errorExpireDate.style.display = "none";
		expireYear.style.border = borderOld

	}
	return valid;
}

// CHECKING CVC INPUT FIELD

const checkInputCVC = () => {
	let valid = false;
	let numbers = /^\d{3}$/
	if (!inputCVC.value.match(numbers)) {
		
		errorCVC.style.display = "block";
		inputCVC.style.border = border; 
		
	} else {
		valid = true;
		errorCVC.style.display = "none";
		inputCVC.style.border = borderOld

	}
	return valid;
}


const displayPayment = document.querySelector(".payment-display");
const resultPage = document.querySelector(".result-page");

const confirmBtn = document.querySelector(".btn");
const continueBtn = document.querySelector(".btn-continue");

// CONFIRM BUTTON FUNCTION

confirmBtn.addEventListener("click", function(e) {
	e.preventDefault();
	let isFullNameValid = checkFullName();
	let isCheckCardNumberValid = checkCardNumber();
	let isExpireDateValid = checkExpireDate();
	let isExpireYearValid = checkExpireYear();
	let isInputCvcValid = checkInputCVC();

	let isFormValid = isFullNameValid && isCheckCardNumberValid &&
		isExpireDateValid && isExpireYearValid && isInputCvcValid;
	
	if(isFormValid) {
	
	
	displayPayment.style.display = "none";
	resultPage.style.display = "block";
	
	}
});

// CONTINUE BUTTON FUNCTION

continueBtn.addEventListener("click", function(){
	resultPage.style.display = "none";
	displayPayment.style.display = "block";
	cardNumber.value = "";
	fullName.value = "";
	expireDate.value = "";
	expireYear.value = "";
	inputCVC.value ="";
	
})