// Toggle the display of the dropdown options
function toggleDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.opacity = (dropdownContent.style.opacity === '1') ? '0': '1';
    dropdownContent.style.pointerEvents = (dropdownContent.style.pointerEvents === 'auto') ? 'none': 'auto';
}

function closeDropdown() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.opacity = '0';
    dropdownContent.style.pointerEvents = 'none';
}


//zoomout for the tools-logo
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.tools-logo');
    const pTag = document.querySelector('.ptag');
    elements.forEach(function(el) {
        el.addEventListener('click', function() {
            elements.forEach(function(item) {
                if (item !== el) {
                    item.classList.remove('zoomed');
                }
            });
            el.classList.toggle('zoomed');
        });
    });
});


//back to top button
window.onscroll = function() {
    scrollFunction()};
function scrollFunction() {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
        document.getElementById("back-to-top").style.display = "block";
    } else {
        document.getElementById("back-to-top").style.display = "none";
    }
}

//input field labels interaction
function inputVeri() {
    const inputFields = document.getElementsByClassName('input');
    const labels = document.getElementsByClassName('label');

    for (let i = 0; i < inputFields.length; i++) {
        if (inputFields[i].value !== '') {
            labels[i].style.display = 'none';
        } else {
            labels[i].style.display = 'inline';
        }
    }
}

//stacks p tag display
function toggleVisibility(index) {
    const spans = document.querySelectorAll('.tools-logo');
    spans.forEach((span, i) => {
      const h5 = span.querySelector('p');
      if (i + 1 === index) {
        span.classList.add('active');
        h5.style.display = 'block';
      } else {
        span.classList.remove('active');
        h5.style.display = 'none';
      }
    });
  }



const form = document.getElementById('form');

form.addEventListener('submit', async function(event) {
    // Prevent the default form submission behavior
    event.preventDefault();