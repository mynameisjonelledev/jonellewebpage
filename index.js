window.addEventListener('scroll', function() {
  const scrollUpArrow = document.getElementById('scroll-up-arrow');

  if (window.scrollY > 200) {
      scrollUpArrow.style.display = 'block';
  } else {
      scrollUpArrow.style.display = 'none';
  }
});

/* document.getElementById('scroll-up-arrow').addEventListener('click', function() {
  window.scrollTo({
      top: 0,
      behavior: 'smooth'
  });
}); */

document.addEventListener('DOMContentLoaded', () => {
  const scrollUpArrow = document.getElementById('scroll-up-arrow');

  scrollUpArrow.addEventListener('click', () => {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
});


const downloadButton = document.getElementById('downloadButton');
const downloadLink = document.getElementById('downloadLink');

 downloadButton.addEventListener('click', () => {
            downloadLink.href

   = 'jonelresume.pdf';
           const event = new MouseEvent('click');
            downloadLink.dispatchEvent(event);
        });



