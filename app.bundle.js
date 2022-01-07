/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,"vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!*************************************************!*\
  !*** (webpack)/hot sync nonrecursive ^\.\/log$ ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./log\": \"./node_modules/webpack/hot/log.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\treturn __webpack_require__(id);\n}\nfunction webpackContextResolve(req) {\n\tif(!__webpack_require__.o(map, req)) {\n\t\tvar e = new Error(\"Cannot find module '\" + req + \"'\");\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn map[req];\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/webpack/hot sync ^\\\\.\\\\/log$\";\n\n//# sourceURL=webpack:///(webpack)/hot_sync_nonrecursive_^\\.\\/log$?");

/***/ }),

/***/ "./src/helpers.ts":
/*!************************!*\
  !*** ./src/helpers.ts ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.getGameHeight = exports.getGameWidth = void 0;\r\nvar getGameWidth = function (scene) {\r\n    return scene.game.scale.width;\r\n};\r\nexports.getGameWidth = getGameWidth;\r\nvar getGameHeight = function (scene) {\r\n    return scene.game.scale.height;\r\n};\r\nexports.getGameHeight = getGameHeight;\r\n\n\n//# sourceURL=webpack:///./src/helpers.ts?");

/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.game = void 0;\r\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\r\nvar scenes_1 = __webpack_require__(/*! ./scenes */ \"./src/scenes/index.ts\");\r\nvar gameConfig = {\r\n    title: 'Sample',\r\n    type: Phaser.AUTO,\r\n    scale: {\r\n        // width: window.innerWidth,\r\n        // height: window.innerHeight,\r\n        width: 390,\r\n        height: 844,\r\n        autoCenter: Phaser.Scale.CENTER_BOTH,\r\n    },\r\n    scene: scenes_1.default,\r\n    physics: {\r\n        default: 'arcade',\r\n        arcade: {\r\n            debug: false,\r\n        },\r\n    },\r\n    parent: 'game',\r\n    backgroundColor: '#000000',\r\n};\r\nexports.game = new Phaser.Game(gameConfig);\r\nwindow.addEventListener('resize', function () {\r\n    exports.game.scale.refresh();\r\n});\r\n\n\n//# sourceURL=webpack:///./src/main.ts?");

/***/ }),

/***/ "./src/scenes/boot-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/boot-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.BootScene = void 0;\r\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/helpers.ts\");\r\nvar sceneConfig = {\r\n    active: false,\r\n    visible: false,\r\n    key: 'Boot',\r\n};\r\n/**\r\n * The initial scene that loads all necessary assets to the game and displays a loading bar.\r\n */\r\nvar BootScene = /** @class */ (function (_super) {\r\n    __extends(BootScene, _super);\r\n    function BootScene() {\r\n        return _super.call(this, sceneConfig) || this;\r\n    }\r\n    BootScene.prototype.preload = function () {\r\n        var _this = this;\r\n        var halfWidth = helpers_1.getGameWidth(this) * 0.5;\r\n        var halfHeight = helpers_1.getGameHeight(this) * 0.5;\r\n        var progressBarHeight = 100;\r\n        var progressBarWidth = 400;\r\n        var progressBarContainer = this.add.rectangle(halfWidth, halfHeight, progressBarWidth, progressBarHeight, 0x000000);\r\n        var progressBar = this.add.rectangle(halfWidth + 20 - progressBarContainer.width * 0.5, halfHeight, 10, progressBarHeight - 20, 0x888888);\r\n        var loadingText = this.add.text(halfWidth - 75, halfHeight - 100, 'Loading...').setFontSize(24);\r\n        var percentText = this.add.text(halfWidth - 25, halfHeight, '0%').setFontSize(24);\r\n        var assetText = this.add.text(halfWidth - 25, halfHeight + 100, '').setFontSize(24);\r\n        this.load.on('progress', function (value) {\r\n            progressBar.width = (progressBarWidth - 30) * value;\r\n            var percent = value * 100;\r\n            percentText.setText(percent + \"%\");\r\n        });\r\n        this.load.on('fileprogress', function (file) {\r\n            assetText.setText(file.key);\r\n        });\r\n        this.load.on('complete', function () {\r\n            loadingText.destroy();\r\n            percentText.destroy();\r\n            assetText.destroy();\r\n            progressBar.destroy();\r\n            progressBarContainer.destroy();\r\n            _this.scene.start('MainMenu');\r\n        });\r\n        this.loadAssets();\r\n    };\r\n    /**\r\n     * All assets that need to be loaded by the game (sprites, images, animations, tiles, music, etc)\r\n     * should be added to this method. Once loaded in, the loader will keep track of them, indepedent of which scene\r\n     * is currently active, so they can be accessed anywhere.\r\n     */\r\n    BootScene.prototype.loadAssets = function () {\r\n        // Load sample assets\r\n        // Source: Open Game Art\r\n        this.load.image('man', 'assets/sprites/character.png');\r\n        this.load.image('red_sphere', 'assets/sprites/red_sphere.png');\r\n    };\r\n    return BootScene;\r\n}(Phaser.Scene));\r\nexports.BootScene = BootScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/boot-scene.ts?");

