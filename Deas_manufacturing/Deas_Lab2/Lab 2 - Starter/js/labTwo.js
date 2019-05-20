var taxAmount = .115;
var mainOption = 'usePercent';
var i = 1;
var outputMessage = '<table border>';

if (mainOption === 'usePercent') {
	while (i < 21) {
		outputMessage += '<tr><th>' + i + ' * ' + taxAmount + '</th><td>'
		    + parseFloat((i * taxAmount)).toFixed(3) + '</td></tr>';
			i++;
}
} else {
  while (i < 21) {
		outputMessage += '<tr><th>' + i + ' * ' + .10 + '</th><td>'
		+ parseFloat((i * .10)).toFixed(3) + '</td></tr>';
		i++;
  }
}
outputMessage += '</table>'
var el = document.getElementById('outputArea');
el.innerHTML = outputMessage;