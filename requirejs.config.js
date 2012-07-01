var require = {
	waitSeconds: 5,
	paths: {
		// ** Application
		'Assets': 'assets/js',
		
		// ** Vendor(s)
		'backbone': 'lib/backbone-0.9.2.min',
		'box2d': 'lib/box2dweb-2.1.a.3.min',
		'cocos2d': appConfig.isDebug
				? 'cocos2d' : 'lib/cocos2d-html5-canvas-0.5.0.alpha2.min',
		'domReady': 'lib/domReady-2.0.0',
		'jquery': 'lib/jquery-1.7.2.min',
		'underscore': 'lib/underscore-1.3.3.min'
	},

	/* (non-JSDoc)
	 * The shim allows us to wrap non-AMD modules in and expose them so that
	 * they can be used with AMD-style module definitions. The 'exports'
	 * property identifies the global variable that a package will be
	 * accessible under, e.g. jQuery is made accessible under the conventional
	 * '$' shorthand.
	 */
	shim: {
		'cocos2d': {
			exports: 'cc'
		},
		'box2d': {
			exports: 'Box2D'
		},
		'jquery': {
			exports: '$'
		},
		'underscore': {
			exports: '_'
		},
		'backbone': {
			deps: ['underscore', 'jquery'],
			exports: 'Backbone'
		}
	}
};
