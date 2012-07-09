/* (non-JSDoc)
 * The main application point of entry, processes the necessary dependencies
 * and loads up cocos2d based on a given manifest (based on the debug flag
 * in appConfig). Once loaded, the application waits on the 'cocos2d:ready'
 * event to load up the application.
 */
require(
	[
		'require',
		'backbone',
		'cocos2d!Data/' + (appConfig.isDebug ? 'cocos2d-dev.manifest' : 'cocos2d.manifest')
	],
	function(require, backbone, cocos2d) {
		Backbone.Events.on('cocos2d:ready', function() {
			require(['Assets/App'], function(app) {
				var HellowWorldApp = new app();
				HellowWorldApp.initialize();
			});
		});
	}
);