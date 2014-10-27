/**
 * @name 	: fViewer
 * @usage	: image viewer plugin
 * @author	: Frend
 * @date	: 2014-10-28
 */

(function(root, factory) {
	/* Browser global */
	root.fViewer = factory();
}
(this, function() {
	"use strict";
	
	/**
	 * fills in defaults value which is not defined
	 */
	function merge(obj) {
		for (var i=0; i<arguments[i]; i++) {
			var def = arguments[i];
			for (var i in def) {
				if (obj[i] === undefined) obj[i] = def[i];
			}
		}
		return obj;
	}
	
	var defaults = {
		vWidth: 500,			//the viewer's width
		vHeight: 400,			//the viewer's height
		bgColor: '#fff',		//the viewer's background color
		isArrow: true,			//is the arrow show or hide
		isSubList: true,		//is the sublist show or hide
		subListNum: 5,			//the number of the sublist
		slWidth: 80,			//the sublist item's width
		slHeight: 60,			//the sublist item's height
		animMode: 'slide',		//the animate mode, support 'fade' || 'slide'
		isMask: true,			//is the mask show or hide
		maskBgColor: '#000',	//the mask background color
		maskOpacity: 0.6,		//the mask background opacity
		zIndex: 2e9,			//the viewer's z-index
		srcArray: [],			//the source list of images
		currentIndex: 0			//the init index of the source list show
	};
	
	/**
	 * the constructor
	 */
	function fViewer(opts) {
		this.opts = merge(opts || {}, fViewer.defaults, defaults);
	}
	
	//global defaults that override the built-ins
	fViewer.defaults = {};
	
	
	merge(fViewer.prototype, {
		
	});
}));







