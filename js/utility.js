"use strict";

const Utility = {

    getElement: (selector) => {
        return (document.querySelector(selector));
    },

    injectHtml: (selector, file) => {
        fetch(file)
            .then(response => response.text())
            .then(data => {
                Utility.getElement(selector).innerHTML = data;
            })
            .catch(error => console.error(`Error loading ${file}: `, error));
    },

    injectHtmlAsync: (selector, file) => {
        return new Promise((resolve, reject) => {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    const container = Utility.getElement(selector);
                    if (!container) {
                        throw new Error(`Container not found for selector: ${selector}`);
                    }
    
                    // Inject the HTML and resolve with the newly injected element
                    container.innerHTML = data;
                    const injectedElement = container.firstElementChild; 
                    resolve(injectedElement); // Resolve with the injected element
                })
                .catch(error => {
                    console.error(`Error loading ${file}: `, error);
                    reject(error);
                });
        });
    },

    // takes a selector and a file, fetches the file, and injects it as children of the element matching the selector
    // returns a promise that resolves with an array of the appended elements
    injectHtmlAsChildrenAsync: (selector, file) => {
        return new Promise((resolve, reject) => {
            fetch(file)
                .then(response => response.text())
                .then(data => {
                    const container = Utility.getElement(selector);
                    if (!container) {
                        throw new Error(`Container not found for selector: ${selector}`);
                    };
    
                    // Create a temporary container to parse the HTML
                    const tempDiv = document.createElement("div");
                    tempDiv.innerHTML = data;
    
                    // Append each child of the temporary container to the target container
                    const appendedElements = [];
                    while (tempDiv.firstChild) {
                        const appendedChild = tempDiv.firstChild;
                        container.appendChild(appendedChild);
                        appendedElements.push(appendedChild); // Collect appended elements
                    }
    
                    resolve(appendedElements); // Resolve with the appended elements
                })
                .catch(error => {
                    console.error(`Error loading ${file}: `, error);
                    reject(error);
                });
        });
    },

    injectHtmlMany: (selectorFilePairs) => {
        for (const [selector, file] of Object.entries(selectorFilePairs)) {
            Utility.injectHtml(selector, file);
        };
    },

    injectHtmlManyAsync: (selectorFilePairs) => {
        const promises = [];
        for (const [selector, file] of Object.entries(selectorFilePairs)) {
            const promise = Utility.injectHtmlAsync(selector, file);
            promises.push(promise);
        };
        return Promise.all(promises);
    },

    // helper script to inject a script into the document head
    injectScript: (src, callback) => {
        if (!document.querySelector(`script[src="${src}"]`)) {
            const script = document.createElement("script");
            script.src = src;
            script.onload = callback;
            document.head.appendChild(script);
        } else if (callback) {
            callback();
        }
    },

    // helper script to inject a stylesheet into the document head
    injectStylesheet: (href) => {
        if (!document.querySelector(`link[href="${href}"]`)) {
            const link = document.createElement("link");
            link.rel = "stylesheet";
            link.href = href;
            document.head.appendChild(link);
        }
    },

    initializeSlicknav: (selector, options) => {
        // Inject SlickNav stylesheet
        Utility.injectStylesheet("https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/slicknav.min.css");
    
        // Inject jQuery, then SlickNav, then jQuery Easing, and finally initialize SlickNav
        Utility.injectScript("https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.0/jquery.min.js", () => {
            Utility.injectScript("https://cdnjs.cloudflare.com/ajax/libs/SlickNav/1.0.10/jquery.slicknav.min.js", () => {
                Utility.injectScript("https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js", () => {
                    // Initialize SlickNav after all scripts are loaded
                    $(selector).slicknav(options);
                });
            });
        });
    },

    defaultSlickOps: {
        label: "Menu",
        prependTo: "header",
        allowParentLinks: true,
        closeOnClick: true,
        duration: 200,
        easingOpen: "easeOutQuint",
        easingClose: "easeInQuint",
        beforeOpen: () => {
            Utility.getElement(".header").scrollIntoView({ behavior: "smooth" });
        },
        afterClose: () => {
            Utility.getElement(".header").scrollIntoView({ behavior: "smooth" });
        },
    },

};