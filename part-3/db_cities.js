'use strict';
const loader = document.querySelector('.loader');

let localLang, dataSave;

const init = data => {
	const button = document.querySelector('.button'),
		selectCities = document.getElementById('select-cities'),
		listDefault = document.querySelector('.dropdown-lists__list--default'),
		listSelect = document.querySelector('.dropdown-lists__list--select'),
		listAutocomplete = document.querySelector('.dropdown-lists__list--autocomplete'),
		label = document.querySelector('label'),
		closeButton = document.querySelector('.close-button');

	button.style.pointerEvents = 'none';
	listDefault.style.display = 'none';

	const clearBlock = select => {
		const block = select.querySelector('.dropdown-lists__col');
		block.textContent = '';
		return block;
	},
	createCounrtyBlock = () => {
		const countryBlock = document.createElement('div');
		countryBlock.classList.add('dropdown-lists__countryBlock');

		return countryBlock;
	},
	renderListDefault = () => {
			const block = clearBlock(listDefault);

			data.forEach(item => {
				const countryBlock = createCounrtyBlock();
				item.cities.sort((a, b) => {
					return b.count - a.count;
				});
				countryBlock.insertAdjacentHTML(
					'beforeend',
					`
                    <div class="dropdown-lists__total-line">
                        <div class="dropdown-lists__country">${item.country}</div>
                        <div class="dropdown-lists__count">${item.count}</div>
                    </div>
                `
				);

				item.cities.forEach((city, i) => {
					if (i < 3) {
						countryBlock.insertAdjacentHTML(
							'beforeend',
							`
                    <div class="dropdown-lists__line" data-link="${city.link}">
                        <div class="dropdown-lists__city${i === 0 ? ' dropdown-lists__city--ip' : ''}">
                            ${city.name}
                        </div>
                        <div class="dropdown-lists__count">${city.count}</div>
                    </div>
                `
						);
					}
				});

				block.append(countryBlock);
			});
		},
		renderListSelect = country => {
			const block = clearBlock(listSelect);

			data.forEach(item => {
				if (item.country === country) {
					const countryBlock = createCounrtyBlock();

					countryBlock.insertAdjacentHTML(
						'beforeend',
						`
            <div class="dropdown-lists__total-line">
                <div class="dropdown-lists__country">${item.country}</div>
                <div class="dropdown-lists__count">${item.count}</div>
            </div>
        `
					);

					item.cities.forEach((city, i) => {
						countryBlock.insertAdjacentHTML(
							'beforeend',
							`
                <div class="dropdown-lists__line" data-link="${city.link}">
                    <div class="dropdown-lists__city${i === 0 ? ' dropdown-lists__city--ip' : ''}">
                        ${city.name}
                    </div>
                    <div class="dropdown-lists__count">${city.count}</div>
                </div>
            `
						);
					});

					block.append(countryBlock);
				}
			});
		},
		showCity = value => {
			const block = clearBlock(listAutocomplete);
			const countryBlock = createCounrtyBlock();
			block.append(countryBlock);
			data.forEach(item => {
				item.cities.forEach(city => {
					const fixItem = city.name.toLowerCase();

					block.append(countryBlock);
					if (fixItem.startsWith(value.toLowerCase())) {
						countryBlock.insertAdjacentHTML(
							'beforeend',
							`
                    <div class="dropdown-lists__line" data-link="${city.link}">
                        <div class="dropdown-lists__city" >
                            <strong>${city.name.slice(0, value.length)}</strong>${city.name.slice(value.length)}
                        </div>
                        <div class="dropdown-lists__count">${item.country}</div>
                    </div>
                `
						);
					}
				});
			});

			if (countryBlock.innerHTML === '') {
				countryBlock.innerHTML = `
            <div class="dropdown-lists__line">
                <div class="dropdown-lists__city">Ничего не найдено</div>
            </div>
        `;
			}
		},
		changeLabel = () => {
			label.style.top = '-25px';
			label.style.left = '0';
			label.style.color = '#00416A';
		},
		closeSelect = () => {
			listDefault.style.display = 'none';
			listAutocomplete.style.display = '';
			listSelect.style.display = '';
		},
		resetSelect = () => {
			closeSelect();
			label.style.top = '';
			label.style.left = '';
			label.style.color = '';
			closeButton.style.display = '';
			button.style.pointerEvents = 'none';
			selectCities.value = '';
		},
		animteSelectIn = select => {
			let count = 440,
				idAnimate;
			select.style.position = 'absolute';
			select.style.left = `-${count}px`;
			select.style.display = 'flex';

			const animate = () => {
				idAnimate = requestAnimationFrame(animate);

				if (count > 0) {
					count -= 20;
					select.style.left = `-${count}px`;
				} else {
					cancelAnimationFrame(idAnimate);
				}
			};

			animate();
		},
		animteSelectOff = select => {
			let count = 0,
				idAnimate;

			const animate = () => {
				idAnimate = requestAnimationFrame(animate);

				if (count < 440) {
					count += 20;
					select.style.left = `-${count}px`;
				} else {
					cancelAnimationFrame(idAnimate);
					select.style.position = '';
					select.style.left = ``;
					select.style.display = '';
				}
			};

			animate();
		};

	selectCities.addEventListener('click', () => {
		listDefault.style.display = '';
		listSelect.style.display = '';
		listAutocomplete.style.display = '';
		renderListDefault();
	});

	listDefault.addEventListener('click', event => {
		let target = event.target;
		if (target.closest('.dropdown-lists__total-line')) {
			let country = target.closest('.dropdown-lists__total-line').querySelector('.dropdown-lists__country')
				.textContent;
			selectCities.value = country;
			listAutocomplete.style.display = '';
			renderListSelect(country);
			animteSelectIn(listSelect);
		}
	});

	listSelect.addEventListener('click', event => {
		let target = event.target;
		if (target.closest('.dropdown-lists__total-line')) {
			animteSelectOff(listSelect);
		}
	});

	selectCities.addEventListener('input', () => {
		if (selectCities.value.trim() !== '') {
			listDefault.style.display = 'none';
			listSelect.style.display = '';
			showCity(selectCities.value);
			listAutocomplete.style.display = 'flex';
			closeButton.style.display = 'block';
			changeLabel();
		} else {
			resetSelect();
			listDefault.style.display = '';
		}
	});

	document.body.addEventListener('click', event => {
		const target = event.target;
		if (target.closest('.dropdown-lists__total-line')) {
			const parent = target.closest('.dropdown-lists__total-line'),
				country = parent.querySelector('.dropdown-lists__country').textContent.trim();
			selectCities.value = country;
			changeLabel();
			closeButton.style.display = 'block';
			button.style.pointerEvents = 'none';
		}

		if (target.closest('.dropdown-lists__line')) {
			const parent = target.closest('.dropdown-lists__line'),
				city = parent.querySelector('.dropdown-lists__city').textContent.trim();

			if (city !== 'Ничего не найдено') {
				selectCities.value = city;
				changeLabel();
				button.href = parent.dataset.link;
				button.style.pointerEvents = '';
				closeButton.style.display = 'block';
			} else {
				resetSelect();
			}
		}

		if (!target.closest('.dropdown-lists__total-line') && target !== selectCities) {
			closeSelect();
		}
	});

	closeButton.addEventListener('click', resetSelect);
};



