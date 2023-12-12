  // Toggle the display of the dropdown options
function dropdown() {
    let dropDownOptions = document.getElementById("options");
    dropDownOptions.classList.toggle("show");
};



//zoomout for the tools-logo
const zoomable = document.getElementsByClassName("tools-logo");

zoomable.forEach(zoom => {
    zoom.addEventListener('click', () => {
        zoomable.forEach(el => el.classList.remove('zoomed'));
        zoom.classList.add('zoomed');
    });
});



/*let toolsLogo = document.getElementsByClassName('tools-logo')

function zoom(){
    toolsLogo.classList.add('zoomed')
    console.log("my name is Joshua");
};
*/
