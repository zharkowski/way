const buyPopup = document.querySelector(`.buy`);
const successPopup = document.querySelector(`.success`);
// const buyPopupSendButton = buyPopup.querySelector(`.buy__button--send`);
// const successPopupCloseButton = successPopup.querySelector(`.success__button--close`);
const buyTourButtons = document.querySelectorAll(`.button--buy-tour`);
const feedbackForm = document.querySelector(`.feedback__form`);

const closePopup = (evt) => {
	evt.preventDefault();
	const openedPopup = document.querySelector(`.modal--show`);
	 if (openedPopup) {
	 	openedPopup.classList.remove(`modal--show`);
	 }
};

const closeButtonClickHandler = (evt) => {
	closePopup(evt);
};

const keydownHandler = (evt) => {
	if (evt.key === `Escape`) {
		closePopup(evt);
	}
};
const overlayClickHandler = (evt) => {
	if (evt.target === buyPopup) {
		closePopup(evt);
	}
};

const formSendHandler = (evt) => {
	evt.preventDefault();
	closePopup(evt);
	successPopup.classList.add(`modal--show`);

	const closeButton = successPopup.querySelector(`.button--close`);

	closeButton.addEventListener(`click`, closeButtonClickHandler);
	document.addEventListener(`keydown`, keydownHandler);
	successPopup.addEventListener('click', overlayClickHandler);
};

buyTourButtons.forEach((button) => {
	console.log(button);
	const buyTourClickHandler = (evt) => {
		evt.preventDefault();
		buyPopup.classList.add(`modal--show`);

		const closeButton = buyPopup.querySelector(`.button--close`);

		closeButton.addEventListener(`click`, closeButtonClickHandler);
		document.addEventListener(`keydown`, keydownHandler);
		buyPopup.addEventListener('click', overlayClickHandler);

		const form = buyPopup.querySelector(`form`);
		form.addEventListener(`submit`, formSendHandler);
	};

	button.addEventListener('click', buyTourClickHandler);
});

feedbackForm.addEventListener(`submit`, formSendHandler);
