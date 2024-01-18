// mivoza.de
// Function to reload the debutify-addons.js file
function reloadDebutifyAddons() {
    // Remove the existing script element from the DOM
    var existingScript = document.getElementById('debutify-addons-script');
    if (existingScript) {
        existingScript.remove();
    }

    // Create a new script element
    var script = document.createElement('script');
    script.id = 'debutify-addons-script';
    script.src = 'path/to/your/debutify-addons.js';

    // Append the new script element to the head
    document.head.appendChild(script);
}

// Call this function whenever you need to reload the debutify-addons.js file
reloadDebutifyAddons();
