if (navigator.serviceWorker) {
  console.log("ServiceWorkers are supported");
  navigator.serviceWorker.register('sw.js', {
    scope: './'
  })
  .then(function(reg) {
    console.log("ServiceWorker registered with scope: ", reg.scope);
  })
  .catch(function(error) {
     console.log("Failed to register ServiceWorker", error);
  });
}

(function doesBrowserSupportNotifications() {
    var supported = true;
    if (!('showNotification' in ServiceWorkerRegistration.prototype)) {
        console.warn('Notifications aren\'t supported in Service Workers.');
        supported = false;
    }

    if (!Notification.requestPermission) {
        console.warn("Notifications are not supported by the browser");
        supported = false;
    }

    // Check if push messaging is supported  
    if (!('PushManager' in window)) {
        console.warn('Push messaging isn\'t supported.');
        supported = false;
    }

    if(supported) {
        console.log("Everthing is fine you can continue")
    }
})();

function requestNotificationPermission() {
    if (Notification.requestPermission) {
        Notification.requestPermission(function(result) {
            console.log("Notification permission : ", result);
        });
    } else {
        console.log("Notifications not supported by this browser.");
    }
}

function registerForPush() {
    if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.ready.then(function(serviceWorkerRegistration) {
            serviceWorkerRegistration.pushManager.subscribe({
                    userVisibleOnly: true
                })
                .then(function(subscription) {
                    console.log("Subscription for Push successful: ", subscription.endpoint);
                })
                .catch(function(error) {
                    console.log("Subscription for Push failed", error);
                });
        });
    } else {
        console.log("No active ServiceWorker");
    }
}

(function() {
 
    // Create input element for testing
    var input = document.createElement('input');
     
    // Create the supports object
    var supports = {};
     
    supports.autofocus   = 'autofocus' in input;
    supports.required    = 'required' in input;
    supports.placeholder = 'placeholder' in input;
 
    // Fallback for autofocus attribute
    if(!supports.autofocus) {
         
    }
     
    // Fallback for required attribute
    if(!supports.required) {
         
    }
 
    // Fallback for placeholder attribute
    if(!supports.placeholder) {
         
    }
     
    // Change text inside send button on submit
    var send = document.getElementById('contact-submit');
    if(send) {
        send.onclick = function () {
            this.innerHTML = '...Sending';
        }
    }
 
})();