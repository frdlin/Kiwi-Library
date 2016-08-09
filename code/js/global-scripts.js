// JavaScript Document
// IMAGE SWAPPER
$(document).ready( function()
{
   PEPS.rollover.init();
});
PEPS = {};

PEPS.rollover =
{
   init: function()
   {
      this.preload();
     
      $(".ro").hover(
         function () { $(this).attr( 'src', PEPS.rollover.newimage($(this).attr('src')) ); },
         function () { $(this).attr( 'src', PEPS.rollover.oldimage($(this).attr('src')) ); }
      );
   },

   preload: function()
   {
      $(window).bind('load', function() {
         $('.ro').each( function( key, elm ) { $('<img>').attr( 'src', PEPS.rollover.newimage( $(this).attr('src') ) ); });
      });
   },
   
   newimage: function( src )
   {
      return src.substring( 0, src.search(/(\.[a-z]+)$/) ) + '-o' + src.match(/(\.[a-z]+)$/)[0];
   },

   oldimage: function( src )
   {
      return src.replace(/-o\./, '.');
   }
};

// NETWORK POPUP
$(document).ready(function() {
	$("a#open_sites").click(function(){

			if($.browser.msie){
				var cssObj = {
				        backgroundImage: "none",
				        backgroundColor: "black",
				        filter: "alpha(opacity=80)"
				}

				$("div#sites_bg").css(cssObj).fadeIn('slow');
				$("div#sites_menu").fadeIn('slow');
				return false; 

			} else {

				$("div#sites_bg").fadeIn('slow');
				$("div#sites_menu").fadeIn('slow');
				return false;

			}
		});
		$("a#close_link").click(function(){
				$("div#sites_bg").fadeOut('slow');
				$("div#sites_menu").fadeOut('slow');
				return false; 
			});

			$("div#sites_bg").click(function(){
				$("div#sites_bg").fadeOut('slow');
				$("div#sites_menu").fadeOut('slow');
				return false; 
			});

		    var docHeight = $(document).height(); 
				$('div#sites_bg').css("height",docHeight);

				$('div#sites_menu div a').hover(function() {
					$(this).parent().addClass('hovered');
					}, function() {
					$(this).parent().removeClass('hovered');
					});
});

// IMAGE PRELOAD
;( function( $ ){
  $.preload = function(){
    var tmp = [], i = arguments.length;
    // reverse loop run faster
    for( ; i-- ; ) tmp.push( $( '<images/>' ).attr( 'src', arguments[ i ]));
  };
})( jQuery );