let cols = document.getElementById('input1');
let rows = document.getElementById('input2') || 3;
let par = document.getElementById('box3');

cols.addEventListener('change', func);
rows.addEventListener('change', func);
function func() {
	while (par.hasChildNodes()) {
    	par.removeChild(par.lastChild);
	}
	let table = document.createElement('table');
	par.appendChild(table);
	for(let i = 0;i < rows.value;i++){
		let tr = document.createElement('tr');
		tr.innerHTML = 'row #' + (i+ 1);
		if(i % 2 == 1){
				tr.style.background = 'lightgrey';
			}
		table.appendChild(tr);
		for(let x = 0;x < cols.value;x++){
			let td = document.createElement('td');
			td.innerHTML = 'column #' + (x + 1) + '<br> <sub style="color:red;">X</sub> <br> row #'+ (i + 1);
			if(x % 2 == 1){
				td.style.background = 'lightyellow';
			}
			tr.appendChild(td);
		}
	}
	if(!par.hasChildNodes()) {
		cols.removeEventListener('change', func);
		rows.removeEventListener('change', func);
		rows.value = '';
		cols.value = '';
		cols.addEventListener('change', func);
	}
}