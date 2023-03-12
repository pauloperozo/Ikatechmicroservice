/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const Procedure = module.exports
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Procedure.sendToDevice = async (id_usuario,token,payload)=>{

    admin.messaging().sendToDevice(token,payload).then( (response)=> {
                
                
        const obj = {
            id_usuario :id_usuario,
            metodo: "device",
            messageId :JSON.stringify(response),
            payload : JSON.stringify(payload)
        }

        console.log("Enviado Firabase divice !!! ",obj)

    }).catch((error)=> { 
        console.log(`Error Enviando Firebase Por Divice`)
    })

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Procedure.sendToTopic  = async (id_usuario,topico,payload)=>{

    admin.messaging().sendToTopic(topico,payload).then( (response)=> {
                        
        let obj = {
            id_usuario :id_usuario,
            metodo: "topic",
            messageId :JSON.stringify(response),
            payload : JSON.stringify(payload)
        }

        console.log("Enviado Firabase!!! ",obj)

    }).catch((error)=> { 
        console.log(`Error Enviando Firebase Por Topico`)
    })

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Procedure.subscribe = async (id_usuario,token,topico)=>{

    
    admin.messaging().subscribeToTopic(token, topico).then(function(response) {

        let obj = {
            id_usuario :id_usuario,
            token:token,
            topico:topico,
            accion: "subcribe"
        }

        console.log(`Subscribe  ${id_usuario},${topico}:`, obj)
    })
    .catch(function(error) {
        console.log('Error al suscribirce', error)
    })

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
Procedure.unsubscribe = async (id_usuario,token,topico)=>{

    admin.messaging().unsubscribeFromTopic(token, topico).then(function(response) {
      
        let obj = {
            id_usuario :id_usuario,
            token:token,
            topico:topico,
            accion: "unsubcribe"
        }

        console.log(`Unsubscribe  ${id_usuario},${topico}:`, obj)
        
    })
    .catch(function(error) {
        console.log('Error al desuscribirce', error)
    })

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////