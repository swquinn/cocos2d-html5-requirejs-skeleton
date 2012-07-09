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

/* (non-JSDoc)
 * Defines a new module, reliant on the <tt>text</tt> module by James Burke
 * for reading and parsing manifest files. A manifest file is a JSON file
 * identifying a selection of JavaScript files that need to be loaded
 * asynchronously, but do not necessarily meet the AMD standards.
 */
define(['text'], function(text) {

	/**
	 * @author Sean W. Quinn
	 * @since 1.0
	 */
	manifest = {
		
		load: function(name, req, onLoad, config) {
			var _this = this;
			text.get(req.toUrl(name), function(data) {
				onLoad(_this.parse(data));
			});
		},
		
		/**
		 * Alias for text.get().
		 * @param {string} url
		 * @param {function} callback
		 * @type undefined
		 */
        read: function (url, callback) {
			text.get(url, callback);
        },
		
		/**
		 * @param {string} stream
		 * @type object
		 */
		parse: function(stream) {
			try {
				if (typeof(JSON) !== 'undefined' && typeof(JSON.parse) === 'function') {
					return JSON.parse(stream);
				}
			}
			catch (ex) {
				console.warn('Unable to parse using JSON.parse(); falling back to eval(). Failed because: ' + ex);
			}
			return eval('(' + stream + ')');
		}
	};
	return manifest;
});