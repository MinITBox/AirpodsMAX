const chooseColorBtn = document.querySelectorAll('.choose-color__btn');
const contentItem = document.querySelectorAll('.content-item');

// adding event listener for each element of the collection "chooseColorBtn"
chooseColorBtn.forEach(function (element) {
	element.addEventListener('click', open);
});

// description of the "open" function that is used by the event listener
function open(evt) {
	// ?1.1
	const target = evt.currentTarget;

	// *2.1. identifying the content of the attribute "data-button" => "color--..."
	const button = target.dataset.button;

	// *2.2. forming the collection according to the information in the
	// *variable "button" => "color--..."
	const contentActive = document.querySelectorAll(`.${button}`);

	// ?1.2
	chooseColorBtn.forEach(function (item) {
		item.classList.remove('choose-color__btn--active');
	});
	// ?1.3
	target.classList.add('choose-color__btn--active');

	// *2.3
	contentItem.forEach(function (item) {
		item.classList.remove('content-item--active');
	});
	// *2.4
	contentActive.forEach(function (item) {
		item.classList.add('content-item--active');
	});
}
