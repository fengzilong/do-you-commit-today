chrome.cookies.get({
	url: 'https://github.com',
	name: 'dotcom_user'
}, function( cookie ) {
	if( !cookie ) {
		return;
	}

	var username = cookie.value;

	$.ajax({
		url: 'https://github.com/' + username,
		success: function( text ) {
			var content = $( text ).find( '#contributions-calendar svg' ).prop( 'outerHTML' );

			$( '#app' ).html( $( content ) );
		}
	});
});
