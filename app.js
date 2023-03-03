const express = require( 'express' );
const cors = require( 'cors' )
const my = require( './controller/index' )

const app = express();
// // catch 404 and forward to error handler
// app.use( function ( req, res, next ) {
// 	next( createError( 404 ) );
// } );
// // error handler
// app.use( function ( err, req, res, next ) {
// 	// set locals, only providing error in development
// 	res.locals.message = err.message;
// 	res.locals.error = req.app.get( 'env' ) === 'development' ? err : {};

// 	// render the error page
// 	res.status( err.status || 500 );
// 	res.render( 'error' );
// } );

// 设置中间件cors,解决跨域问题
// cors使用步骤 1.安装（npm i cors）2.导入cors 3.app.use()使用
app.use( ( req, res, next ) => {
	res.setHeader( 'Access-Control-Allow-Origin', '*' )
	next()
} )
// 监听get请求
app.get( '/dormitoryAdmin/login', ( req, res ) => {
	let user = {
		id: 1,
		name: '梁萧',
		age: 18
	}
	// res.send( user )
	// res.send( my.login() )
} )

// 监听post请求
app.post( '/user', ( req, res ) => {
	res.send( '请求成功' )
} )

app.listen( 8181, () => {
	console.log( 'serve running at http://localhost:8181' );
} )
module.exports = app;
