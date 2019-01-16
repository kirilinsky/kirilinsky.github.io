let inp1 = document.getElementById('inp1')
let inp2 = document.getElementById('inp2');
let select = document.getElementById('currency');
let lbl = document.getElementById('lbl');
inp1.addEventListener('change', func);
select.addEventListener('change', func);
select.addEventListener('click', func2);
let currency = ['Select currency please',75,78,105];
let currency2 = ['Select currency please','USD','Euro','Pounds'];
let currency3 = [' ','$','€','£'];
function func() {
	let j = select.value ;
	let x = inp1.value;
	if(j == 0 || '') {
		inp2.value = currency[j];
		lbl.innerHTML = '<b style="color:red;">Please, select currency and retype your value</b>';
	} else if(isNaN(x)) {
		lbl.innerHTML = '<b style="color:red;">Please, select currency and retype your value <br> <span style="text-decoration:underline;font-size:19px;font-variant:small-caps;">only at numeric</span</b>';
	} else {
	inp2.value = x * parseInt(currency[j]);
	lbl.innerHTML = 'Your total in ' + currency2[j] + ' ' + currency3[j];
	} 
}

function func2() {
	select.size = '4';
	select.removeEventListener('click', func2);
	select.addEventListener('click', func3);
}
function func3() {
	select.size = '1';
	select.removeEventListener('click', func3);
	select.addEventListener('click', func2);
}