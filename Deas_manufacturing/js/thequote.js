function getPrice() {


var elInput, elOutput, standard, plus, heavy;

elInput = document.getElementById('input');

elOutput = document.getElementById('qty');

standard = 30;
plus = 60;
heavy = 90;

var pSelect = this.options[this.selectedIndex].value;
if (pSelect == "standard") {
	elOutput.textContent = 'Total Price: $ ' + (standard * elInput.value);
}if (pSelect == "plus") {
	elOutput.textContent = 'Total Price: $ ' + (plus * elInput.value);
} if (pSelect == "heavy") {
	elOutput.textContent = 'Total Price: $ ' + (heavy * elInput.value);
}
}



var elProduct = document.getElementById('product');
elProduct.addEventListener('change', getPrice, false);
