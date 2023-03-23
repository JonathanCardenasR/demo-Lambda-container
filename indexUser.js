const controller = require('./src/controllers/user.controller');

module.exports.handler = async (e) => {
    const headers = {
        "Access-Control-Allow-Origin" : "*", 
        "Access-Control-Allow-Credentials" :  false,
        "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
    }

    let result 

    try{

        const event = e.queryStringParameters
        
        let req ={
            tipo:"lambda",
            body:{},
            params:{},
            query:{},
        }

        switch (event.key) {
            case 'login':

                req.body.username = event.username
                req.body.password = event.password
                result = await controller.login(req);
                break;    

            default:
                result = { mensaje: "Entro al default"}
                break;
        }

        result.log = event
      
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
        body: JSON.stringify(result),
      };

    }
  
}; 