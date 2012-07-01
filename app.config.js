/*
 *
 */

var appConfig = {
	/* (non-JSDoc)
	 * The base URL, prepended to all files loaded via the loadjs() function.
	 */
	baseUrl: './',
	
	/* (non-JSDoc)
	 * Whether or not this script should attempt loading the production or
	 * development code.
	 */
	isDebug: false,
	
	/* (non-JSDoc)
	 * Whether or not to use require JS.
	 */
	useRequireJs: true,
	
	/* (non-JSDoc)
	 * The modules supported when loading 
	 */
	modules: {
		'cocos2d-0.5.0-alpha2': {
			version: '0.5.0-alpha2',
			path: 'lib/dev/cocos2d-html5-v0.5.0-alpha2/'
		}
	}
}
