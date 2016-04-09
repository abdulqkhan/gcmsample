if ('serviceWorker' in navigator) {
        var p = document.getElementById('details');
        p.innerText = 'service worker supported';
        console.log('Service Worker is supported');
    
    navigator.serviceWorker.register('sw.js').then(function() {
        return navigator.serviceWorker.ready;

    }).then(function(reg) {
        console.log('Service Worker is ready :^)', reg);
        p.innerText = '</br>service worker ready';
        
        reg.pushManager.subscribe({userVisibleOnly: true}).then(function(sub) {

            var p = document.getElementById('details');
            p.innerHTML = '<p>' + sub.endpoint + '</p>';

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