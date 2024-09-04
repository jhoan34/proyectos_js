// Accessing properties of the navigator object
/*
var appName = navigator.appName; // Deprecated, consider using navigator.userAgent instead
var appCodeName = navigator.appCodeName;
var appVersion = navigator.appVersion;

// Accessing properties related to network information
var connectionType = navigator.connection;

// Accessing properties related to geolocation
var geolocationAvailable = 'geolocation' in navigator;

// Accessing properties related to concurrent hardware
var hardwareConcurrency = navigator.hardwareConcurrency;

// Logging the values to the console
console.log('appName:', appName);
console.log('appCodeName:', appCodeName);
console.log('appVersion:', appVersion);
console.log('connectionType:', connectionType);
console.log('geolocationAvailable:', geolocationAvailable);
console.log('hardwareConcurrency:', hardwareConcurrency)
*/

///////////////////////////////////
// el cache sirve para almacenar datos para facilitar la eficiencias de las operaciones
// esa infomarcion de almacena con un tipo  de base de datos  en el navegador


caches.open("archivos").then(cache => {
    cache.add("main5.js")
    cache.addAll(["index.html", "main.js", "main2.js"]);

 
     cache.keys().then(keys => {
        console.log("Keys in the cache:", keys);
    
            // You can loop through the keys and do something with each one
        keys.forEach(key => {
                console.log("Key:", key.url);
        });
    });

    cache.match("index.html").then(res => {
        console.log(res)
    })

    
 
})


// Assuming you have a cache named "exampleCache"
caches.open("exampleCache").then(cache => {
    // Delete a specific entry from the cache
    cache.delete("exampleFile.txt").then(deleted => {
        if (deleted) {
            console.log("Successfully deleted exampleFile.txt from the cache.");
        } else {
            console.log("exampleFile.txt was not found in the cache.");
        }
    });
});

