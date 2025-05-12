"use strict";

document.addEventListener("DOMContentLoaded", () => {
    Utility.injectHtmlAsync(
        ".header", "includes/header.html"
    ).then(() => {
        Utility.initializeSlicknav("#menu", Utility.defaultSlickOps);
    });
    
    Utility.injectHtmlAsync(".footer", "includes/footer.html");

    document.querySelector("#submission-form").addEventListener("submit", (e) => {
    
        // prevent the default form submission behavior
        e.preventDefault();

        // convert the form data to JSON
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());
        const jsonData = JSON.stringify(data);

        // Send the JSON data to the Zapier webhook
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://hooks.zapier.com/hooks/catch/22892701/2n0c2v6/", true); 

        xhr.onreadystatechange = function () {
            if (xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    console.log("Form submitted successfully");
                    alert("Thank you! Your submission has been sent.");
                } else {
                    console.error("Error submitting form");
                    alert("There was an error submitting your form. Please try again.");
                }
            }
        };
        xhr.send(jsonData);

        // clear form fields after submission
        clearForm();

    });
});

const clearForm = () => {
    document.querySelector("#name").value = "";
    document.querySelector("#email").value = "";
    document.querySelector("#subject").value = "";
    document.querySelector("#resource-url").value = "";
    document.querySelector("#description").value = "";
}