const setCookie = (key, value, year, month, day, path, domain, secure) => {
		let cookieStr = `${key}=${value}`;

		if (year) {
			const expires = new Date(year, month, day);
			cookieStr += `; expires=${expires.toGMTString()}`;
		}

		cookieStr += path ? `; path=${path}` : '';
		cookieStr += domain ? `; domain=${domain}` : '';
		cookieStr += secure ? `; secure` : '';

		document.cookie = cookieStr;
	},
	saveLocalStorage = () => {
		localStorage.setItem('savesCitiesDB', JSON.stringify(dataSave));
	},
	sortArr = arr => {
		if (localLang === 'RU') {
			let index = dataSave.findIndex(item => item.country === 'Россия');
			dataSave.unshift(...dataSave.splice(index, 1));
		} else if (localLang === 'EN') {
			let index = dataSave.findIndex(item => item.country === 'United Kingdom');
			dataSave.unshift(...dataSave.splice(index, 1));
		} else if (localLang === 'DE') {
			let index = dataSave.findIndex(item => item.country === 'Deutschland');
			dataSave.unshift(...dataSave.splice(index, 1));
		}
	},
	saveLang = arr => {
		let strCookie = arr.filter(item => item.startsWith('lang=')).join('');
		localLang = strCookie.split('=')[1];

		dataSave = JSON.parse(localStorage.getItem('savesCitiesDB'));

		if (!dataSave) {
			fetch('./db_cities.json')
				.then(response => {
					if (response.status !== 200) {
						throw new Error(`Status ${response.status}`);
					}

					return response.json();
				})
				.then(data => {
					dataSave = data[localLang];
					sortArr(dataSave);
					init(dataSave);
					loader.style.display = 'none';
					saveLocalStorage();
				})
				.catch(error => console.error(error));
		} else {
			loader.style.display = 'none';
			sortArr(dataSave);
			init(dataSave);
		}
	},
	createLocalLang = () => {
		let item = prompt('Укажите язык : "RU", "EN", "DE"');
		localStorage.removeItem('savesCitiesDB');

		if (item !== null) {
			item = item.toUpperCase().trim();
			if (item !== 'RU' && item !== 'EN' && item !== 'DE') {
				createLocalLang();
			} else {
				setCookie('lang', item, 2022, 12, 22);
				saveLang(document.cookie.split('; '));
			}
		} else {
			createLocalLang();
		}
	},
	checkLang = () => {
		let arr = document.cookie.split('; ');
		if (arr.some(item => item.startsWith('lang='))) {
			saveLang(arr);
		} else {
			createLocalLang();
		}
	};

checkLang();
