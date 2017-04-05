// Preloader Class
var Preloader = function( pics, options ) {
	var i, isloaded = 0;
	var _this = this;
	if ( typeof pics == 'string' ) pics = [ pics ];
	this.async = true;
	this.maxrequest = 0; 
	this.extension = '';
	this.folder = '';
	this.onload = function() {};
	//this.onprogress = function() {  };
	if ( typeof options == 'object' ) {
		for (i in options ) {
			this[ i ] = options[ i ];
		}
	}
	if ( !this.async ) this.maxrequest = 1;
	if ( !this.maxrequest ) this.maxrequest = pics.length;
	this.pics = [];
	
	var loadImages = function( i ) {
		
		_this.pics[i] = new Image();	
		_this.pics[i].src = _this.folder + pics[i] + _this.extension;
		_this.pics[i].onload = function() {
			try { _this.onprogress(); }
			catch(e) { }
			isloaded++;
			if ( isloaded == pics.length ) { 
				try { _this.onload(); } 
				catch(e) { console.log( e ); }
			}
			if ( isloaded+_this.maxrequest-1 < pics.length ) {
				loadImages( isloaded+_this.maxrequest-1 );
			}
		}
	}
	for ( i=0; i<this.maxrequest; i++ ) {
		loadImages(i);
	}
	
	this.progress = function() {
		return isloaded/pics.length*100;
	}
	
}