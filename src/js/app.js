const dropdowns = document.querySelectorAll('.dropdown');
dropdowns.forEach((dropdown) => {
    dropdown.addEventListener('click', () => {
        dropdown.classList.toggle('active');
    });
});



const customCursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {
    // Move the custom cursor to the mouse position
    customCursor.style.left = e.clientX + 'px';
    customCursor.style.top = e.clientY + 'px';
});


// Toggle the navigation menu on small screens
//const menuToggle = document.querySelector('.menu-toggle');
//const menu = document.querySelector('.menu');

//menuToggle.addEventListener('click', () => {
 //   menu.classList.toggle('active');
//});

// Show/hide the menu-toggle button based on screen width
//window.addEventListener('resize', () => {
    //if (window.innerWidth <= 768) {
      //  menuToggle.style.display = 'flex';
      //  menu.classList.remove('active');
    //} else {
     //   menuToggle.style.display = 'none';
       // menu.classList.remove('active');
    //}
//});//
