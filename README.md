Cocos2D-HTML5 and RequireJS Integration Skeleton
=============

This is a skeleton project attempting to integrate both [Cocos2D-html5][1] and [RequireJS][2]. Hopefully it will prove to be a useful resource and save at least one person some time and effort should they decide to try and integrate the two libraries.

Debug vs. Non-Debug Mode for Cocos2d-html5
-------------

Cocos2d supports either a minified library or referencing the individual source files (I'm going to refer to the latter as _debug_ mode, as that seems to be the nomenclature in the cocos2d files). This skeleton is based on the Helloworld example found in the Cocos2d-html5 package, and when not run in debug mode, it seems to run correctly.

However as of today (July 1st, 2012) running in debug mode causes an exception because the Cocos2d dependencies aren't loaded by the time the `App`, `AppDelegate`, and `Helloworld` modules are loaded. I've put out a call for help in understanding how I can make this work with RequireJS while in debug mode, and hopefully I can find a resolution, because nobody likes trying to track down an error in minified code!

**UPDATE (July 8th):** Cocos2d now loads using a loader plugin pattern (see more here: [plugins][3]). It relies on a manifest file, in JSON, that will be parsed to provide insight on what files should be loaded using the plugin. Once everything is loaded, using Backbone, an event is published and it subscribers react. This allows us to delay application initialization until all of Cocos2D is ready to be used. Both production and development code works. Please see `assets/data/cocos2d.manifest` and `assets/data/cocos2d-dev.manifest` for manifest files.

Toggling Debug Mode On-and-Off
-------------

In order to toggle debug mode on or off, simply go into the `app.config.js` file and set the property `isDebug` appropriately (`true` for **on**, `false` for **off**).

[1]: http://www.cocos2d-x.org "Cocos2d-html5"
[2]: http://www.requirejs.org "RequireJS"