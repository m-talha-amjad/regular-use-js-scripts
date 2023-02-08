// • const observer = new MutationObserver: This creates a new MutationObserver instance and assigns it to the observer constant.
// • mutations =>: This is a callback function that will be called when a mutation is observed on the target. The mutations argument is an array of MutationRecord objects, each representing a mutation that has occurred on the target.
// • mutations.forEach(mutation =>: This line loops through each mutation in the mutations array.
// • if (mutation.addedNodes.length): This line checks if there are any added nodes in the current mutation.
// • mutation.addedNodes.forEach(node =>: This line loops through each added node in the current mutation.
// • if (node.nodeType === Node.ELEMENT_NODE): This line checks if the current node is an element node.
// • if (node.id === "zip_search"): This line checks if the id of the current node is equal to "zip_search".
// • node.innerHTML = "Submit": If both conditions are met, this line sets the innerHTML of the current node to "Submit".
let targetElement = document.getElementById("SpecificID");
if (targetElement) {
window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');

    const observer = new MutationObserver(mutations => {
    mutations.forEach(mutation => {
      if (mutation.addedNodes.length) {
        mutation.addedNodes.forEach(node => {
          console.log("dom changed");
          if (node.nodeType === Node.ELEMENT_NODE) {
            let zip_search = document.getElementById("zip_search");
            if(zip_search){
              zip_search.innerHTML = "Submit";
            }
            let postal_code = document.getElementById("postal_code");
            if(postal_code){
              postal_code.setAttribute("placeholder", "Enter your postal code");
            }
            if (node.id === "zip_search") {
              node.innerHTML = "Submit";
            }
          }
        });
      }
    });
  });
  
  observer.observe(targetElement, { childList: true, subtree: true });
});
}


// 1. observer.observe: This method starts observing the specified target for mutations (changes to its children).

// 2. document.getElementById("csShippingAppCode"): This method retrieves an element with the 
//    id of "csShippingAppCode". The getElementById method returns the first element with the specified id in the document.

// 3. { childList: true, subtree: true }: This object is the options object passed to the observe method. It specifies the type of mutations to observe.

//    childList: true: This option means that the observer will be triggered when a child node is added or removed from the target.
//    subtree: true: This option means that the observer will be triggered for changes to the target's descendants as well as the target itself.
// 

// So, in this line of code, the MutationObserver is set up to observe the element with the id of "csShippingAppCode", and it will
// be triggered whenever a child node is added or removed from the target or any of its descendants.
