const allSection = document.querySelectorAll('.section-container');
const navLink = document.querySelectorAll('.nav-links li');
const navBar = document.querySelector('.navigation-bar');
const home = document.getElementById('Home-Section');
const logo = document.querySelector('.nav-logo');
const profileTabs = document.querySelectorAll('.profile-tab');
const profileView = document.querySelectorAll('.profile-viewport');

// Loading script

window.addEventListener('load', function () {
	// Select the loading bar element
	const loadingBar = document.querySelector('.loading-overlay');

	// Hide the loading bar when the page is fully loaded
	loadingBar.style.display = 'none';
});

// Switching window code

const viewFunction = function (event) {
	const targetID = event.target.attributes[0].nodeValue;
	console.log(event.target.classList.contains('active'));
	if (event.target.classList.contains('active')) {
		console.log('working');
		document.getElementById(targetID).style.animation = 'shake .8s forwards ';
		setTimeout(function () {
			document.getElementById(targetID).style.animation = 'none';
		}, 800);
	}
	if (!document.getElementById(targetID)) return;
	navLink.forEach((element) => element.classList.remove('active'));
	event.target.classList.toggle('active');

	allSection.forEach((element) => element.classList.remove('active'));
	document.getElementById(targetID).classList.add('active');
	if (!home.classList.contains('active')) {
		logo.classList.add('back');
	} else {
		logo.classList.remove('back');
	}
};

// Logo Animation

logo.addEventListener('click', function () {
	navLink.forEach((el, i) => {
		el.classList.remove('active');
		console.log(el, i);
		if (i == 0) {
			el.classList.add('active');
		}
	});
	allSection.forEach((el) => {
		el.classList.remove('active');
	});
	home.classList.add('active');
	logo.classList.remove('back');
});
navLink.forEach((element) => element.addEventListener('click', viewFunction));

// profle container code

const profileViewFunction = function (event) {
	profileTabs.forEach((profile) => profile.classList.remove('active'));
	profileView.forEach((element) => element.classList.remove('active'));

	// Bringing target element to active
	event.target.classList.add('active');
	const targetView = document.querySelector(`[type='${event.target.id}']`);
	targetView.classList.add('active');
	console.log(targetView);
};

profileTabs.forEach((element) => {
	element.addEventListener('click', profileViewFunction);
});
