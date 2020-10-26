//per fer ensenyar el menu desplegable al fer click

document.querySelector('.menu-boto').addEventListener('click',() => {
document.querySelector('.nav-menu').classList.toggle('show');
  });
//funció slider        
  $(function(){
    $('.bxslider').bxSlider({
      mode: 'fade',
      captions: true,
      slideWidth: 1500});
  });

