const axios = require('axios');
const { API_KEY } = process.env;

const getDetail = async (id) => {
    let url = `https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`;
    let detail = [];
    try {
        let { data } = await axios.get(url);
        if (!data) {
            return 'API no funciona'        
        } else {
            detail.push({
                nombre: data.title,
                imagen: data.image,
                tipoPlato: data.dishTypes,
                tipoDieta: data.diets,
                resumen: data.summary,
                nivelDeComida: data.healthScore,
                pasoAPaso: (data.analyzedInstructions[0] &&
                    data.analyzedInstructions[0].steps 
                    ?
                    data.analyzedInstructions[0].steps.map(i=>i.step)
                    :
                    'No tiene pasos')
            })
            return detail
        }
    } catch (error) {
        console.log(error);
        return ['ID NO ENCONTRADO']
    }
}

module.exports = { getDetail };