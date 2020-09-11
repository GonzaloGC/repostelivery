/* 
install : Se utiliza para descargar y guardar archivos

activate : Se utiliza para mantener actualizado el repositorio de archivos que inicializamos en install, podemos borrar archivos que no necesitemos o guardar nuevos

fetch : Se utliza para retornar archivos que el usuario necesita
*/

const CACHE_NAME = 'STORIES_CACHE-v1';

self.addEventListener('install', function(){
    // Guarda archivos iniciales

    caches.open(CACHE_NAME).then(function(cache){
        cache.addAll(['/index.html']);
    })
});