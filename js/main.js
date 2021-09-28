var rec = new webkitSpeechRecognition();

rec.lang = 'uz-UZ';


var resultComp = 0;
var resultUser = 0;
imgs = ['./images/hand-paper-solid.svg', './images/hand-peace-solid.svg', './images/hand-rock-solid.svg', './images/question-solid.svg'];
var inputBr = document.querySelector('.br');

var newImg1 = document.createElement('img');
images.appendChild(newImg1);

var newImg2 = document.createElement('img');
images.appendChild(newImg2);

rec.onerror = function () {
	newImg2.setAttribute('src', imgs[3]);
};


rec.onresult = function (evt) {
	var result = evt.results[0][0].transcript;

	var random = Math.round(Math.random() * 10) % 3;

	newImg1.setAttribute('src', imgs[random]);

	if(result === 'tosh') {
		newImg2.setAttribute('src', imgs[2]);
	}
	else if(result === 'qaychi') {
		newImg2.setAttribute('src', imgs[1]);
	}
	else if(result === "qog'oz") {
		newImg2.setAttribute('src', imgs[0]);
	}
	else {
		newImg2.setAttribute('src', imgs[3]);
	}

	if ((random === 0 && result === 'tosh') || (random === 1 && result === "qog'oz") || (random === 2 && result === 'qaychi')) {
		resultComp++;
	}
	else if ((random === 0 && result === 'qaychi') || (random === 1 && result === 'tosh') || (random === 2 && result === "qog'oz")) {
		resultUser++;
	}

	input.value = `Kompyuter		 ${resultComp} : ${resultUser}		 Siz`;
};


form.addEventListener('submit', (evt) => {
	evt.preventDefault();

	rec.start();
})