/***/ }),

/***/ "./src/scenes/game-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/game-scene.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.GameScene = void 0;\r\nvar phaser_1 = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\r\nvar helpers_1 = __webpack_require__(/*! ../helpers */ \"./src/helpers.ts\");\r\nvar sceneConfig = {\r\n    active: false,\r\n    visible: false,\r\n    key: 'Game',\r\n};\r\nvar GameScene = /** @class */ (function (_super) {\r\n    __extends(GameScene, _super);\r\n    function GameScene() {\r\n        var _this = _super.call(this, sceneConfig) || this;\r\n        _this.speed = 200;\r\n        return _this;\r\n    }\r\n    GameScene.prototype.create = function () {\r\n        this.positions = this.make2dArray(5);\r\n        for (var i = 0; i < this.positions.length; i++) {\r\n            for (var p = 0; p < this.positions.length; p++) {\r\n                this.positions[i][p] = true;\r\n            }\r\n        }\r\n        this.cw = helpers_1.getGameWidth(this) / 5;\r\n        for (var i = 0; i < 3; i++) {\r\n            console.log('Spawning ' + i);\r\n            this.spawnTarget();\r\n        }\r\n        //  The score\r\n        this.scoreText = this.add.text(16, 16, 'Score: 0', { fontSize: '24px' });\r\n        this.score = 0;\r\n        //Timer\r\n        this.timeLeft = 30;\r\n        this.timeLeftText = this.add.text(helpers_1.getGameWidth(this) - 16, 16, 'Time: ' + this.timeLeft, { fontSize: '24px' }).setOrigin(1, 0);\r\n        this.timedEvent = this.time.addEvent({\r\n            delay: 1000,\r\n            callback: this.tickEvent,\r\n            callbackScope: this,\r\n            loop: true,\r\n        });\r\n    };\r\n    GameScene.prototype.update = function () { };\r\n    GameScene.prototype.hit = function (target) {\r\n        console.log('Spawning.');\r\n        target.setVisible(false);\r\n        this.spawnTarget();\r\n        this.score += 100;\r\n        this.scoreText.setText('Score: ' + this.score);\r\n        this.positions[target.gridX][target.gridY] = true;\r\n        target.destroy();\r\n    };\r\n    GameScene.prototype.placeAt = function (xx, yy, obj) {\r\n        //calculate the center of the cell\r\n        //by adding half of the height and width\r\n        //to the x and y of the coordinates\r\n        var x2 = this.cw * xx + this.cw / 2;\r\n        var y2 = this.cw * yy + this.cw / 2;\r\n        obj.x = x2;\r\n        obj.y = y2 + this.cw;\r\n    };\r\n    GameScene.prototype.make2dArray = function (len) {\r\n        var a = [];\r\n        while (a.push([]) < len)\r\n            ;\r\n        return a;\r\n    };\r\n    GameScene.prototype.spawnTarget = function () {\r\n        var _this = this;\r\n        var spawned = false;\r\n        var _loop_1 = function () {\r\n            var gridX = phaser_1.Math.Between(0, this_1.positions.length - 1);\r\n            var gridY = phaser_1.Math.Between(0, this_1.positions.length - 1);\r\n            if (this_1.isPositionAvailable(gridX, gridY)) {\r\n                this_1.positions[gridX][gridY] = false;\r\n                var target_1 = new GridTarget(this_1, 0, 0, gridX, gridY);\r\n                this_1.placeAt(gridX, gridY, target_1);\r\n                target_1.setInteractive({\r\n                    pixelPerfect: true,\r\n                });\r\n                target_1.displayWidth = helpers_1.getGameWidth(this_1) / 6; //set this to array length\r\n                target_1.scaleY = target_1.scaleX;\r\n                target_1.on('pointerdown', function () {\r\n                    _this.hit(target_1);\r\n                });\r\n                spawned = true;\r\n            }\r\n        };\r\n        var this_1 = this;\r\n        while (spawned === false) {\r\n            _loop_1();\r\n        }\r\n    };\r\n    GameScene.prototype.isPositionAvailable = function (x, y) {\r\n        if (this.positions[x][y] === true) {\r\n            console.log('Position found.');\r\n            return true;\r\n        }\r\n        else {\r\n            return false;\r\n        }\r\n    };\r\n    GameScene.prototype.tickEvent = function () {\r\n        this.timeLeft -= 1;\r\n        this.timeLeftText.setText('Time: ' + this.timeLeft);\r\n        if (this.timeLeft === 0) {\r\n            this.scene.start('MainMenu');\r\n        }\r\n    };\r\n    return GameScene;\r\n}(Phaser.Scene));\r\nexports.GameScene = GameScene;\r\nvar GridTarget = /** @class */ (function (_super) {\r\n    __extends(GridTarget, _super);\r\n    function GridTarget(scene, x, y, xx, yy) {\r\n        var _this = _super.call(this, scene, x, y, 'red_sphere') || this;\r\n        _this.gridX = xx;\r\n        _this.gridY = yy;\r\n        scene.add.existing(_this);\r\n        return _this;\r\n    }\r\n    return GridTarget;\r\n}(phaser_1.GameObjects.Sprite));\r\n\n\n//# sourceURL=webpack:///./src/scenes/game-scene.ts?");

