//DOM
const icons = [
    ["&#xf13b;", "&#xf3d3;", "&#xf13c;", "&#xf41b;"],
    ["&#xf09b;", "&#xf1d2;"],
    ["&#xf419;", "&#xf3e2;"],
    ["&#xf17c;"]
];

const paragraphs = [
    ["HTML 5", "JAVASCRIPT", "CSS 3", "REACT"],
    ["GIT-HUB", "GIT"],
    ["NODE.JS", "PYTHON"],
    ["LINUX"]
];

const colors = [
    ["#E44D26", "#F7DF1E", "#1572B6", "#61DAFB"],
    ["#000000", "#000000"],
    ["#68A063", "#306998"],
    ["#8BC500"]
];

const spec = ['Web Development ', 'Version Control', 'Backend', 'Emulator']

for (let i = 0; i < icons.length; i++) {
    let specHeader = $('<h2>', {
        text: spec[i],
        style: 'margin: 30px auto -20px auto;'
    });

    $('#stacks').append(specHeader);

    for (let j = 0; j < icons[i].length; j++) {
        let icon = $('<i>', {
            class: 'fab',
            style: `color:${colors[i][j]};`,
            html: icons[i][j]
        });

        let P = $('<p>', {
            text: paragraphs[i][j]
        });

        let Span = $('<span>', {
            class: 'tools-logo',
            html: icon.add(P)
        });

        $('#stacks').append(Span);
    }
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

//handwriting config
const phrasesArray = [
    ["Joshua!", "Chibuzo!"],
    ["Drawing 🗽", "Coding 💻", "Rap-songs 🎧", "Motorcycling 🏍️", "Movies 📽️", "Food 🤭", "Football ⚽", "Tennis 🏓"],
    ["Drop me a message!", "I would reply in a flash."],
    // Add more phrases as needed
];

function simulateHandwriting(container, text) {
    let index = 0;

    function type() {
        container.innerHTML = text[index].substring(0, container.innerHTML.length + 1);
        if (container.innerHTML === text[index]) {
            setTimeout(erase, 3000);
        } else {
            setTimeout(type, 200);
        }
    }

    function erase() {
        container.innerHTML = text[index].substring(0, container.innerHTML.length - 1);
        if (container.innerHTML === "") {
            index = (index + 1) % text.length;
            setTimeout(function () {
                type();
            }, 200);
        } else {
            setTimeout(erase, 50);
        }
    }

    type();
}

// Start the simulation for each container
document.querySelectorAll('.handwriting-container').forEach(function (container, index) {
    simulateHandwriting(container, phrasesArray[index % phrasesArray.length]);
});

// Get the status query parameter from the URL

const popup = document.getElementById('popup');

// Show the appropriate message and style the popup based on the status
function messageInfo(display, innerText, class1, class2) {
    popup.style.display = 'block'
    popup.innerText = '✅ \nMessage sent';
    //popup.innerText.style.display = block;
    popup.classList.add('success');
    popup.classList.add('show');

    setTimeout(() => {
        popup.classList.remove('show');
    }, 7000);

}

//dropdown
function toggleDropdown() {
    var dropdownContent = document.querySelector(".dropdown-content");
    var isActive = dropdownContent.parentElement.classList.contains("active");
    if (isActive) {
        dropdownContent.parentElement.classList.remove("active");
    } else {
        dropdownContent.parentElement.classList.add("active");
    }
}


//Burger nav toggle
$(document).ready(function() {
    $("#burger-container").on('click', function() {
        $(this).toggleClass("open");
        console.log(5);
    });
});


//const sendmail = require('../controller/control.js');
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    //submit.innerHTML = `Processing... `
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const data = {
        name: name,
        email: email,
        message: message
    };

    const url = '/sendmail';

    fetch(url, {
        method: 'POST', // Specify the method
        headers: {
            'Content-Type': 'application/json', // Specify the content type
        },
        body: JSON.stringify(data), // Convert data to JSON string
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json(); // Parse the JSON from the response
    })
    .then(data => {
        console.log('Success:', data); // Handle the response data
        messageInfo('block', '✅ \nMessage sent', 'success', 'show')
    })
    .catch(error => {
        console.error('Error:', error); // Handle any errors
        messageInfo('block', '❗❗❗\nMessage not sent', 'error', 'show')
    });
});