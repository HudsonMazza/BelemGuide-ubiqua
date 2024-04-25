
let next = document.querySelector('.next')
let prev = document.querySelector('.prev')

next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
})

prev.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').prepend(items[items.length - 1]) // here the length of items = 6
})
// Obtém o caminho da URL atual
const path = window.location.pathname;
const currentPage = path.substring(path.lastIndexOf('/') + 1) || 'home'; // Handle home page edge case

const navbarLinks = document.querySelectorAll('#navbar li a');

navbarLinks.forEach(link => {
  const linkPath = link.getAttribute('href');
  const linkPage = linkPath.substring(linkPath.lastIndexOf('/') + 1) || ''; // Handle potential empty linkPage

  if (linkPage === currentPage) {
    link.classList.add('active');
  }
});