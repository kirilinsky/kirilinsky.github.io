let btn = document.getElementById('btn');
const ul = document.getElementById('ul');
let array = [];
btn.addEventListener('click', func);

function func() {
	for(let i = 0;i < ul.children.length;i++){
		array.push(ul.children[i].innerHTML);
	}
	array.sort(function(a,b){
		return a-b;
	});
	while(ul.hasChildNodes()) {
		ul.removeChild(ul.lastChild);
	}
	for(let x = 0;x < array.length;x++) {
		let li = document.createElement('li');
		li.innerHTML = array[x];
		ul.appendChild(li);
	}
	btn.removeEventListener('click', func);
}
