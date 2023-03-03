// 导入数据库
const mysql = require( 'mysql2' )

// 链接数据库的配置信息
const config = {
	// MySQL的主机位置
	host: 'localhost',
	// 端口号
	port: '3306',
	// MySQL的用户名
	user: 'root',
	// root的密码
	password: '2014shiyun',
	// 数据库的名字
	database: 'dormitory'
}

// 暴露接口
module.exports = {
	opreateDB: function ( sql, sqlArr ) {
		return new Promise( ( resolve, reject ) => {
			// 连接数据库
			let pool = mysql.createPool( config )
			pool.getConnection( ( err, conn ) => {
				if ( err ) reject( ( err ) )
				conn.query( sql, sqlArr, ( err, data ) => {
					if ( err ) reject( err )
					else {
						resolve( data )
					}
					// 销毁链接
					conn.destroy()
				} )
			} )
		} ).catch( e => {
			// 捕捉错误信息
			console.log( e );
		} )
	}
}