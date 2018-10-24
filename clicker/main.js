		
		/*adm value*/
		const wrap = document.getElementById('wrap');
		const cheatBtn = document.getElementById('cheat_modal_open');
		const closeCheat = document.getElementById('close_cheat');
		const cheatModal = document.getElementById('modal_cheat');
		const cheatInp = document.getElementById('cheatInp');
		const cheatApp = document.getElementById('cheatApp');
		cheatBtn.addEventListener('click', openCheatModal);
		let cheater = false;
		function openCheatModal() {
			cheatModal.style.display = 'flex';
			wrap.style.filter = 'blur(10px) grayscale(3)';
			closeStatModal();
			cheatInp.value = '';
		}
		cheatApp.addEventListener('click', isThatCheat);
		function isThatCheat(){
			if(cheatInp.value == 'truegamer'){
				let answer = prompt('Задать счет', current);
				if(isNaN(answer)){
					alert('только цифры');
				} else {
					current = +answer;
					alert('Ваш новый счет: ' + answer);
					cheatInp.value = '';
					scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b id="time">' + current + '</b>';
					cheater = true;
					playAudio('buuu.mp3');
				}
			} if(cheatInp.value == 'moneymaker'){
				let answer = prompt('Задать кол-во монет', money);
				if(isNaN(answer)){
					alert('только цифры');
				} else {
					money = +answer;
					alert('В вашем кошельке: ' + answer);
					cheatInp.value = '';
					coin.style.display = 'flex';
					moneyTxt.innerHTML = money;
					cheater = true;
					playAudio('buuu.mp3');
				}
			} else {
				cheatInp.value = '';
			}
		}


		closeCheat.addEventListener('click', closeCheatModal); 
		function closeCheatModal() {
			cheatModal.style.display = 'none';
			wrap.style.filter = 'none';
			showStatModal();
		}


		/*defines*/
		let isSoiled = false;
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
		let divider = 0.89;
		let conFlag = 0;
		let iso = 0;
		let storeEnabled = false;
		block.addEventListener('click', click1);
		block.addEventListener('click', onTimer);
		let multi3Potion = false;
		function onTimer() {
			startTime = new Date();
			block.removeEventListener('click', onTimer);
		}

		/*start clicking*/
		function click1() {
			current++;
			clicks++;
			playAudio('08368.mp3');
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
			scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b id="time">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			currentApp.innerHTML = `Ваш<br>текущий<br> множитель<br><img src="drop.png" alt="drop" id="drop">`;
			
			if(current >= 1) {
				plant.src = '1.png';
				let drop = document.getElementById('drop');
				new WOW().init();
				drop.classList.add('wow');
				drop.classList.add('tada');
				drop.setAttribute('data-wow-duration', '2s');
				drop.setAttribute('data-wow-iteration', '2');
				if(cheater) {
					name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
				} else {
					name.innerHTML = 'Ваш ранг <br><b>Кроха</b>';
				}
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
				if(cheater) {
					name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
				} else {
					name.innerHTML = 'Ваш ранг <br><b>Молодой</b>';
				}
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
				if(cheater) {
					name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
				} else {
					name.innerHTML = 'Ваш ранг <br><b>Подросток</b>';
				}
			}


		}
		let flag2 = 0;
		function click2() {
			playAudio('08368.mp3');
			current += 2;
			animFlag = '';
			clicks++;
			soil.classList.toggle('wow');
			scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b id="time">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="drop2.png" alt="drop2" id="drop">`;
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
				if(cheater) {
					name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
				} else {
					name.innerHTML = 'Ваш ранг<br><b>Серьезный</b>';
				}
				block.removeEventListener('click', click2);
				block.addEventListener('click', click3);
			}
		}
		let flag3 = 0;
		function click3() {
			playAudio('08368.mp3');
			current += 5;
			clicks++;
			soil.classList.toggle('wow');
			scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b id="time">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="drop5.png" alt="drop5" id="drop">`;
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
				solied = '100%<br>нажми<br>меня!';
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
				scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b style="color:green" id="time">' + current + '</b>';
				block.style.borderRadius = '30px';
				if(cheater) {
					name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
				} else {
					name.innerHTML = 'Ваш ранг<br><b>Гигант!</b>';
				}
			}
			
			if(current > 993 && conFlag == 0) {
				conFlag = 1;
				if(confirm('Применить зелье?')){
					getSoil();
				}
			}
			if(current >= 2355 && conFlag == 1) {
				conFlag = 2;
				if(confirm('Внимание! Это Ваш последний шанс применить зелье и стать на сторону тьмы. Далее такой возможности не будет..')) {
					getSoil(2366);
				} else {
					soil.style.display = 'none';
				}
			}
			if(current >= 2889) {
				isolation.style.opacity = '1';
				iso++;
				startIsolation(iso,divider);
				storeEnabled = true;
			}
		}
		
		/*soli*/
		let flagS = 0;
		function getSoil(score) {
			block.removeEventListener('click', click3);
			scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b  id="time" style="color:red;font-size:25px;">' + current + '</b>';
			if(cheater) {
				name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
			} else {
				name.innerHTML = 'Ваш ранг<br><b style="color:red;">Волшебник!</b>';
			}
			currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="potion.png" alt="pot" id="drop">`;
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
			if(score >= 2015) {
				block.addEventListener('click', click7);
			} else {
				block.addEventListener('click', click4);
			}
			soil.removeEventListener('click', getSoil);
			soil.style.textDecoration = 'line-through';
			soil.classList.remove('getSoil');
			soil.classList.toggle('wow');
			soil.classList.toggle('pulse');
			isSoiled = true;	
		}

		/*continuation */
		function click4() {
			playAudio('08368.mp3');
			soil.style.display = 'none';
			current += 11;
			clicks++;
			scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b  id="time" style="color:red;font-size:25px;">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="potion.png" alt="pot" id="drop">`;
			if(current >= 1051) {
				block.removeEventListener('click', click4);
				block.addEventListener('click', click5);
			}
		}
		function click5() {
			playAudio('08368.mp3');
			current = current + 13;
			scoreD.style.width = '28%';
			currentApp.style.width = '28%';
			name.style.width = '68%';
			if(cheater) {
				name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
			} else {
				name.innerHTML = 'Ваш ранг <br><b style="color:blue;">Архимаг</b>';
			}
			scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b id="time" style="color:blue;font-size:25px;">' + current + '</b>';
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
			playAudio('08368.mp3');
			current += 17;
			clicks++;
			scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b  id="time" style="color:blue;font-size:25.2px;text-shadow:0 0 1px red;">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="potion2.png" alt="pot" id="drop">`;
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
		
		function click7() {
			playAudio('08368.mp3');
			soil.style.display = 'none';
			current += 18;
			clicks++;
			if(isSoiled){
				if(cheater) {
					name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
				} else {
					name.innerHTML = 'Ваш ранг<br><b style="color:blue;text-shadow:0 0 2px black;">Некромант</b>';
				}
				plant.src = '7.png';				
			}
			if(!isSoiled){
				plant.src = '5.png';				
			}
			if(!isSoiled && !multi3Potion) {
				if(cheater) {
					name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
				} else {
					name.innerHTML = 'Ваш ранг<br><b style="color:green;text-shadow:0 0 2px black;">Помощник <br>фермера</b>';
				}
			}
			scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b  id="time" style="color:blue;font-size:25.3px;text-shadow:0 0 2px red;">' + current + '</b>';
			let timer = document.getElementById('time');
			timer.classList.toggle('wow');
			timer.classList.toggle('tada');
			timer.setAttribute('data-wow-duration', '2s');
			if(current >= 3000) {
				isolation.style.opacity = '1';
				iso++;
				startIsolation(iso,divider);
				storeEnabled = true;
			}
		}
		/*audio*/
		function playAudio(file){
			let myAudio = new Audio;
			myAudio.src = file;
			myAudio.play();
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
				let answer = confirm('Показать статистику?');
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
					alert('ты болен, приятель!');
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
				finalTime = Math.round(finalTime / 60) + ' мин';
			}
			if(finalTime < 60){
				finalTime = finalTime + ' сек';
			}
			if(finalTime >= 3600){
				finalTime = Math.round(finalTime) + ' ч';
			}
			stat_modal.style.display = 'flex';
			wrap.style.filter = 'blur(10px) grayscale(3)';
			stat1.innerHTML = clicks;
			stat2.innerHTML = finalTime;
			stat3.innerHTML = current;
			stat4.innerHTML = money + '<br> золота';	
			refresh.style.display = 'none';
			store.style.display = 'none';
			isolation.style.opacity = '0';
			

		}
		closeModal.addEventListener('click', closeStatModal);
		function closeStatModal(){
			stat_modal.style.display = 'none';
			wrap.style.filter = 'none';
			refresh.style.display = 'block';
			if(storeEnabled) {
				store.style.display = 'flex';
				isolation.style.opacity = '1';
			}
		}

		/*store modal*/
		const pic1 = document.getElementById('pic1');
		const name1 = document.getElementById('name1');
		const store_modal = document.getElementById('modal_store');
		const btn_close_store_modal = document.getElementById('close_store');
		store.addEventListener('click', showStore);
		let nest = document.getElementById('nest');
		btn_close_store_modal.addEventListener('click', hideStore);
		function showStore() {
			if(isSoiled) {
				pic1.src = 'potion3_fullsize.png';
				name1.innerHTML = 'Зелье x3';
			}if(!isSoiled) {
				pic1.src = 'can2_fullsize.png';
				name1.innerHTML = 'Лейка x2';
			}
			store_modal.style.display = 'flex';
			store_modal.style.opacity = '0.95';
			wrap.style.filter = 'blur(10px) grayscale(3)';
			isolation.style.opacity = '0';
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
			isolation.style.opacity = '1';
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
				alert('Ты слишком беден для этого, подзаработай и возвращайся');
			} if(money >= 2) {
				if(isSoiled) {
					currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="potion3.png" alt="pot3" id="drop">`;
					if(cheater) {
						name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
					} else {
						name.innerHTML = 'Ваш ранг<br><b style="color:blue;text-shadow:0 0 2px black;">Темный Лорд</b>';
					}
				} if(!isSoiled) {
					currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="can2.png" alt="pot3" id="drop">`;
					if(cheater) {
						name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
					} else {
						name.innerHTML = 'Ваш ранг<br><b style="color:green;text-shadow:0 0 2px black;">Фермер</b>';
					}
				}
				multi3Potion = true;
				playAudio('buy.mp3');
				block.removeEventListener('click', click7);
				block.addEventListener('click', click8);
				firstCell.removeEventListener('click', startFirstCell);
				firstCell.classList.add('unactive');
				hideStore();
				money -= 2;
				moneyTxt.innerHTML = money;
				

			}
		}

		const secondCell = document.getElementById('second_store_cell');
		secondCell.addEventListener('click', startSecondCell);
		function startSecondCell() {
			if(money < 7 && isSoiled) {
				alert('Ты слишком беден для этого, подзаработай и возвращайся');
			}
			if(!isSoiled) {
				alert('Кажется, тебе это не нужно!');
			} if(money >= 7 && isSoiled) {
				plant.src = '5.png';
				playAudio('buy.mp3');
				isSoiled = false;
				secondCell.removeEventListener('click', startFirstCell);
				secondCell.classList.add('unactive');
				hideStore();
				money -= 7;
				moneyTxt.innerHTML = money;
				currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="can2.png" alt="pot3" id="drop">`;
				if(multi3Potion) {
					if(cheater) {
						name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
					} else {
						name.innerHTML = 'Ваш ранг<br><b style="color:green;text-shadow:0 0 2px black;">Фермер</b>';
					}
					currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="can2.png" alt="can2" id="drop">`;
				} else {
					currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="can1.png" alt="pot3" id="drop">`;
					if(cheater) {
						name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
					} else {
						name.innerHTML = 'Ваш ранг<br><b style="color:green;text-shadow:0 0 2px black;">Помощник<br>фермера</b>';			
					}
				}
			}
		}
		const thirdCell = document.getElementById('third_store_cell');
		thirdCell.addEventListener('click', startThirdCell);
		const spider = document.getElementById('spider');
		let sections = document.getElementsByClassName('section');
		let pStatsHeaders = document.getElementsByClassName('stats_header');
		const modalStoreBody = document.getElementById('modal_store_body');
		function startThirdCell() {
			if(money < 9) {
				alert('Ты слишком беден для этого, подзаработай и возвращайся');
			}
			if(money >= 9) {
				for(let i = 0;i < sections.length;i++) {
					sections[i].style.borderBottom = '17px solid white';
					sections[i].style.borderImage = 'url(hlbak.png) round round 50';
				}
				playAudio('crown.wav');
				block.removeAttribute('ink-color');
				block.setAttribute('ink-color', 'orange');
				block.style.boxShadow = '0 0 23px orange';
				block.style.background = 'ivory';
				cheatBtn.style.background = 'orange';
				refresh.style.background = 'orange';
				spider.style.display = 'block';
				showStat.style.background = 'orange';
				btn_close_store_modal.style.background = 'orange';
				stat_modal.style.background = 'url(modalStoreBody.png)';
				store_modal.style.background = 'url(modalStoreBody.png)';
				for(let x =0;x < modalStoreBody.children.length;x++){
					modalStoreBody.children[x].style.border = '1px solid grey';
				}
				for(let x = 0; x < pStatsHeaders.length; x++) {
					pStatsHeaders[x].style.background = 'orange';
				}
				btnRefreshModal.style.background = 'orange';
				thirdCell.removeEventListener('click', startThirdCell);
				thirdCell.classList.add('unactive');
				money -= 9;
				moneyTxt.innerHTML = money;
				nest.innerHTML = money;
			}	
		}


		/*click8 with purchased multiplier potion*/
		flag8 = 0;
		function click8() {
			current += 27;
			clicks++;
			playAudio('08368.mp3');
			if(isSoiled) {
				if(cheater) {
					name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
				} else {
					name.innerHTML = 'Ваш ранг<br><b style="color:blue;text-shadow:0 0 2px black;">Темный Лорд</b>';
				}
			}
			if(!isSoiled) {
				if(cheater) {
					name.innerHTML = 'Ваш ранг <br><b>Читер</b>';
				} else {
					name.innerHTML = 'Ваш ранг<br><b style="color:green;text-shadow:0 0 2px black;">Фермер</b>';
				}

			}
			if(multi3Potion && isSoiled) {
				currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="potion3.png" alt="pot3" id="drop">`;
			}
			if(multi3Potion && !isSoiled) {
				currentApp.innerHTML = `Ваш<br> текущий<br> множитель<br><img src="can2.png" alt="pot3" id="drop">`;
			}
			
			scoreD.innerHTML = 'Ваш<br> текущий<br> счет<br><b  id="time" style="color:blue;font-size:25.6px;text-shadow:0 0 2px royalblue;">' + current + '</b>';
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


