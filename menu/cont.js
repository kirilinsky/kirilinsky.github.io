var orderOf = document.getElementById('order_of');
var wrap = document.getElementById('wrap');
var cusname = document.getElementById('cusname');
var select = document.getElementById('customer');
select.addEventListener('change', setName);

//set name (for h2)
function setName() {
	if(select.value == ''){
		cusname.innerHTML = '';
	} else if(select.value != '') {
		var name = select.value;
		cusname.innerHTML = ': ' + select.value;
	} 
	//egg
    if(select.value == 'Elon Musk') {
		alert('Как тебе жаркое, Илон Маск?');
	}
}

//days of week
var days = ['- of sunday -','- of monday -','- of tuesday -','- of wednsday -','- of thursday -','- of friday -','- of saturday -'];
var today = document.getElementById('today');
var now = new Date();
var nowDay = now.getDay();
today.innerHTML = days[nowDay];
//get modal
var modal = document.getElementById('modal');
var btnChangeDay = document.getElementById('changeDay');
var btnSetToday = document.getElementById('setToday');
btnChangeDay.addEventListener('click', getModal);
function getModal() {
	modal.style.display = 'flex';
	wrap.style.filter = 'blur(10px) grayscale(50%)';
}
//select day in modal
var selectDay = document.getElementById('selectDay');
selectDay.addEventListener('change', selectedTimeout);
function selectedTimeout() {
	setTimeout(changeDay, 700);
}
function changeDay() {
	today.innerHTML = days[selectDay.value];
	modal.style.display = 'none';
	wrap.style.filter = 'blur(0) grayscale(0)';
	createLists(selectDay.value);
	selectDay.value = document.getElementById('defaultOption');
}
btnSetToday.addEventListener('click', setToday);
function setToday() {
	today.innerHTML = days[nowDay];
	modal.style.display = 'none';
	wrap.style.filter = 'blur(0) grayscale(0)';
	createLists(nowDay);
}
//clear all 
var btnClear = document.getElementById('clear');
btnClear.addEventListener('click', clearAll); 

function clearAll() {

	cusname.innerHTML = '';
	select.value = '';
	today.innerHTML = days[nowDay];
	createLists(nowDay);
	while (table.hasChildNodes()) {
	    table.removeChild(table.lastChild);
	}
}

//week menu
var firstDishes = [
			[/*0*/'первое','Гаспачо','Чеддар','Тыква'],
			[/*1*/'первое','Борщ','Солянка','Окрошка'],
			[/*2*/'первое','Дачный','Соевый','Окрошка'],
			[/*3*/'первое','Крестьянский','Солянка','Гороховый'],
			[/*4*/'первое','Чеддар','Тайский','Борщ'],
			[/*5*/'первое','Борщ','Солянка','Гаспачо'],
			[/*6*/'первое','Зеленый','Тыква','Окрошка']
		   ];
var secondDishes = [
			[/*0*/'второе','Ризотто','Кускус','Салат'],
			[/*1*/'второе','Картофель','Овощи на гриле','Салат'],
			[/*2*/'второе','Пашот','Ризотто','Нут'],
			[/*3*/'второе','Ризотто','Салат','Горошек'],
			[/*4*/'второе','Сырная тарелка','Плов','Ризотто'],
			[/*5*/'второе','Паста','Кальмар','Кускус'],
			[/*6*/'второе','Кускус','Морошка','Салат']
		   ];
var drinksList = [
			[/*0*/'напитки','Морс','Ягода','Апельсин'],
			[/*1*/'напитки','Смузи','Сок','Сироп'],
			[/*2*/'напитки','Сироп','Сок','Морс'],
			[/*3*/'напитки','Кофе','Чай','Сироп'],
			[/*4*/'напитки','Морс','Чай','Кофе'],
			[/*5*/'напитки','Сок','Морс','Сироп'],
			[/*6*/'напитки','Кофе','Чай','Сок']
		   ];		   