/***/ }),

/***/ "./src/scenes/index.ts":
/*!*****************************!*\
  !*** ./src/scenes/index.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nvar main_menu_scene_1 = __webpack_require__(/*! ./main-menu-scene */ \"./src/scenes/main-menu-scene.ts\");\r\nvar boot_scene_1 = __webpack_require__(/*! ./boot-scene */ \"./src/scenes/boot-scene.ts\");\r\nvar game_scene_1 = __webpack_require__(/*! ./game-scene */ \"./src/scenes/game-scene.ts\");\r\nexports.default = [boot_scene_1.BootScene, main_menu_scene_1.MainMenuScene, game_scene_1.GameScene];\r\n\n\n//# sourceURL=webpack:///./src/scenes/index.ts?");

/***/ }),

/***/ "./src/scenes/main-menu-scene.ts":
/*!***************************************!*\
  !*** ./src/scenes/main-menu-scene.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MainMenuScene = void 0;\r\nvar menu_button_1 = __webpack_require__(/*! ../ui/menu-button */ \"./src/ui/menu-button.ts\");\r\nvar sceneConfig = {\r\n    active: false,\r\n    visible: false,\r\n    key: 'MainMenu',\r\n};\r\n/**\r\n * The initial scene that starts, shows the splash screens, and loads the necessary assets.\r\n */\r\nvar MainMenuScene = /** @class */ (function (_super) {\r\n    __extends(MainMenuScene, _super);\r\n    function MainMenuScene() {\r\n        return _super.call(this, sceneConfig) || this;\r\n    }\r\n    MainMenuScene.prototype.create = function () {\r\n        // this.add\r\n        //   .text(100, 50, 'This is a sample main menu. Click the \"Start\" button below to run your game.', {\r\n        //     color: '#FFFFFF',\r\n        //   })\r\n        //   .setFontSize(15);\r\n        var _this = this;\r\n        new menu_button_1.MenuButton(this, 100, 150, 'Start Game', function () {\r\n            _this.scene.start('Game');\r\n        });\r\n        // new MenuButton(this, 100, 250, 'Settings', () => console.log('settings button clicked'));\r\n        // new MenuButton(this, 100, 350, 'Help', () => console.log('help button clicked'));\r\n    };\r\n    return MainMenuScene;\r\n}(Phaser.Scene));\r\nexports.MainMenuScene = MainMenuScene;\r\n\n\n//# sourceURL=webpack:///./src/scenes/main-menu-scene.ts?");

