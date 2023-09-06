// Add a click event listener to the button
document.getElementById("join").addEventListener("click", function() {
    // Load content from another.html
    fetch("another.html")
        .then(response => response.text())
        .then(data => {
            // Create a new window/tab and write the content to it
            const newWindow = window.open();
            newWindow.document.open();
            newWindow.document.write(data);
            newWindow.document.close();
        })
        .catch(error => {
            console.error("Error loading content:", error);
        });
});



// Add a click event listener to the button
document.getElementById("basicPlan").addEventListener("click", function() {
    // Load content from another.html
    fetch("BasicPlan.html")
        .then(response => response.text())
        .then(data => {
            // Create a new window/tab and write the content to it
            const newWindow = window.open();
            newWindow.document.open();
            newWindow.document.write(data);
            newWindow.document.close();
        })
        .catch(error => {
            console.error("Error loading content:", error);
        });
});





// Add a click event listener to the button
document.getElementById("weekly").addEventListener("click", function() {
    // Load content from another.html
    fetch("weekly.html")
        .then(response => response.text())
        .then(data => {
            // Create a new window/tab and write the content to it
            const newWindow = window.open();
            newWindow.document.open();
            newWindow.document.write(data);
            newWindow.document.close();
        })
        .catch(error => {
            console.error("Error loading content:", error);
        });
});



// Add a click event listener to the button
document.getElementById("monthly").addEventListener("click", function() {
    // Load content from another.html
    fetch("monthly.html")
        .then(response => response.text())
        .then(data => {
            // Create a new window/tab and write the content to it
            const newWindow = window.open();
            newWindow.document.open();
            newWindow.document.write(data);
            newWindow.document.close();
        })
        .catch(error => {
            console.error("Error loading content:", error);
        });
});