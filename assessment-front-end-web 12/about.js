console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert ('The form has been submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);
// image.addEventListener("mouseover", function() {}

// // let picture = document.getElementById("picture");
// // picture.addEventListener("mouseover", function(event){
// // 	event.target.picture
// // }
