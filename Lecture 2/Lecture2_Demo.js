// Wait for the HTML document to be fully loaded before running the script
document.addEventListener('DOMContentLoaded', function() {

    // STEP 1: Select the elements we need to interact with from the DOM
    const toggleButton = document.querySelector('#toggleBtn');
    const bodyElement = document.querySelector('body');

    // STEP 2: Add an event listener to the button to listen for a 'click'
    toggleButton.addEventListener('click', function() {
        // This is the "callback function" - it runs ONLY when the button is clicked.

        // STEP 3: Define the logic to execute on click
        // Toggle the .dark-mode class on the <body> element
        bodyElement.classList.toggle('dark-mode');

        // Bonus: Change the button's text depending on the mode
        if (bodyElement.classList.contains('dark-mode')) {
            toggleButton.textContent = 'Turn Light On';
        } else {
            toggleButton.textContent = 'Turn Light Off';
        }
    });

});