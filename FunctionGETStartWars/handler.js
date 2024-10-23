const axios = require('axios');
const { getStarWarsPeopleById } = require("./src/db/DynamoDB");
const { validateId, validateType } = require ("./src/validate/Validate");


exports.getStarWars = async (event) => {
  const host = event.headers.host;
  const protocol = event.headers['X-Forwarded-Proto'] || 'https';
  const baseUrl = `${protocol}://${host}`;

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Rutas Disponibles",
      data: {
        "people": `${baseUrl}/people/{id}`,
        // "planets": `${baseUrl}/planets/`,
        // "films": `${baseUrl}/films/`,
        // "species": `${baseUrl}/species/`,
        // "vehicles": `${baseUrl}/vehicles/`,
        // "starships": `${baseUrl}/starships/`
      },
    }),
  };
};

exports.getStarWarsPeopleById = async (event) => {
  try {
    const id = event.pathParameters.id
    const type = event.queryStringParameters?.type; 
    //VALIDATE
    validateId(id)
    validateType(type)

    let body = null
    let swapiResponse = null
    let dataDB = null

    switch (type) {
      case 'all':
          swapiResponse = await axios.get(`https://swapi.dev/api/people/${id}`);
          dataDB = await getStarWarsPeopleById(id);
          body = {
            dataSWAPI: swapiResponse.data,
            dataDynamoDB: dataDB,
          };
          break;
        case 'SWAPI':
          swapiResponse = await axios.get(`https://swapi.dev/api/people/${id}`);
          body = {
            dataSWAPI: swapiResponse.data,
          };
          break;

        case 'dynamoDB':
          dataDB = await getStarWarsPeopleById(id);
          body = {
            dataDynamoDB: dataDB,
          };
          break;

        default:
          return {
            statusCode: 400,
            body: JSON.stringify({
              message: "Error: Tipo no válido.",
            }),
          };
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify(body),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
      }),
    };
  }
};

