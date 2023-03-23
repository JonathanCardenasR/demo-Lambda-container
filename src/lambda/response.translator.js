const resultadoPosi = (resultado,tipo,res) =>{
    
    if(tipo =='lambda'){

        return resultado

    }else {
        return res.status(200).json(resultado);
    }

}

const resultadoNega= (resultado,tipo,res) =>{

    if(tipo =='lambda'){
        return resultado
    }else {
        return res.status(400).json(resultado)
    }

}

module.exports = {
    resultadoNega,
    resultadoPosi
}