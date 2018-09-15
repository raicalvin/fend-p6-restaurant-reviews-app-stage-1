if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register("/sw.js").then(
      function(reg) {
        console.log("ServiceWorker registered successfully.");
      },
      function(err) {
        console.log("ServiceWorker failed registration.");
      }
    );
  });
}
