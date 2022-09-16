const menu = document.querySelectorAll('.menu');
menu.forEach (menu => {  
  menu.addEventListener('click', (event) => {
    menu.classList.toggle("open");
  });
});


