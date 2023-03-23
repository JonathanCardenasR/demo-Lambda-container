const dao = require('../models/model.dao');

const realizarSumaDosNumeros = async (req, res) => {
    try {

        const numeroA = req.query.numeroA;
        const numeroB = req.query.numeroB;

        const resultado = await dao.realizarSumaDosNumeros(numeroA,numeroB);

        return res.status(200).json(resultado);
    }
    catch (error) {
        return res.status(200).json(error);
    }
}

const regresaFecha = async (req, res) => {
    try {

        const resultado = await dao.regresaFecha();

        return res.status(200).json(resultado);
    }
    catch (error) {
        return res.status(200).json(error);
    }
}

module.exports = {
    realizarSumaDosNumeros,
    regresaFecha
}
