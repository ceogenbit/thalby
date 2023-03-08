let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');
let Body = document.querySelector('body')

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
	Body.classList.toggle('body--lock')
})
