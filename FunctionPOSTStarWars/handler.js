const { insertStarWarsPeople } = require("./src/db/DynamoDB");
const { validateRequestBody } = require ("./src/validate/validate");

exports.createPeople = async (event) => {
  try {
    const requestBody = JSON.parse(event.body);
    validateRequestBody(requestBody)
    const isInsert = await insertStarWarsPeople(requestBody);

    if (isInsert) {
      return {
        statusCode: 201,
        body: JSON.stringify({ message: "Persona creada exitosamente" }),
      };
    } else {
      return {
        statusCode: 400,
        body: JSON.stringify({ message: "Error al crear la persona" }),
      };
    }
  } catch (error) {
    console.log("ERROR: ", error)
    return {
      statusCode: 500,
      body: error.message,
    };
  }
};
