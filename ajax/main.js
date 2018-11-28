let name = document.getElementById('name');
let score = document.getElementById('score');
let money = document.getElementById('money');
let params = new FormData();

	

	
document.querySelector('#send').addEventListener('click', function() {

		params.append('name', name.value);
		params.append('score', score.value);
		params.append('money', money.value);
		ajaxPost(params);

});



function ajaxPost(paramss) {
	var request = new XMLHttpRequest();

	request.onreadystatechange = function() {
		if(request.readyState == 4) {
			document.querySelector('#result').innerHTML = request.responseText;
		}
	}

	request.open('POST', '/ip.php');
	request.setRequestHeader("X-Requested-With", "XMLHttpRequest");
	request.send(paramss);
}