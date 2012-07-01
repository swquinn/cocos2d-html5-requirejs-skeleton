/*
 *
 */

var cc = cc = cc || {};
cc.config = appConfig || {};

//html5 selector method
cc.$ = function (x) {
    return document.querySelector(x);
};
cc.$new = function (x) {
    return document.createElement(x);
};

// ** The loader queue from which JS files are loaded.
cc.loadQueue = [];
cc.loadjs = function (module, filename) {
	if (filename === undefined) {
		filename = module;
	}

	if (cc.config.modules[module] !== undefined && cc.config.isDebug) {
		var moduleRef = cc.config.modules[module];
		filename = moduleRef['path'] + filename;
	}
	console.info('Loading JS: ' + filename);
    
	// ** Add the file to the queue
    var script = cc.$new('script');
    script.src = cc.config.baseUrl + filename;
	script.type = 'text/javascript';
    script.order = cc.loadQueue.length;
    cc.loadQueue.push(script);

	/* (non-JSDoc)
	 * Wire up the script's onload function to detect when the file has
	 * finished loading; if there is more to load, load it and put the
	 * next file on the head.
	 */
    script.onload = function () {
        if (this.order + 1 < cc.loadQueue.length) {
            cc.$('head').appendChild(cc.loadQueue[this.order + 1]);
        }
        else {
			cc.isReady = true;
			console.info('Cocos2D loaded.');
		}
    };
    if (script.order === 0)//if the first file to load, then we put it on the head
    {
        cc.$('head').appendChild(script);
    }
};

// ** Module alias
cc.config.modules['cocos2d'] = cc.config.modules['cocos2d-0.5.0-alpha2'];

