const {getStarWars, getStarWarsPeopleById } = require('../../handler');

test("Test Handler getStarWars SuccessFully", async () => {
    const event = {
        headers: {
            host: "localhost:3000",
            "X-Forwarded-Proto": 'http'
        }
        
    };

    const response = await getStarWars(event);

    const final = {
        statusCode: 200,
        body: JSON.stringify({
            message: "Rutas Disponibles",
            data:{
                "people": `http://localhost:3000/people/{id}`
            }
        })
    }

    expect(response).toEqual(final);
});


test("Test Handler getStarWarsPeopleById SuccessFully", async () => {
    const event = {
        pathParameters: {
            id: "1"
        },
        queryStringParameters: {
            type: "all"
        }
        
    };

    const response = await getStarWarsPeopleById(event);

    const final = {
        statusCode: 200,
        
    }

    expect(response.statusCode).toEqual(final.statusCode);
});




