//manipulating stacks logo
const icons = [
    ["&#xf13b;", "&#xf3d3;", "&#xf13c;", "&#xf41b;"],
    ["&#xf09b;", "&#xf1d2;"],
    ["&#xf419;", "&#xf3e2;"]
];

const paragraphs = [
    ["HTML 5", "JAVASCRIPT", "CSS 3", "REACT"],
    ["GIT-HUB", "GIT"],
    ["NODE.JS", "PYTHON"]
];

const colors = [
    ["#E44D26", "#F7DF1E", "#1572B6", "#61DAFB"],
    ["#000000", "#000000"],
    ["#68A063", "#306998"]
];

const spec = ['Web Development ', 'Version Control', 'Backend']

for (let i = 0; i < icons.length; i++) {
    let specHeader = $('<h2>', {
        class: "spec",
        text: spec[i],
        style: 'width:100%; display: flex; align-items: center; justify-content:space-around; margin-top:30px;'
    });

    let stacks = $('<div>', {
        id: 'stacks',
        style: 'display: flex; align-items: center; justify-content:center; flex-wrap:wrap;'

    })

    $('#section3').append(specHeader);
    $('#section3').append(stacks);

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

        stacks.append(Span);
    }
}


//zoomout for the tools-logo
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.tools-logo');
    const pTag = document.querySelector('.ptag');
    elements.forEach(function (el) {
        el.addEventListener('click', function () {
            elements.forEach(function (item) {
                if (item !== el) {
                    item.classList.remove('zoomed');
                }
            });
            el.classList.toggle('zoomed');
        });
    });

    window.onscroll = function () {
        scrollFunction()
    };
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
        toolsLogo[q].addEventListener('click', function () {
            toggleVisibility(q + 1);
        });
    }
})

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
$(document).ready(function () {
    $("#burger-container").on('click', function () {
        $(this).toggleClass("open");
    });
});