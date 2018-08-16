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
		cusname.innerHTML = ', ' + select.value;
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
	wrap.style.filter = 'blur(10px)';
}
//select day in modal
var selectDay = document.getElementById('selectDay');
selectDay.addEventListener('change', changeDay);
function changeDay() {
	today.innerHTML = days[selectDay.value];
	modal.style.display = 'none';
	wrap.style.filter = 'blur(0)';
	createLists(selectDay.value);
	selectDay.value = document.getElementById('defaultOption');
}
btnSetToday.addEventListener('click', setToday);
function setToday() {
	today.innerHTML = days[nowDay];
	modal.style.display = 'none';
	wrap.style.filter = 'blur(0)';
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

//test
function createLists(nn) {
	var first = document.getElementById('ulmenu_fst');
	while (first.hasChildNodes()) {
	    first.removeChild(first.lastChild);
	}
	for(var i = 0;i < firstDishes[nn].length;i++) {
		var li = document.createElement('li');
		li.innerHTML = firstDishes[nn][i];
		li.addEventListener('click', addToOrder);
		first.appendChild(li);
	}

	var second = document.getElementById('ulmenu_scn');
	while (second.hasChildNodes()) {
	    second.removeChild(second.lastChild);
	}
	for(var z = 0;z < secondDishes[nn].length;z++) {
		var li = document.createElement('li');
		li.innerHTML = secondDishes[nn][z];
		li.addEventListener('click', addToOrder);
		second.appendChild(li);
	}

	var drinks = document.getElementById('ulmenu_drn');
	while (drinks.hasChildNodes()) {
	    drinks.removeChild(drinks.lastChild);
	}
	for(var x = 0;x < drinksList[nn].length;x++) {
		var li = document.createElement('li');
		li.innerHTML = drinksList[nn][x];
		li.addEventListener('click', addToOrder);
		drinks.appendChild(li);
	}
}
createLists(nowDay);


//test 
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
	cellPrice.innerHTML = 150;
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
