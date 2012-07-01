/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

/* (non-JSdoc)
 * Modified original HelloWorld sample from Cocos2D-HTML5 package to use
 * RequireJS.
 */
define(function(require, exports, module) {
	var cocos2d = require('cocos2d');
	var Helloworld = require('Assets/Helloworld');

	/**
	 * @brief    The cocos2d Application.
	 * The reason for implement as private inheritance is to hide some interface call by CCDirector.
	 */
	var appDelegate = cc.Application.extend({
		ctor:function () {
			this._super();
		},

		/**
		 * @brief    Implement for initialize OpenGL instance, set source path, etc...
		 */
		initInstance:function () {
			return true;
		},

		/**
		 * @brief    Implement CCDirector and CCScene init code here.
		 * @return true    Initialize success, app continue.
		 * @return false   Initialize failed, app terminate.
		 */
		applicationDidFinishLaunching:function () {
			// initialize director
			var director = cc.Director.sharedDirector();
			director.setDisplayFPS(true);
			director.setAnimationInterval(1.0 / 60);
			var scene = Helloworld.scene();
			director.runWithScene(scene);
			return true;
		},

		/**
		 * @brief  The function be called when the application enter background
		 * @param  the pointer of the application
		 */
		applicationDidEnterBackground:function () {
			cc.Director.sharedDirector().pause();
		},

		/**
		 * @brief  The function be called when the application enter foreground
		 * @param  the pointer of the application
		 */
		applicationWillEnterForeground:function () {
			cc.Director.sharedDirector().resume();
		}
	});
	return appDelegate;
});
