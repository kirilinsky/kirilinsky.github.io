const menus = document.getElementsByClassName('menu');

for(let x = 0;x < menus.length;x++){
	menus[x].addEventListener('mouseenter', showSub);
	menus[x].addEventListener('mouseleave', hideSub);
}

function showSub() {
	if(this.children.length > 1) {
		this.children[1].style.height = 'auto';
		this.children[1].style.opacity = '1';
		this.children[1].style.overflow = 'visible';
	} else {
		return;
	}
}
function hideSub() {
	if(this.children.length > 1) {
		this.children[1].style.height = '0';
		this.children[1].style.opacity = '0';
		this.children[1].style.overflow = 'hidden';
	} else {
		return;
	}
}