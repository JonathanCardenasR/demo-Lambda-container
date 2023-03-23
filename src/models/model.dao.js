
const realizarSumaDosNumeros = async (numeroA, numeroB) => {
    
    try {
        
        const a = parseFloat(numeroA)
        const b = parseFloat(numeroB)

        const resultado = {
            suma: a + b
        }
         
        return resultado

    }
    catch (error) {
        console.log(error);
        return error;
    }

}

const regresaFecha = async () => {
    
    try {
        
        const fecha = "Esta es la nueva fecha " + new Date() 
        return fecha

    }
    catch (error) {
        console.log(error);
        return error;
    }

}

module.exports = {
    realizarSumaDosNumeros,
    regresaFecha
}