const enviaResultadoCorrecto = (resultado,tipo,res) =>{
    
    if(tipo =='lambda'){

        return resultado

    }else {
        return res.status(200).json(resultado);
    }

}

const enviaResultadoError = (error,tipo,res) =>{

    if(tipo =='lambda'){
        return resultado
    }else {
        return res.status(400).json(error)
    }

}

module.exports = {
    enviaResultadoCorrecto,
    enviaResultadoError
}