/***/ }),

/***/ "./src/ui/menu-button.ts":
/*!*******************************!*\
  !*** ./src/ui/menu-button.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\r\nvar __extends = (this && this.__extends) || (function () {\r\n    var extendStatics = function (d, b) {\r\n        extendStatics = Object.setPrototypeOf ||\r\n            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||\r\n            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };\r\n        return extendStatics(d, b);\r\n    };\r\n    return function (d, b) {\r\n        extendStatics(d, b);\r\n        function __() { this.constructor = d; }\r\n        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());\r\n    };\r\n})();\r\nObject.defineProperty(exports, \"__esModule\", { value: true });\r\nexports.MenuButton = void 0;\r\nvar Phaser = __webpack_require__(/*! phaser */ \"./node_modules/phaser/dist/phaser.js\");\r\nvar padding = 10;\r\nvar minimumWidth = 200;\r\nvar minimumHeight = 50;\r\nvar MenuButton = /** @class */ (function (_super) {\r\n    __extends(MenuButton, _super);\r\n    function MenuButton(scene, x, y, text, onClick) {\r\n        var _this = _super.call(this, scene, x, y) || this;\r\n        scene.add.existing(_this);\r\n        _this.setOrigin(0, 0);\r\n        _this.label = scene.add\r\n            .text(x + padding, y + padding, text)\r\n            .setFontSize(18)\r\n            .setAlign('center');\r\n        var labelWidth = _this.label.width + padding;\r\n        var labelHeight = _this.label.height + padding;\r\n        _this.width = labelWidth >= minimumWidth ? labelWidth : minimumWidth;\r\n        _this.height = labelHeight >= minimumHeight ? labelHeight : minimumHeight;\r\n        _this.setInteractive({ useHandCursor: true })\r\n            .on('pointerover', _this.enterMenuButtonHoverState)\r\n            .on('pointerout', _this.enterMenuButtonRestState)\r\n            .on('pointerdown', _this.enterMenuButtonActiveState)\r\n            .on('pointerup', _this.enterMenuButtonHoverState);\r\n        if (onClick) {\r\n            _this.on('pointerup', onClick);\r\n        }\r\n        _this.enterMenuButtonRestState();\r\n        return _this;\r\n    }\r\n    MenuButton.prototype.enterMenuButtonHoverState = function () {\r\n        this.label.setColor('#000000');\r\n        this.setFillStyle(0x888888);\r\n    };\r\n    MenuButton.prototype.enterMenuButtonRestState = function () {\r\n        this.label.setColor('#FFFFFF');\r\n        this.setFillStyle(0x888888);\r\n    };\r\n    MenuButton.prototype.enterMenuButtonActiveState = function () {\r\n        this.label.setColor('#BBBBBB');\r\n        this.setFillStyle(0x444444);\r\n    };\r\n    return MenuButton;\r\n}(Phaser.GameObjects.Rectangle));\r\nexports.MenuButton = MenuButton;\r\n\n\n//# sourceURL=webpack:///./src/ui/menu-button.ts?");

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi (webpack)-dev-server/client?http://192.168.86.237:8080 ./src/main.ts ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! C:\\Anthic\\phaser_dev\\starter\\node_modules\\webpack-dev-server\\client\\index.js?http://192.168.86.237:8080 */\"./node_modules/webpack-dev-server/client/index.js?http://192.168.86.237:8080\");\nmodule.exports = __webpack_require__(/*! ./src/main.ts */\"./src/main.ts\");\n\n\n//# sourceURL=webpack:///multi_(webpack)-dev-server/client?");

/***/ })

/******/ });