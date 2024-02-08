//DOM
const icons = [
  "&#xf13b;",
  "&#xf3d3;",
  "&#xf13c;",
  "&#xf09b;",
  "&#xf1d2;",
  "&#xf17c;",
  "&#xf419;"
];
const paragraphs = [
  "HTML 5",
  "JAVASCRIPT",
  "CSS 3",
  "GIT-HUB",
  "GIT",
  "LINUX",
  "NODE.JS"
];
const colors = [
  "#E44D26",
  "#F7DF1E",
  "#1572B6",
  "#000000",
  "#000000",
  "#8BC500",
  "#68A063"
];
const section_3 = document.getElementById('section3');

for (let i = 0; i < icons.length; i++) {
  const icon = document.createElement('i');
  icon.classList.add('fab');
  icon.style.color = colors[i];
  icon.innerHTML = icons[i];

  const P = document.createElement('p');
  P.textContent = paragraphs[i];

  const Span = document.createElement('span');
  Span.classList.add('tools-logo');
  Span.appendChild(icon);
  Span.appendChild(P);

  section_3.appendChild(Span);
};

function closeDropdown() {
  const dropdownContent = document.querySelector('.dropdown-content');
  dropdownContent.style.opacity = '0';
  dropdownContent.style.pointerEvents = 'none';
};

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
};

//toggle function for the icons names when clicked
const toolsLogo = document.querySelectorAll('.tools-logo');
for (let q = 0; q < toolsLogo.length; q++) {
  toolsLogo[q].addEventListener('click', function() {
    toggleVisibility(q + 1);
  });
}




const sendmail = require('../controller/control.js');
const form = document.getElementById('form');

form.addEventListener('submit', async function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  const formData = getFormData();

  // Make the fetch request
  try {
    const response = await fetch('/sendMail', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

  });