
window.onload = function() {
	let menuStyle = getComputedStyle(menu);
	openMenu.onclick = function() {
		if(menuStyle.display == 'none'){
			menu.classList.add('active');
			this.innerHTML = 'Close menu';
		} else {
			menu.classList.remove('active');
			this.innerHTML = 'Open menu';
		}
	}
}