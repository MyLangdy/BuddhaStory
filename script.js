// const menuButton = document.querySelector('.menu_button');
// const slidingMenu = document.querySelector('.sliding_menu');

// menuButton.addEventListener('click', () => {
//     slidingMenu.classList.toggle('show_menu');
// });

const menuButton = document.querySelector('.menu_button');
const slidingMenu = document.querySelector('.sliding_menu');

menuButton.addEventListener('click', () => {
    slidingMenu.classList.toggle('show_menu');
});

document.addEventListener('click', (event) => {
    const targetElement = event.target;
    if (
        !targetElement.closest('.menu_button') &&
        !targetElement.closest('.sliding_menu')
    ) {
        slidingMenu.classList.remove('show_menu');
    }
});


// Popup
const bookItems = document.querySelectorAll('.book-item');
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const closeButton = document.querySelector('.close-btn');
const pdfIframe = document.getElementById('pdf-iframe');

bookItems.forEach((bookItem) => {
  bookItem.addEventListener('click', () => {
    const bookTitle = bookItem.querySelector('.book-title').textContent;
    const pdfLink = bookItem.dataset.pdf;

    popupTitle.textContent = bookTitle;
    pdfIframe.src = pdfLink;

    popup.style.opacity = '1';
    popup.style.visibility = 'visible';
  });
});

function closePopup() {
  pdfIframe.src = '';
  popup.style.opacity = '0';
  popup.style.visibility = 'hidden';
}