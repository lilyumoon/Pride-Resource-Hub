"use strict";

// TODO: Refactor this so it is more reusable, as opposed having the singular purpose of injecting uniform header/footer

document.addEventListener("DOMContentLoaded", () => {
    includeHTML(".header", "includes/header.html");
    includeHTML(".footer", "includes/footer.html");
});

const includeHTML = (selector, file) => {
    fetch(file)
        .then(response => response.text())
        .then(data => {
            document.querySelector(selector).innerHTML = data
        })
        .catch(error => console.error(`Error loading ${file}: `, error));
};