"use strict";

document.addEventListener("DOMContentLoaded", () => {
    Utility.injectHtmlAsync(
        ".header", "includes/header.html"
    ).then(() => {
        Utility.initializeSlicknav("#menu", Utility.defaultSlickOps);
    });
    
    Utility.injectHtmlAsync(".footer", "includes/footer.html");
});