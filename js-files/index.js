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
