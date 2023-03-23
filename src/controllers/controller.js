const dao = require('../models/model.dao');
const traductor = require('../lambda/response.translator')

const realizarSumaDosNumeros = async (req, res) => {

    const tipoServicio = req.tipo //agrego tipo

    const numeroA = req.query.numeroA;
    const numeroB = req.query.numeroB;
    
    try {

        const resultado = await dao.realizarSumaDosNumeros(numeroA,numeroB);

        return traductor.enviaResultadoCorrecto(resultado,tipoServicio,res)
    }
    catch (error) {
        return traductor.enviaResultadoError(error,tipoServicio,res)
    }
}

const regresaFecha = async (req, res) => {

    const tipoServicio = req.tipo //agrego tipo

    try {

        const resultado = await dao.regresaFecha();

        return traductor.enviaResultadoCorrecto(resultado,tipoServicio,res)
    }
    catch (error) {
        return traductor.enviaResultadoError(error,tipoServicio,res)
    }
}

module.exports = {
    realizarSumaDosNumeros,
    regresaFecha
}