cc.loadjs('cocos2d', 'cocos2d/platform/CCClass.js');
cc.loadjs('cocos2d', 'cocos2d/platform/CCCommon.js');
cc.loadjs('cocos2d', 'cocos2d/platform/platform.js');
cc.loadjs('cocos2d', 'cocos2d/platform/ZipUtils.js');
cc.loadjs('cocos2d', 'cocos2d/platform/base64.js');
cc.loadjs('cocos2d', 'cocos2d/platform/gzip.js');
cc.loadjs('cocos2d', 'cocos2d/platform/CCMacro.js');
cc.loadjs('cocos2d', 'cocos2d/platform/CCFileUtils.js');
cc.loadjs('cocos2d', 'cocos2d/platform/CCTypes.js');
cc.loadjs('cocos2d', 'cocos2d/cocoa/CCGeometry.js');
cc.loadjs('cocos2d', 'cocos2d/platform/CCConfig.js');
cc.loadjs('cocos2d', 'cocos2d/cocoa/CCSet.js');
cc.loadjs('cocos2d', 'cocos2d/cocoa/CCAffineTransform.js');
cc.loadjs('cocos2d', 'cocos2d/support/CCPointExtension.js');
cc.loadjs('cocos2d', 'cocos2d/base_nodes/CCNode.js');
cc.loadjs('cocos2d', 'cocos2d/base_nodes/CCAtlasNode.js');
cc.loadjs('cocos2d', 'cocos2d/textures/CCTexture2D.js');
cc.loadjs('cocos2d', 'cocos2d/textures/CCTextureCache.js');
cc.loadjs('cocos2d', 'cocos2d/textures/CCTextureAtlas.js');
cc.loadjs('cocos2d', 'cocos2d/misc_nodes/CCRenderTexture.js');
cc.loadjs('cocos2d', 'cocos2d/misc_nodes/CCProgressTimer.js');
cc.loadjs('cocos2d', 'cocos2d/effects/CCGrid.js');
cc.loadjs('cocos2d', 'cocos2d/effects/CCGrabber.js');
cc.loadjs('cocos2d', 'cocos2d/actions/CCAction.js');
cc.loadjs('cocos2d', 'cocos2d/actions/CCActionInterval.js');
cc.loadjs('cocos2d', 'cocos2d/actions/CCActionInstant.js');
cc.loadjs('cocos2d', 'cocos2d/actions/CCActionManager.js');
cc.loadjs('cocos2d', 'cocos2d/actions/CCActionProgressTimer.js');
cc.loadjs('cocos2d', 'cocos2d/actions/CCActionCamera.js');
cc.loadjs('cocos2d', 'cocos2d/actions/CCActionEase.js');
cc.loadjs('cocos2d', 'cocos2d/actions/CCActionGrid.js');
cc.loadjs('cocos2d', 'cocos2d/actions/CCActionTiledGrid.js');
cc.loadjs('cocos2d', 'cocos2d/actions/CCActionGrid.js');
cc.loadjs('cocos2d', 'cocos2d/layers_scenes_transitions_nodes/CCScene.js');
cc.loadjs('cocos2d', 'cocos2d/layers_scenes_transitions_nodes/CCLayer.js');
cc.loadjs('cocos2d', 'cocos2d/layers_scenes_transitions_nodes/CCTransition.js');
cc.loadjs('cocos2d', 'cocos2d/layers_scenes_transitions_nodes/CCTransitionRadial.js');
cc.loadjs('cocos2d', 'cocos2d/layers_scenes_transitions_nodes/CCTransitionPageTurn.js');
cc.loadjs('cocos2d', 'cocos2d/sprite_nodes/CCSprite.js');
cc.loadjs('cocos2d', 'cocos2d/sprite_nodes/CCAnimation.js');
cc.loadjs('cocos2d', 'cocos2d/sprite_nodes/CCAnimationCache.js');
cc.loadjs('cocos2d', 'cocos2d/sprite_nodes/CCSpriteFrame.js');
cc.loadjs('cocos2d', 'cocos2d/sprite_nodes/CCSpriteFrameCache.js');
cc.loadjs('cocos2d', 'cocos2d/sprite_nodes/CCSpriteBatchNode.js');
cc.loadjs('cocos2d', 'cocos2d/label_nodes/CCLabelAtlas.js');
cc.loadjs('cocos2d', 'cocos2d/label_nodes/CCLabelTTF.js');
cc.loadjs('cocos2d', 'cocos2d/label_nodes/CCLabelBMFont.js');
cc.loadjs('cocos2d', 'cocos2d/particle_nodes/CCParticleSystem.js');
cc.loadjs('cocos2d', 'cocos2d/particle_nodes/CCParticleSystemQuad.js');
cc.loadjs('cocos2d', 'cocos2d/particle_nodes/CCParticleSystemPoint.js');
cc.loadjs('cocos2d', 'cocos2d/particle_nodes/CCParticleExamples.js');
cc.loadjs('cocos2d', 'cocos2d/touch_dispatcher/CCTouchDelegateProtocol.js');
cc.loadjs('cocos2d', 'cocos2d/touch_dispatcher/CCTouchHandler.js');
cc.loadjs('cocos2d', 'cocos2d/touch_dispatcher/CCTouchDispatcher.js');
cc.loadjs('cocos2d', 'cocos2d/keypad_dispatcher/CCKeypadDelegate.js');
cc.loadjs('cocos2d', 'cocos2d/keypad_dispatcher/CCKeypadDispatcher.js');
cc.loadjs('cocos2d', 'cocos2d/text_input_node/CCIMEDispatcher.js');
cc.loadjs('cocos2d', 'cocos2d/text_input_node/CCTextFieldTTF.js');
cc.loadjs('cocos2d', 'cocos2d/CCDirector.js');
cc.loadjs('cocos2d', 'cocos2d/CCCamera.js');
cc.loadjs('cocos2d', 'cocos2d/CCScheduler.js');
cc.loadjs('cocos2d', 'cocos2d/CCLoader.js');
cc.loadjs('cocos2d', 'cocos2d/CCDrawingPrimitives.js');
cc.loadjs('cocos2d', 'cocos2d/platform/CCApplication.js');
cc.loadjs('cocos2d', 'cocos2d/platform/CCSAXParser.js');
cc.loadjs('cocos2d', 'cocos2d/platform/AppControl.js');

cc.loadjs('cocos2d', 'cocos2d/menu_nodes/CCMenuItem.js');
cc.loadjs('cocos2d', 'cocos2d/menu_nodes/CCMenu.js');

cc.loadjs('cocos2d', 'cocos2d/tileMap_parallax_nodes/CCTMXTiledMap.js');
cc.loadjs('cocos2d', 'cocos2d/tileMap_parallax_nodes/CCTMXXMLParser.js');
cc.loadjs('cocos2d', 'cocos2d/tileMap_parallax_nodes/CCTMXObjectGroup.js');
cc.loadjs('cocos2d', 'cocos2d/tileMap_parallax_nodes/CCTMXLayer.js');
cc.loadjs('cocos2d', 'cocos2d/tileMap_parallax_nodes/CCParallaxNode.js');

cc.loadjs('cocos2d', 'CocosDenshion/SimpleAudioEngine.js');
