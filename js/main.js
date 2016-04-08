if ('serviceWorker' in navigator) {
    console.log('Service Worker is supported');
    navigator.serviceWorker.register('sw.js').then(function(reg) {
        console.log(':Register:^)', reg);
        // TODO
    }).catch(function(err) {
        console.log(':error^(', err);
    });
}