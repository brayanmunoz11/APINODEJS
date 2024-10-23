const AWS = require('aws-sdk');

AWS.config.update({
    region: 'us-east-1' 
});

const dynamoDb = new AWS.DynamoDB.DocumentClient();



exports.insertStarWarsPeople = async (data) => {
    try {
        const params = {
            TableName: 'StarWarsPeople',
            Item: {
                id: data.id.toString(),
                nombre: data.name, 
                altura: data.height,
                masa: data.mass,
                color_cabello: data.hair_color, 
                color_piel: data.skin_color, 
                color_ojos: data.eye_color,  
                anio_nacimiento: data.birth_year || null,
                genero: data.gender,  
                planeta_de_origen: data.homeworld || null, 
                peliculas: data.films || [], 
                especies: data.species || [], 
                vehiculos: data.vehicles || [], 
                naves_estelares: data.starships || [],
                creado: new Date().toISOString(), 
                editado: new Date().toISOString(),
                url: data.url || null 
            },
        };

    
        await dynamoDb.put(params).promise();
        return true;
    } catch (error) {
        console.error('Error al insertar en DynamoDB:', error);
        return false; 
    }
};
