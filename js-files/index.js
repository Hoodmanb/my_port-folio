// Toggle the display of the dropdown options
function dropdown() {
    let dropDownOptions = document.getElementById("options");
    dropDownOptions.classList.toggle("show");
};


//zoomout for the tools-logo
document.addEventListener('DOMContentLoaded', function() {
    const elements = document.querySelectorAll('.tools-logo');

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
    // Change the '200' to the scroll position you desire
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