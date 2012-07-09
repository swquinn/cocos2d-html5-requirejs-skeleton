/* Copyright (c) 2012, Sean W. Quinn
 *
 * Permission is hereby granted, free of charge, to any person obtaining a
 * copy of this software and associated documentation files (the "Software"),
 * to deal in the Software without restriction, including without limitation
 * the rights to use, copy, modify, merge, publish, distribute, sublicense,
 * and/or sell copies of the Software, and to permit persons to whom the 
 * Software is furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included
 * in all copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
 * OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
 * FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
 *  IN THE SOFTWARE.
 */

var cc = cc || {};

// TODO: Make the cocos2d plugin less reliant on `appConfig'
cc.config = appConfig || {};

cc.loadQueue = [];

define(['backbone', 'Plugins/manifest'], function(backbone, manifest) {
	
	/**
	 * Add Cocos2d HTML5 selector method that is apparently required, but
	 * not part of the library's core. Weird.
	 * @param {string} query
	 */
	cc.$ = function(query) {
		return document.querySelector(query);
	};
	
	/**
	 * Add Cocos2d new element operator that, like the HTML5 selector, is
	 * apparently required but not baked in.
	 * @param {string} element
	 */
	cc.$new = function(element) {
		return document.createElement(element);
	};
	
	/* (non-JSDoc)
	 * Loads JavaScript files for Cocos2D and alerts the executing
	 * script when it is finished loading them.
	 */
	cc.loadjs = function (filename, config) {
		if (filename === undefined) {
			throw new Exception("Filename cannot be null.");
		}

		var isVerbose = typeof(config['verbose']) === 'boolean' ? config['verbose'] : false;
		if (config !== undefined) {
			if (config['path'] !== undefined && typeof(config['path']) === 'string') {
				filename = config['path'] + filename;
			}
		}
		
		if (isVerbose) {
			console.info('Loading JS: ' + filename);
		}
		
		// ** Add the file to the queue
		var script = cc.$new('script');
		script.src = cc.config.baseUrl + filename;
		script.type = 'text/javascript';
		script.order = cc.loadQueue.length;
		cc.loadQueue.push(script);

		script.onload = function () {
			if (this.order + 1 < cc.loadQueue.length) {
				cc.$('head').appendChild(cc.loadQueue[this.order + 1]);
			}
			else {
				cc.isReady = true;
				console.info('Cocos2D loaded.');
				Backbone.Events.trigger('cocos2d:start', cc);
			}
		};
		if (script.order === 0)//if the first file to load, then we put it on the head
		{
			cc.$('head').appendChild(script);
		}
	};

	return {
		load: function(name, req, onLoad, config) {
			manifest.read(req.toUrl(name), function(data) {
				var _config = manifest.parse(data);
				var _manifest = _config.manifest;
				for (var i=0; i < _manifest.length; i++) {
					var file = _manifest[i];
					cc.loadjs(file, _config);
				}
				
				// **
				Backbone.Events.on('cocos2d:start', function(cocos2d) {
					onLoad(cocos2d);
					Backbone.Events.trigger('cocos2d:ready');
				});
			});
		}
	};
});