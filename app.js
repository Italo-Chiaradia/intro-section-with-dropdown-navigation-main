// DROPDOWN 
function changeArrowIconDirection(parentElement) {
    let arrowIcon = parentElement.children[1];
    if (parentElement.classList.contains("active")) {
        arrowIcon.setAttribute("src","./images/icon-arrow-up.svg");
    } else {
        arrowIcon.setAttribute("src","./images/icon-arrow-down.svg");
    }
}

document.addEventListener("click", (e) => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]");
    if (!isDropdownButton && e.target.closest("[data-dropdown-container]") != null) {
        return;
    }
    let currentDropdown;
    if (isDropdownButton) {
        currentDropdown = e.target.closest(".dropdown-button");
        currentDropdown.classList.toggle("active");
        changeArrowIconDirection(currentDropdown);
    }
    document.querySelectorAll(".dropdown-button").forEach(element => {
        if (element == currentDropdown) return;
        element.classList.remove("active");
        changeArrowIconDirection(element);
    });
});