//list creating
function createLists(nn) {
	//#1st list
	var first = document.getElementById('ulmenu_fst');
	while (first.hasChildNodes()) {
	    first.removeChild(first.lastChild);
	}
	for(var i = 0;i < firstDishes[nn].length;i++) {
		var li = document.createElement('li');
		li.innerHTML = firstDishes[nn][i];
		li.classList.toggle('cat_fst');
		//zebra
		if(i > 0 && i % 2 == 1) {
			li.style.background = '#E8C8A3';
			li.style.color = '#362E30';
		}
		if(i > 0) {
			li.addEventListener('click', addToOrder);
		}
		
		first.appendChild(li);
	}
	//#2nd list
	var second = document.getElementById('ulmenu_scn');
	while (second.hasChildNodes()) {
	    second.removeChild(second.lastChild);
	}
	for(var z = 0;z < secondDishes[nn].length;z++) {
		var li = document.createElement('li');
		li.innerHTML = secondDishes[nn][z];
		li.classList.toggle('cat_scn');
		//zebra
		if(z > 0 && z % 2 == 1) {
			li.style.background = '#E8C8A3';
			li.style.color = '#362E30';
		}

		if(z > 0) {
			li.addEventListener('click', addToOrder);
		}

		second.appendChild(li);
	}
	//#3rd list
	var drinks = document.getElementById('ulmenu_drn');
	while (drinks.hasChildNodes()) {
	    drinks.removeChild(drinks.lastChild);
	}
	for(var x = 0;x < drinksList[nn].length;x++) {
		var li = document.createElement('li');
		li.innerHTML = drinksList[nn][x];
		li.classList.toggle('cat_drn');
		//zebra
		if(x > 0 && x % 2 == 1) {
			li.style.background = '#E8C8A3';
			li.style.color = '#362E30';
		}
		if(x > 0) {
			li.addEventListener('click', addToOrder);
		}

		drinks.appendChild(li);
	}
}

createLists(nowDay);


//create order 
var table = document.getElementById('table_body');
function addToOrder() {
	//position
	var cellPosition = document.createElement('div');
	cellPosition.classList.add('cell');
	cellPosition.innerHTML = this.innerHTML;
	cellPosition.id = 'position ' + this.innerHTML;
	table.appendChild(cellPosition);
	//value 1
	var cellValue = document.createElement('div');
	cellValue.classList.add('cell');
	cellValue.innerHTML = 1;
	cellValue.id = this.innerHTML;
	table.appendChild(cellValue);
	//price
	var cellPrice = document.createElement('div');
	cellPrice.classList.add('cell');
	if(this.classList.contains('cat_scn')){
		cellPrice.innerHTML = 120;
	} if(this.classList.contains('cat_fst')){
		cellPrice.innerHTML = 165;
	} if(this.classList.contains('cat_drn')){
		cellPrice.innerHTML = 100;
	}
	cellPrice.id = this.innerHTML + ' price';
	table.appendChild(cellPrice);

	//total 
	var cellTot = document.createElement('div');
	cellTot.classList.add('cell');
	cellTot.classList.add('total');
	cellTot.id = this.innerHTML + ' total';
	cellTot.innerHTML = cellPrice.innerHTML * cellValue.innerHTML;
	table.appendChild(cellTot);

	//first function end
	this.removeEventListener('click', addToOrder);
	this.addEventListener('click', addToOrderPlus);

}

//add value in order
function addToOrderPlus() {
	var elem = document.getElementById(this.innerHTML);
	++elem.innerHTML;
	if(elem.innerHTML < 10){
		var tot = document.getElementById(this.innerHTML+ ' total');
		var price = document.getElementById(this.innerHTML + ' price');
		tot.innerHTML = (Number(elem.innerHTML) * Number(price.innerHTML));
	} else {
		var tot = document.getElementById(this.innerHTML+ ' total');
		var price = document.getElementById(this.innerHTML + ' price');
		tot.innerHTML = (Number(elem.innerHTML) * Number(price.innerHTML));
		this.removeEventListener('click', addToOrderPlus);
		alert('Not over 10 positions in list!');
		this.addEventListener('click', alertOverTen);
		return;
	}
}
function alertOverTen(){
			alert('Sorry, not more 10 positions at list, if you made a mistake - please reload page with button "Clear"');
}

//modal2
var modal2 = document.getElementById('modal2');
var btnFinal = document.getElementById('final');
final.addEventListener('click', showFinal);
function showFinal() {
	modal2.style.display = 'flex';
	wrap.style.filter = 'blur(10px) grayscale(50%)';
}
var btnBack = document.getElementById('back');
var btnClearBack = document.getElementById('clearBack');
btnBack.addEventListener('click', closeFinal);
btnClearBack.addEventListener('click', closeClearFinal);
function closeFinal() {
	modal2.style.display = 'none';
	wrap.style.filter = 'blur(0) grayscale(0)';
}
function closeClearFinal() {
	modal2.style.display = 'none';
	wrap.style.filter = 'blur(0) grayscale(0)';
	clearAll();
}
