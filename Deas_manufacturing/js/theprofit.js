function calculate() {
var numShares, years, rate;
var sharePrice = 65;
numShares = document.getElementById('shares');
years = document.getElementById('time');
rate = 100;
var i = 1;
var output = '<table border>';



	while (i <= years.value ) {	
	output +='<tr><th>' + 'Year ' + i + ' shares: ' + numShares.value + ' * ' + sharePrice + '</th><td>'
		    + parseFloat((i *( numShares.value * sharePrice ))).toFixed(2) + '</td></tr>';output
			i++;
}


output += '</table>'
var el = document.getElementById('profit');
el.innerHTML = output;


}

var elButton = document.getElementById('submit');
elButton.addEventListener('click', calculate, false);
