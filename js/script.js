var colors = [ "0F0", "00F", "FFF", "F0F", "F00", "FF0", "00FF", "000" ]; 
function reload() {
	$( 'body' ).css( "background", "#" + colors[0]);
	$( '.gui-container div' ).addClass( "hidden");
	colors.push(colors.shift());
}
function reset() {
	$( 'body' ).css( "background", "#fff");
	$( '.gui-container div' ).removeClass( "hidden");
}
$(document).keydown(function(e){
    var keycode = window.event ? window.event.keyCode : e.which;
	if(keycode == 27) {
		reset();
	} else if (keycode == 122) {
		
	} else {
		reload(); 
	}
});
$(document).on("click touchstart", "html", function () {
    reload(); 
});
$(document).bind("contextmenu", function (event) {
    event.preventDefault();
    reset();
});