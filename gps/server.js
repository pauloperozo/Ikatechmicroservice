const { Desconectado } = require("./events")

///////////////////////////////////////////////////////////////////////////
const net = require('net')
const gps = Array()
///////////////////////////////////////////////////////////////////////////
var server = net.createServer( (client) => {
	client.write('Conectado ...\r\n')

	client.on('data', (buff)=> {
		const data = buff.toString()
		console.log( data )	 
		const trama = data.split(";")
		!client.imei ? client.imei = trama[0]:null

	})
	
	client.on('close', ()=> {
	
		console.log( `Gps Desconectado ${client.imei}` )	 
		Desconectado({imei:client.imei})
	})
	

})

server.listen(4000, '127.0.0.1')
console.log("Servidor Listo")
///////////////////////////////////////////////////////////////////////////