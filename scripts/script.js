function insert (num) {

	let currentNumber = document.getElementById('calc-screen').innerHTML;

	document.getElementById('calc-screen').innerHTML = currentNumber + num;

}

function clean () {

	document.getElementById('calc-screen').innerHTML = '';

}

function erase () {

	let currentScr = document.getElementById('calc-screen').innerHTML;

	document.getElementById('calc-screen').innerHTML = currentScr.substring(0, currentScr.length -1);

}

function result () {

	let currentScr = document.getElementById('calc-screen').innerHTML;

	if (currentScr) {
		document.getElementById('calc-screen').innerHTML = eval(currentScr);
	} else {
		
		document.getElementById('calc-screen').innerHTML = "Digite algum cálculo...";
		
	}
}