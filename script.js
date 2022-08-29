const displayPayment = document.querySelector(".payment-display");
const resultPage = document.querySelector(".result-page");

const confirmBtn = document.querySelector(".btn");
const continueBtn = document.querySelector(".btn-continue");


confirmBtn.addEventListener("click", function(e) {
	e.preventDefault();

	
	

	displayPayment.style.display = "none";
	resultPage.style.display = "block";
});

continueBtn.addEventListener("click", function(){
	resultPage.style.display = "none";
	displayPayment.style.display = "block";
})