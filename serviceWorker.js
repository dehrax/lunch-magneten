this.addEventListener('install', function(event){
	event.waitUntil(
		caches.open('v1').then(function(cache){
			return cache.addAll([
			'index.html',
			'style.css',
			'script.js',
			'images/logo.svg' //Should probably cache all icons...
			]);
		})
	);
});