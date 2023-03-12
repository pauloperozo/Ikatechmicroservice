const net = require('net')

const client = new net.Socket()
client.connect(4000, '127.0.0.1', () => {
	console.log('Connected')
	client.write('Gps Conectado')

	setInterval(()=>{
		client.write('355784092343722;7.9119868;-72.5041334;30')
	},7000)

})

client.on('data', (buff)=> {
	const data = buff.toString()	 
})

client.on('close', ()=> {
	console.log('Connection closed')
})