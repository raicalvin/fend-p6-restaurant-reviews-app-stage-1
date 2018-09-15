// Create cache
let CACHE_ID = "rest-review-v1";

// Files to cache
let filesToCache = [
  "/",
  "/css.styles.css",
  "/data.restaurants.json",
  "/js/dbhelper.js",
  "/js/main.js",
  "/js/restaurant_info.js",
  "/js/swregister.js",
  "/index.html",
  "/restaurant.html"
];

self.addEventListener("install", function(e) {
  // Perform install of sw
  e.waitUntil(
    cahches.open(CACHE_ID).then(function(cache) {
      console.log("Opened cache");
      return cache.addAll(filesToCache);
    })
  );
});
