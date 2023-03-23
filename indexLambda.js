const controller = require('./src/controllers/controller');

module.exports.handler = async (event) => {
    
    let result 

    try{

        //imitar estructura de un http normal
        const req ={
            tipo:"lambda",
            body:{},
            params:{},
            query:{},
        }

        switch (event.key) {

            case 'suma':

                req.query.numeroA = event.numeroA
                req.query.numeroB = event.numeroB
                result = await controller.realizarSumaDosNumeros(req);
                break;  
            
            case 'fecha':

                result = await controller.regresaFecha(req);
                break;    

            default:
                result = { mensaje: "Entro al default"}
                break;
        }

      
    return {
        statusCode: 200,
        headers:headers,
        body: JSON.stringify(result)
      };
    }
    catch (error) {

      return {
        statusCode: 400,
        headers:headers,
        body: JSON.stringify(error),
      };

    }
  
}; 