const db = require( './util/dbconfig' )
db.opreateDB( 'select * from dormitory_admin', ( err, results ) => {
	if ( err ) return console.log( err.message );
	console.log( results );
} )