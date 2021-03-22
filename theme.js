/*
   ==================================================
   ; Title: Assignment 1.3 - Environment Setup
   ; Author: Alex Haefner
   ; Date: 15 Jan 2021
   ; Modified By: Alex Haefner
   ; Description: Switch the theme of index page.
   ;=================================================
*/
setDefaultTheme();


function setDefaultTheme() {
    // Variables are looking at local storage to determine theme
    const theme = localStorage.getItem("colorTheme") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    // Setting theme, iconMode, and iconText based on browser storage
    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}




function setDefaultTheme() {
    // Again, variables are looking at local storage to determine theme
    const theme = localStorage.getItem("colorTheme") || "light-theme";
    const iconMode = localStorage.getItem("iconMode") || "fa-toggle-off";
    const iconText = localStorage.getItem("iconText") || "Light Mode";

    document.body.classList.value = theme;
    document.getElementById("icon-mode").classList.add(iconMode);
    document.getElementById("icon-text").innerHTML = iconText;
}


function toggleMode(x) {
    let colorTheme = document.body.classList.value;
    let iconMode = document.getElementById("icon-mode").classList.value;

    //If body class is set to dark, switch to light
    if (document.body.classList.value === "dark-theme") {

        document.body.classList.value = "light-theme";

        document.getElementById("icon-mode").classList.remove("fa-toggle-on");
        document.getElementById("icon-mode").classList.add("fa-toggle-off");
        document.getElementById("icon-text").innerHTML = "Light Mode"
        localStorage.setItem('colorTheme', 'light-theme')
        localStorage.setItem('iconText', 'Light Mode')
        localStorage.setItem('iconMode', 'fa-toggle-off')
    } else {
        // Else, if the body is set to light-theme, switch to dark
        document.body.classList.value = "dark-theme";
        document.getElementById("icon-mode").classList.remove("fa-toggle-off");
        document.getElementById("icon-mode").classList.add("fa-toggle-on");
        document.getElementById("icon-text").innerHTML = "Dark Mode"
        localStorage.setItem('colorTheme', 'dark-theme')
        localStorage.setItem('iconText', 'Dark Mode')
        localStorage.setItem('iconMode', 'fa-toggle-on')
    }
}