if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./sw.js')
    .then(reg => console.log('Se ha Registrado el SW (ServiceWorker)', reg))
    .catch(err => console.warn('No se ha podido registrar el SW (ServiceWorker)', err))
}
