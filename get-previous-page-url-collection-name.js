      let collectionWrapB = document.querySelector("#previous-collection");
      let collectionLink = document.querySelector("#previous-collection a");
      let previousPageUrl = document.referrer;

      var collectionName = null;

      if (previousPageUrl.includes("collections/")) {
        collectionName = previousPageUrl.split("collections/")[1].split("?")[0].replace(/-/g, " ").charAt(0).toUpperCase().trim();
      }
      if(collectionName){
        collectionLink.href = previousPageUrl;
        collectionLink.textContent = collectionName;
      } else {
        collectionWrapB.parentElement.removeChild(collectionWrapB);
      }
