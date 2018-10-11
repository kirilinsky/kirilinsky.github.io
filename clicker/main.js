		
		/*adm value*/
		
		const admin = document.getElementById('adm');
		adm.value = '';
		adm.addEventListener('change', admValue);
		function admValue() {
			current = adm.value;
		}

		/*defines*/

		const wrap = document.getElementById('wrap');
		const soil = document.getElementById('soil');
		const refresh = document.getElementById('refresh');
		const plant = document.getElementById('plant');
		const block = document.getElementById('block');
		const scoreD = document.getElementById('scoreD');
		const name = document.getElementById('name');
		const currentApp = document.getElementById('currentApp');
		let current = 0;
		let clicks = 0;
		let money = 0;
		let startTime;
		const stat_modal = document.getElementById('stats');
		const btnRefreshModal = document.getElementById('refresh_modal');
		const closeDev = document.getElementById('close_devlog');
		const closeModal = document.getElementById('close_modal');
		const showStat = document.getElementById('show_stat');
		let stat1 = document.getElementById('stat1');		
		let stat2 = document.getElementById('stat2');
		let stat3 = document.getElementById('stat3');
		let stat4 = document.getElementById('stat4');
		let label = document.getElementById('label');
		let solied = '';
		let animFlag = 0;
		let divider = 1;
		block.addEventListener('click', click1);
		block.addEventListener('click', onTimer);
		function onTimer() {
			startTime = new Date();
			block.removeEventListener('click', onTimer);
		}

		/*start clicking*/
		function click1() {
			current++;
			clicks++;
			if(animFlag == 0 && current == 1) {
				label.style.display = 'none';
				showStat.style.display = 'block';
				scoreD.classList.add('wow');
				scoreD.classList.add('fadeInLeft');
				refresh.classList.add('wow');
				refresh.classList.add('slideInUp');
				showStat.classList.add('wow');
				showStat.classList.add('slideInDown');
				currentApp.classList.add('wow');
				currentApp.classList.add('fadeInRight');
				name.classList.add('wow');
				name.classList.add('fadeInDown');
				scoreD.style.display = 'flex';
				refresh.style.display = 'block';
				currentApp.style.display = 'flex';
				name.style.display = 'flex';
			} else {
				scoreD.classList.remove('wow');
				refresh.classList.remove('wow');
				showStat.classList.remove('wow');
				showStat.classList.remove('slideInDown');
				scoreD.classList.remove('fadeInLeft');
				refresh.classList.remove('slideInUp');
				currentApp.classList.remove('wow');
				currentApp.classList.remove('fadeInRight');
				name.classList.remove('wow');
				name.classList.remove('fadeInDown');
			} 
			animFlag++;
			new WOW().init();
			soil.style.display = 'flex';
			soil.classList.toggle('wow');
			scoreD.innerHTML = 'Your<br> current<br> score<br><b id="time">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			currentApp.innerHTML = `Your<br>current<br> multiplier<br><img src="drop.png" alt="drop" id="drop">`;
			
			if(current >= 1) {
				plant.src = '1.png';
				let drop = document.getElementById('drop');
				new WOW().init();
				drop.classList.add('wow');
				drop.classList.add('tada');
				drop.setAttribute('data-wow-duration', '2s');
				drop.setAttribute('data-wow-iteration', '2');
				name.innerHTML = 'Your rank<br> is <br><b>Tiny</b>';
				showStat.style.display = 'block';
			} 
			if(current >= 6) {
				drop.classList.remove('wow');
				drop.classList.remove('tada');
				drop.removeAttribute('data-wow-duration');
			}
			if(current == 19) {
				solied = '10%';
				soil.innerHTML = solied;
			}
			if(current > 29) {
				name.innerHTML = 'Your rank is <br><b>Young</b>';
				plant.src = '2.png';
			}
			if(current == 39) {
				solied = '25%';
				soil.innerHTML = solied;
			}
			if(current >= 49) {
				solied = '35%';
				soil.innerHTML = solied;
			}
			if(current > 59) {
				block.removeEventListener('click', click1);
				block.addEventListener('click', click2);
				plant.src = '3.png';
				name.innerHTML = 'Your rank<br> is <br><b>Junior</b>';
			}


		}
		let flag2 = 0;
		function click2() {
			current += 2;
			animFlag = '';
			clicks++;
			soil.classList.toggle('wow');
			scoreD.innerHTML = 'Your<br> current<br> score<br><b id="time">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			currentApp.innerHTML = `Your<br> current<br> multiplier<br><img src="drop2.png" alt="drop2" id="drop">`;
			if(flag2 >= 0) {
					let drop = document.getElementById('drop');
					drop.classList.add('wow');
					drop.classList.add('tada');
					drop.setAttribute('data-wow-duration', '2s');
				}
			flag2++;
			if(flag2 >= 3) {
					let drop = document.getElementById('drop');
					drop.classList.remove('wow');
					drop.classList.remove('tada');
					drop.removeAttribute('data-wow-duration');
				}
				
			

			if(current >= 71) {
				solied = '50%';
				soil.innerHTML = solied;
			}
			if(current >= 91) {
				solied = '65%';
				soil.innerHTML = solied;
			}
			if(current > 110) {
				plant.src = '4.png';
				block.style.borderRadius = '20px';
				name.innerHTML = 'Your rank<br> is <br><b>Serious</b>';
				block.removeEventListener('click', click2);
				block.addEventListener('click', click3);
			}
		}
		let flag3 = 0;
		function click3() {
			current += 5;
			clicks++;
			soil.classList.toggle('wow');
			scoreD.innerHTML = 'Your<br> current<br> score<br><b id="time">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			currentApp.innerHTML = `Your<br> current<br> multiplier<br><img src="drop5.png" alt="drop5" id="drop">`;
			if(flag3 == 0) {
					let drop = document.getElementById('drop');
					drop.classList.add('wow');
					drop.classList.add('tada');
					drop.setAttribute('data-wow-duration', '2s');
				}
			if(flag3 > 8) {
					let drop = document.getElementById('drop');
					drop.classList.remove('wow');
					drop.classList.remove('tada');
					drop.removeAttribute('data-wow-duration');
				}
			flag3++;

			if(current >= 201) {
				solied = '75%';
				soil.innerHTML = solied;
			}
			if(current >= 295) {
				solied = '95%';
				soil.innerHTML = solied;
			}
			if(current >= 394) {
				current += 7;
				solied = '99%';
				soil.innerHTML = solied;
			}
			if(current >= 544) {
				solied = '100%<br>click<br>me!';
				soil.style.background = 'red';
				soil.style.width = '115px';
				soil.style.height = '115px';
				soil.style.borderRadus = '50px';
				soil.innerHTML = solied;
				soil.classList.add('getSoil');
				soil.addEventListener('click', getSoil);
				refresh.marginLeft = '56px';
			}
			if(current > 500) {
				plant.src = '5.png';
				scoreD.innerHTML = 'Your<br> current<br> score<br><b style="color:green" id="time">' + current + '</b>';
				block.style.borderRadius = '30px';
				name.innerHTML = 'Your rank<br> is <br><b>Giant!</b>';
			}
			if(current > 991) {
				if(confirm('Activate Soil?')){
					getSoil();
				} 
			}
			
		}
		
		/*soli*/
		let flagS = 0;
		function getSoil() {

			block.removeEventListener('click', click3);
			scoreD.innerHTML = 'Your<br> current<br> score<br><b  id="time" style="color:red;font-size:25px;">' + current + '</b>';
			name.innerHTML = 'Your rank is <br><b style="color:red;">Wizard!</b>';
			currentApp.innerHTML = `Your<br> current<br> multiplier<br><img src="potion.png" alt="pot" id="drop">`;
			block.style.borderRadius = '45px';
			block.style.boxShadow = '0 0 50px red';
			plant.src = '6.png';
			soiled = '0%';
			if(flagS == 0) {
					let drop = document.getElementById('drop');
					drop.classList.add('wow');
					drop.classList.add('tada');
					drop.setAttribute('data-wow-duration', '2s');
				}
			if(flagS > 5) {
					let drop = document.getElementById('drop');
					drop.classList.remove('wow');
					drop.classList.remove('tada');
					drop.removeAttribute('data-wow-duration');
				}
			flagS++;
			soil.innerHTML = soiled;
			block.addEventListener('click', click4);
			soil.removeEventListener('click', getSoil);
			soil.style.textDecoration = 'line-through';
			soil.classList.remove('getSoil');
			soil.classList.toggle('wow');
			soil.classList.toggle('pulse');	
		}

		/*continuation */
		function click4() {
			soil.style.display = 'none';
			current += 11;
			clicks++;
			scoreD.innerHTML = 'Your<br> current<br> score<br><b  id="time" style="color:red;font-size:25px;">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			currentApp.innerHTML = `Your<br> current<br> multiplier<br><img src="potion.png" alt="pot" id="drop">`;
			if(current >= 1051) {
				block.removeEventListener('click', click4);
				block.addEventListener('click', click5);
			}
		}
		function click5() {
			current = current + 13;
			scoreD.style.width = '28%';
			currentApp.style.width = '28%';
			name.style.width = '68%';
			name.innerHTML = 'Your rank is <br><b style="color:blue;">Archimaister</b>';
			scoreD.innerHTML = 'Your<br> current<br> score<br><b  id="time" style="color:blue;font-size:25px;">' + current + '</b>';
			clicks++;
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			if(current > 1549) {
				block.removeEventListener('click', click5);
				block.addEventListener('click', click6);
			}
		}
		let flag6 = 0;
		function click6() {
			current += 17;
			clicks++;
			scoreD.innerHTML = 'Your<br> current<br> score<br><b  id="time" style="color:blue;font-size:25.2px;text-shadow:0 0 1px red;">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			currentApp.innerHTML = `Your<br> current<br> multiplier<br><img src="potion2.png" alt="pot" id="drop">`;
			if(flag6 == 0) {
					let drop = document.getElementById('drop');
					drop.classList.add('wow');
					drop.classList.add('tada');
					drop.setAttribute('data-wow-duration', '2s');
				}
			if(flag6 > 7) {
					let drop = document.getElementById('drop');
					drop.classList.remove('wow');
					drop.classList.remove('tada');
					drop.removeAttribute('data-wow-duration');
				}
			flag6++;
			if(current > 2014) {
				block.removeEventListener('click', click6);
				block.addEventListener('click', click7);
			}
		}
		let iso = 0;
		function click7() {
			current += 18;
			clicks++;
			name.innerHTML = 'Your rank<br> is <br><b style="color:blue;text-shadow:0 0 2px black;">Necromancer</b>';
			scoreD.innerHTML = 'Your<br> current<br> score<br><b  id="time" style="color:blue;font-size:25.3px;text-shadow:0 0 2px red;">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			timer.setAttribute('data-wow-duration', '2s');
			plant.src = '7.png';
			if(current >= 3000) {
				isolation.style.opacity = '1';
				iso++;
				startIsolation(iso,divider);
			}
		}


		/*modal*/

		closeDev.addEventListener('click', closeDevlog);
		btnRefreshModal.addEventListener('click', resetModal);
		const btnShowDevlog = document.getElementById('showDevlog');
		const dev_modal = document.getElementById('devlog');
		btnShowDevlog.addEventListener('click', showDevlog);
		function showDevlog() {
			dev_modal.style.display = 'flex';
			wrap.style.filter = 'blur(10px) grayscale(3)';
		}
		function closeDevlog() {
			dev_modal.style.display = 'none';
			wrap.style.filter = 'none';			
		}

		function resetModal() {
				window.location.reload(false);
		}
		refresh.addEventListener('click', resetAll);
		function resetAll() {
				let answer = confirm('Show statistics?');
				if(answer) {
					showStatModal();
				} else {
					window.location.reload(false);
				}
		}

		/*isolation*/
		const persent = '%';
		const progress = document.getElementById('progress');
		const isolation = document.getElementById('isolation');
		const coin = document.getElementById('money');
		const store = document.getElementById('btnStore');
		let moneyTxt = document.getElementById('money_txt');
		const test = document.getElementById('test');
		moneyTxt.innerHTML = 1;
		function startIsolation(num, div) {
			let currentNum = Math.floor(num * div);
			store.style.display = 'flex';
			if(currentNum <= 99) {
				progress.style.height =  currentNum + persent;
				progress.style.transform = 'scale(1)';
			} else {
				new WOW().init();
				progress.style.height = '100';
				progress.style.transform = 'scale(1.1)';
				coin.style.display = 'flex';
				coin.classList.add('wow');
				coin.classList.add('rubberBand');
				coin.setAttribute('data-wow-duration', '2s');
				money++;
				divider +=0.13;
				moneyTxt.innerHTML = money;
				iso = 0;
				return;
				if(money == 999) {
					alert('u are fuckin freak, buddy!');
					window.location.reload(false);
				}
			}
			
			//test.innerHTML = num + ' /  ' + div;


		}
		

		/*stat modal*/
		showStat.addEventListener('click', showStatModal);
		function showStatModal() {
			let endTime = new Date();
			let totalTime = endTime - startTime;
			let finalTime = Math.round(totalTime / 1000);
			if(finalTime >= 60){
				finalTime = Math.round(finalTime / 60) + 'm';
			}
			if(finalTime < 60){
				finalTime = finalTime + 's';
			}
			if(finalTime >= 3600){
				finalTime = Math.round(finalTime) + 'h';
			}
			stat_modal.style.display = 'flex';
			wrap.style.filter = 'blur(10px) grayscale(3)';
			stat1.innerHTML = clicks;
			stat2.innerHTML = finalTime;
			stat3.innerHTML = current;
			if(money == 1){

				stat4.innerHTML = money + '<br> gold coin';	
			} else {
				stat4.innerHTML = money + '<br> gold coins';
			}
			refresh.style.display = 'none';
		}
		closeModal.addEventListener('click', closeStatModal);
		function closeStatModal(){
			stat_modal.style.display = 'none';
			wrap.style.filter = 'none';
			refresh.style.display = 'block';
		}

		/*store modal*/
		const store_modal = document.getElementById('modal_store');
		const btn_close_store_modal = document.getElementById('close_store');
		store.addEventListener('click', showStore);
		let nest = document.getElementById('nest');
		btn_close_store_modal.addEventListener('click', hideStore);
		function showStore() {
			store_modal.style.display = 'flex';
			store_modal.style.opacity = '0.95';
			wrap.style.filter = 'blur(10px) grayscale(3)';
			progress.style.filter = 'blur(10px) grayscale(3)';
			store.style.display = 'none';
			coin.style.display = 'none';
			nest.innerHTML = money;
			if(money == 0) {
				nest.style.color = 'red';
			} else {
				nest.style.color = 'green';
			}
		}
		function hideStore() {
			store_modal.style.opacity = '0';
			store_modal.style.display = 'none';
			wrap.style.filter = 'none';
			progress.style.filter = 'none';
			store.style.display = 'flex';
			if(money == 0) {
				coin.style.display = 'none';
			} else {
				coin.style.display = 'flex';
			}
		}


		/*store multipliers*/

		const firstCell = document.getElementById('first_store_cell');
		firstCell.addEventListener('click', startFirstCell);
		function startFirstCell() {
			if(money < 2) {
				alert('You such a poor for this! Come back later.');
			} if(money >= 2) {
				currentApp.innerHTML = `Your<br> current<br> multiplier<br><img src="potion3.png" alt="pot3" id="drop">`;
				block.removeEventListener('click', click7);
				block.addEventListener('click', click8);
				firstCell.removeEventListener('click', startFirstCell);
				firstCell.classList.add('unactive');
				hideStore();
				money -= 2;
				moneyTxt.innerHTML = money;

			}
		}


		/*click8 with purchased multiplier*/
		flag8 = 0;
		function click8() {
			current += 27;
			clicks++;
			name.innerHTML = 'Your rank<br> is <br><b style="color:blue;text-shadow:0 0 2px black;">Dark Master</b>';
			scoreD.innerHTML = 'Your<br> current<br> score<br><b  id="time" style="color:blue;font-size:25.6px;text-shadow:0 0 2px royalblue;">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			timer.setAttribute('data-wow-duration', '2s');

			if(flag8 == 0) {
					let drop = document.getElementById('drop');
					drop.classList.add('wow');
					drop.classList.add('tada');
					drop.setAttribute('data-wow-duration', '2s');
				}
			if(flag8 > 7) {
					let drop = document.getElementById('drop');
					drop.classList.remove('wow');
					drop.classList.remove('tada');
					drop.removeAttribute('data-wow-duration');
				}
			flag8++;
			iso++;
			startIsolation(iso,divider);
		}


