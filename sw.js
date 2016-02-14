  var CACHE_NAME = "my_cache";
  var urlsToCache = [
    '/index.html',
    '/about.html',
    '/apps.html',
    '/contact.html',
    '/gutenweb.css'
  ];
  self.addEventListener('install', function(event) {
    event.waitUntil( 
      caches.open(CACHE_NAME)
        .then(function(cache) {
            console.log('Opened cache : ', cache);
            return cache.addAll(urlsToCache);
      })
    );
  });

self.addEventListener('activate', function(event) {
    event.waitUntil();
  });

self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.open(CACHE_NAME).then(function(cache) {
            return cache.match(event.request).then(function(response) {
                if (response) {
                    console.log("Cache Hit for : " + event.request.url);
                }

                var clonedRequest = event.request.clone();
                var fetchPromise;
                console.log("Cache Miss. Fetching for : " + event.request.url);

                //for requests that end with .json, in this case consider this to be
                //the request for the items
                if (event.request.url.endsWith(".json")) {
                    fetchPromise = fetch(clonedRequest).then(function(networkResponse) {
                            cache.put(clonedRequest, networkResponse.clone());
                            return networkResponse
                        })
                        .then(function(networkResponse) {
                            networkResponse.clone().json().then(function(data) {
                                self.clients.matchAll().then(function(all) {
                                    all.forEach(function(client) {
                                        client.postMessage({
                                            "command": "updateItems",
                                            "items": data.items
                                        });
                                    });
                                });
                            });
                            return networkResponse;
                        })
                        .catch(function() {
                            //offline.html code from before
                        })
                } else {
                  //for other requests
                    fetchPromise = fetch(clonedRequest).then(function(networkResponse) {
                            cache.put(clonedRequest, networkResponse.clone());
                            return networkResponse;
                        })
                        .catch(function() {
                            //offline.html code from before
                        });
                }

                return response || fetchPromise;
            })
        })
    );
});

var title = 'Yay a message.';
    var body = 'We have received a push message.';
    var icon = '/icon.png';
    var tag = 'simple-push-demo-notification-tag';

    event.waitUntil(
        self.registration.showNotification(title, {
            body: body,
            icon: icon,
            tag: tag
        })
    );