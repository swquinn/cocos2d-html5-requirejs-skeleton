/* (non-JSDoc)
 * 
 */
require(['require', 'cocos2d', 'Assets/App'],
	function(require, cocos2d, app) {
		console.debug('local', require);
		console.debug('local', cocos2d);
		console.debug('local', app);
		console.debug('global', cc);
		
		// **
		// Add Cocos2d HTML5 selector method that is apparently required, but
		// not part of the library's core. Weird.
		cc.$ = function (x) {
			return document.querySelector(x);
		};
		
		// **
		// Add Cocos2d new element operator that, like the HTML5 selector, is
		// apparently required but not baked in.
		cc.$new = function (x) {
			return document.createElement(x);
		};

		var HellowWorldApp = new app();
		console.debug(HellowWorldApp);
		HellowWorldApp.initialize();
	}
);