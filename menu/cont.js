var orderOf = document.getElementById('order_of');
var wrap = document.getElementById('wrap');
var cusname = document.getElementById('cusname');
var select = document.getElementById('customer');
var table = document.getElementById('table_body');
select.addEventListener('change', setName);

var MAX_QTY = 10;
// order state: { 'fst:Borscht': { name, qty, price } }
var order = {};
var customer = '';

//set name (for h2)
function setName() {
	customer = select.value;
	cusname.textContent = customer ? ': ' + customer : '';
	//egg
	if(customer == 'Elon Musk') {
		alert('How do you like the roast, Elon?');
	}
}

//days of week
var days = ['- of sunday -','- of monday -','- of tuesday -','- of wednesday -','- of thursday -','- of friday -','- of saturday -'];
var today = document.getElementById('today');
var nowDay = new Date().getDay();
var currentDay = nowDay;

function blurWrap(on) {
	wrap.style.filter = on ? 'blur(10px) grayscale(50%)' : '';
}

//get modal
var modal = document.getElementById('modal');
var btnChangeDay = document.getElementById('changeDay');
var btnSetToday = document.getElementById('setToday');
btnChangeDay.addEventListener('click', getModal);
function getModal() {
	modal.style.display = 'flex';
	blurWrap(true);
}
//select day in modal
var selectDay = document.getElementById('selectDay');
selectDay.addEventListener('change', function() {
	setTimeout(function() { setDay(Number(selectDay.value)); }, 450);
});
btnSetToday.addEventListener('click', function() { setDay(nowDay); });

function setDay(day) {
	currentDay = day;
	today.textContent = days[day];
	modal.style.display = 'none';
	blurWrap(false);
	createLists(day);
	selectDay.value = '';
}

//clear all
var btnClear = document.getElementById('clear');
btnClear.addEventListener('click', clearAll);

function clearAll() {
	customer = '';
	cusname.textContent = '';
	select.value = '';
	order = {};
	renderOrder();
}

//week menu
//prices per category
var prices = { fst: 165, scn: 120, drn: 100 };

var firstDishes = [
			[/*0*/'first course','Gazpacho','Cheddar soup','Pumpkin soup'],
			[/*1*/'first course','Borscht','Solyanka','Okroshka'],
			[/*2*/'first course','Country soup','Soy soup','Okroshka'],
			[/*3*/'first course','Peasant soup','Solyanka','Pea soup'],
			[/*4*/'first course','Cheddar soup','Thai soup','Borscht'],
			[/*5*/'first course','Borscht','Solyanka','Gazpacho'],
			[/*6*/'first course','Bean soup','Pumpkin soup','Okroshka']
		   ];
var secondDishes = [
			[/*0*/'main course','Risotto','Couscous','Salad'],
			[/*1*/'main course','Potatoes','Vegetables','Salad'],
			[/*2*/'main course','Poached egg','Risotto','Chickpeas'],
			[/*3*/'main course','Risotto','Salad','Green peas'],
			[/*4*/'main course','Cheese plate','Pilaf','Risotto'],
			[/*5*/'main course','Pasta','Squid','Couscous'],
			[/*6*/'main course','Couscous','Cloudberry','Salad']
		   ];
var drinksList = [
			[/*0*/'drinks','Fruit drink','Berry juice','Orange juice'],
			[/*1*/'drinks','Smoothie','Juice','Syrup'],
			[/*2*/'drinks','Syrup','Juice','Fruit drink'],
			[/*3*/'drinks','Coffee','Tea','Syrup'],
			[/*4*/'drinks','Fruit drink','Tea','Coffee'],
			[/*5*/'drinks','Juice','Fruit drink','Syrup'],
			[/*6*/'drinks','Coffee','Tea','Juice']
		   ];

