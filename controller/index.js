// 导入config文件
const db = require( '../util/dbconfig' )

// async实现同步处理
async function login ( req, res ) {
	// let里的参数名要和外面传进来的参数名一致
	// let { username, password } = req.query
	let sql = 'select * from dormitory_admin'
	// await等待代码执行完再执行下一行代码，防止异步
	let data = await db.opreateDB( sql )
	res.send( data )
}
module.exports = {
	login
}