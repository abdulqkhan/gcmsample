if ('serviceWorker' in navigator) {
        var p = document.getElementById('details');
        p.innerText = 'service worker supported';
        console.log('Service Worker is supported');
    
    navigator.serviceWorker.register('sw.js').then(function() {
        return navigator.serviceWorker.ready;

    }).then(function(reg) {
        console.log('Service Worker is ready :^)', reg);
        
        reg.pushManager.subscribe({userVisibleOnly: true}).then(function(sub) {

            var p = document.getElementById('details');
            p.innerText = sub.endpoint;

            console.log('endpoint:', sub.endpoint);
        });
    }).catch(function(error) {
        console.log('Service Worker error :^(', error);
    });
}
else {
    var p = document.getElementById('details');
        p.innerText = 'service worker supported';
        console.log('Service Worker is supported');
}