const togle = document.querySelector('.toggle');
const nav = document.querySelector('.nav');

togle.addEventListener('click', function(){
  nav.classList.toggle('show');
  console.log(nav)
})

