const countriesLinksList = document.querySelector(`.tabs__countries-list`);
const countriesCardsList = document.querySelector(`.tabs__cards-list`);
const tabLinkNames = countriesLinksList.querySelectorAll(`.tabs__country`);

const changeTabHandler = (evt) => {
	const newCountryLink = evt.target;
	const currentCountryLink = countriesLinksList.querySelector(`.tabs__country--checked`);
	if (newCountryLink === currentCountryLink) {
		return;
	}

	const currentCountryName = currentCountryLink.dataset.country;
	const newCountryName = newCountryLink.dataset.country;

	const currentCountryCard = countriesCardsList.querySelector(`.tabs__cards-item[data-country="${currentCountryName}"]`);
	const newCountryCard = countriesCardsList.querySelector(`.tabs__cards-item[data-country="${newCountryName}"]`);

	currentCountryLink.classList.remove(`tabs__country--checked`);
	currentCountryCard.classList.add(`visually-hidden`);
	newCountryLink.classList.add(`tabs__country--checked`);
	newCountryCard.classList.remove(`visually-hidden`);

	console.log(currentCountryName);
	console.log(newCountryName);
	console.log(currentCountryCard);
	console.log(newCountryCard);
};

tabLinkNames.forEach(tab => tab.addEventListener('click', changeTabHandler));
