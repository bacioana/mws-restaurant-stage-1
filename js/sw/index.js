
self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open('restaurantReviewStaticV1').then(function(cache) {
			return cache.addAll([
				'/',
				'/css/responsive.css',
				'/css/styles.css',
				'/css/restaurantResponsive.css',
				'/img/1.jpg',
				'/img/2.jpg',
				'/img/3.jpg',
				'/img/4.jpg',
				'/img/5.jpg',
				'/img/6.jpg',
				'/img/7.jpg',
				'/img/8.jpg',
				'/img/9.jpg',
				'/img/10.jpg',
				'/js/dbhelper.js',
				'/js/main.js',
				'/js/restaurant_info.js',
				' https://maps.googleapis.com/maps/api/js/ViewportInfoService.GetViewportInfo?1m6&1m2&1d40.55965355640603&2d-74.17722630138718&2m2&1d40.88229899141979&2d-73.79213336282237&2u12&4sro-RO&5e0&6sm%40421000000&7b0&8e0&callback=_xdc_._cmjpkf&token'
			]);
		})
	);
});

self.addEventListener('fetch', function(event) {
	event.respondWith(
		caches.match(event.request).then(function(response) {
			if (response) return response;
			return fetch(event.request);
		})
	);
});