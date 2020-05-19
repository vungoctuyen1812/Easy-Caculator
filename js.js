var inputedData = document.getElementById('inputed-data');
var inputData = document.getElementById('input-data');
var firstNumb;
var secondNumb;
var currentOption = '';
var result;
var addBtn = document.getElementById('add');
var subBtn = document.getElementById('sub');
var mulBtn = document.getElementById('mul');
var diviBtn = document.getElementById('divi');
var equalBtn = document.getElementById('equal');
var resetBtn = document.getElementById('reset');
//option
resetBtn.addEventListener('click', reset);
addBtn.addEventListener('click', add)
subBtn.addEventListener('click', sub)
mulBtn.addEventListener('click', mul)
diviBtn.addEventListener('click', divi)

equalBtn.addEventListener('click', equal)
function reset(){
	inputData.innerText = '';
	currentOption = '';
	inputedData.innerText = '';

}

[...document.getElementsByClassName('number-button')].forEach((item) => 
	item.addEventListener('click', function(){
		appendNumber(item);
	}))

function appendNumber(item){
	inputData.innerText += item.innerText;
	
}




function add(){
	if(inputData.innerText === ''){
		alert('Please Type Your Number To Caculate')
	}else{
		currentOption = '+';
		firstNumb = parseInt(inputData.innerText)
		inputedData.innerText = inputData.innerText + ' +';
		inputData.innerText = '';
	}
	
}

function sub(){
	if(inputData.innerText === ''){
		alert('Please Type Your Number To Caculate')
	}else{
		currentOption = '-';
		firstNumb = parseInt(inputData.innerText)
		inputedData.innerText = inputData.innerText + ' -';
		inputData.innerText = '';
	}
	
}

function mul(){
	if(inputData.innerText === ''){
		alert('Please Type Your Number To Caculate')
	}else{
		currentOption = '*';
		firstNumb = parseInt(inputData.innerText)
		inputedData.innerText = inputData.innerText + ' *';
		inputData.innerText = '';
	}
	
}

function divi(){
	if(inputData.innerText === ''){
		alert('Please Type Your Number To Caculate')
	}else{
		currentOption = '/';
		firstNumb = parseInt(inputData.innerText)
		inputedData.innerText = inputData.innerText + ' /';
		inputData.innerText = '';
	}
	
}

function equal(){
	secondNumb = parseInt(inputData.innerText);
	if(currentOption === '-'){
		inputedData.innerText = firstNumb +' - '+ secondNumb;
		inputData.innerText = firstNumb - secondNumb;
	}else if(currentOption === '+'){
		inputedData.innerText = firstNumb +' + '+ secondNumb;
		inputData.innerText = firstNumb + secondNumb;
	}else if(currentOption === '*'){
		inputedData.innerText = firstNumb +' * '+ secondNumb;
		inputData.innerText = firstNumb * secondNumb;
	}else if(currentOption === '/'){
		inputedData.innerText = firstNumb +' / '+ secondNumb;
		inputData.innerText = firstNumb / secondNumb;
	}
}
