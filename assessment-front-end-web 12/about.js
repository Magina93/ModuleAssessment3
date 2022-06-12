console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert ('The form has been submitted');
}

let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

const j= () => {
	var cat = document.querySelector('cat');
	alert ("Well done!")
}

cat.addEventListener("mouseover", j);
		
	