//list creating
function fillList(ulId, cat, items) {
	var ul = document.getElementById(ulId);
	ul.innerHTML = '';
	for(var i = 0;i < items.length;i++) {
		var li = document.createElement('li');
		li.textContent = items[i];
		li.classList.add('cat_' + cat);
		if(i > 0) {
			//zebra
			if(i % 2 == 1) {
				li.classList.add('zebra');
			}
			li.dataset.cat = cat;
			li.addEventListener('click', addToOrder);
		}
		ul.appendChild(li);
	}
}

function createLists(nn) {
	fillList('ulmenu_fst', 'fst', firstDishes[nn]);
	fillList('ulmenu_scn', 'scn', secondDishes[nn]);
	fillList('ulmenu_drn', 'drn', drinksList[nn]);
}

today.textContent = days[nowDay];
createLists(nowDay);

//create order
function addToOrder() {
	var cat = this.dataset.cat;
	var name = this.textContent;
	var key = cat + ':' + name;
	var item = order[key];
	if(!item) {
		order[key] = { name: name, qty: 1, price: prices[cat] };
	} else if(item.qty < MAX_QTY) {
		item.qty++;
		if(item.qty == MAX_QTY) {
			alert('Maximum ' + MAX_QTY + ' servings per dish!');
		}
	} else {
		alert('Sorry, no more than ' + MAX_QTY + ' servings of one dish per order. If you made a mistake, press "clear".');
		return;
	}
	renderOrder();
}

function orderTotal() {
	var tot = 0;
	for(var key in order) {
		tot += order[key].qty * order[key].price;
	}
	return tot;
}

function addCell(text, extraClass) {
	var cell = document.createElement('div');
	cell.classList.add('cell');
	if(extraClass) {
		cell.classList.add(extraClass);
	}
	cell.textContent = text;
	table.appendChild(cell);
}

function renderOrder() {
	table.innerHTML = '';
	var keys = Object.keys(order);
	for(var i = 0;i < keys.length;i++) {
		var item = order[keys[i]];
		addCell(item.name, 'pos');
		addCell(item.qty);
		addCell(item.price);
		addCell(item.qty * item.price, 'total');
	}
	if(keys.length) {
		addCell('total: ' + orderTotal(), 'totalTotal');
	}
}

//modal2
var modal2 = document.getElementById('modal2');
var forpre = document.getElementById('forpre');
var btnFinal = document.getElementById('final');
btnFinal.addEventListener('click', showFinal);

function escapeHtml(s) {
	var div = document.createElement('div');
	div.textContent = s;
	return div.innerHTML;
}

function showFinal() {
	modal2.style.display = 'flex';
	blurWrap(true);
	var name = customer || 'guest';
	var keys = Object.keys(order);
	var str = '';
	if(!keys.length) {
		str = '<p class="check">your order is empty</p>';
	}
	for(var i = 0;i < keys.length;i++) {
		var item = order[keys[i]];
		str += '<hr><b>' + escapeHtml(item.name) + '</b><br> qty: ' + item.qty + ' price: ' + item.price + ' total: ' + item.qty * item.price + '<br><hr>';
	}
	forpre.innerHTML = '<p class="check"><br> good afternoon, ' + escapeHtml(name) + '!<br> your order: <br></p>' + str + '<br> <p class="check back">TOTAL: ' + orderTotal() + '</p>';
	btnSend.style.display = keys.length ? '' : 'none';
}
var btnBack = document.getElementById('back');
var btnClearBack = document.getElementById('clearBack');
var btnSend = document.getElementById('send');
btnBack.addEventListener('click', closeFinal);
btnSend.addEventListener('click', sendFinal);
btnClearBack.addEventListener('click', closeClearFinal);
function closeFinal() {
	modal2.style.display = 'none';
	blurWrap(false);
}
function closeClearFinal() {
	closeFinal();
	clearAll();
}

function sendFinal() {
	forpre.innerHTML = '<p class="check"><br>thank you, ' + escapeHtml(customer || 'guest') + '!<br><br>your order has been sent to the kitchen.<br><br></p>';
	btnSend.style.display = 'none';
	setTimeout(closeClearFinal, 1800);
}
