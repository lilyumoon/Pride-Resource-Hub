"use strict";

/**
 * Gets the first element descendant of node matching selector
 * @param {string} selector the criteria to search for
 * @returns an Element object associated with the selector, or null if not found 
 */
const getElement = (selector) => /** @type {Element} */ (document.querySelector(selector));



const insertContent = () => {
    const container = getElement("#resources");
    archiveData.forEach(section => {
        // create collapsible container
        const collapsible = document.createElement("div");
        collapsible.classList.add("collapsible");

        // create the category
        const category = document.createElement("div");
        category.classList.add("collapsible-category");
        category.textContent = section.category;
        category.onclick = () => toggleCollapsible(category);

        // create the content
        const content = document.createElement("div");
        content.classList.add("collapsible-content");

        // Add items to the content
        const list = document.createElement("ul");
        section.items.forEach(item => {
            const listItem = document.createElement("li");

            listItem.innerHTML = `<a href=${item.link}>${item.title}</href>`;

            if (item.author) {
                listItem.innerHTML += `<br><em>&nbsp;${item.author}</em>`;
            } else {
                listItem.innerHTML += `<br><em>&nbsp;${item.format}</em>`;
            }

            list.appendChild(listItem);

            const details = document.createElement("div");
            details.classList.add("collapsible-content");

            if (item.description) {
                listItem.innerHTML += `<br><p>${item.description}</p>`;
            }
        });
        content.appendChild(list);

        // append title and content to the collapsible container
        collapsible.appendChild(category);
        collapsible.appendChild(content);

        // append collapsible container to contents
        container.appendChild(collapsible);
    });
};


const toggleCollapsible = (categoryElement) => {
    const content = categoryElement.nextElementSibling;
    if (content.style.maxHeight) {
        content.style.maxHeight = null; // collapse the content
    } else {
        content.style.maxHeight = content.scrollHeight + "px"; // expand the content
    }
    content.classList.toggle("expanded");
};


document.addEventListener("DOMContentLoaded", function() {
    Utility.injectHtmlAsync(
        ".header", "includes/header.html"
    ).then(() => {
        Utility.initializeSlicknav("#menu", Utility.defaultSlickOps);
    });
    
    Utility.injectHtmlAsync(".footer", "includes/footer.html");

    insertContent();
});