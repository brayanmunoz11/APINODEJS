const validateRequestBody = require('../../validate/validate');

test("Test Validate true", async () => {
    const body = {
        id: 3,
        name: "R2-D2",
        height: "96",
        mass: "32",
        hair_color: "n/a",
        skin_color: "white, blue",
        eye_color: "red",
        birth_year: "33BBY",
        gender: "n/a",
        homeworld: "https://swapi.dev/api/planets/8/",
        films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        species: ["https://swapi.dev/api/species/2/"],
        vehicles: [],
        starships: [],
        created: "2014-12-10T15:11:50.376000Z",
        edited: "2014-12-20T21:17:50.311000Z",
        url: "https://swapi.dev/api/people/3/"
    }


    expect(() => validateRequestBody.validateRequestBody(body)).not.toThrow();

});

test("Test Validate false", async () => {
    const body = {
        
        homeworld: "https://swapi.dev/api/planets/8/",
        films: [
            "https://swapi.dev/api/films/1/",
            "https://swapi.dev/api/films/2/",
            "https://swapi.dev/api/films/3/",
            "https://swapi.dev/api/films/4/",
            "https://swapi.dev/api/films/5/",
            "https://swapi.dev/api/films/6/"
        ],
        species: ["https://swapi.dev/api/species/2/"],
       
    }


    expect(() => validateRequestBody.validateRequestBody(body)).toThrow();

});


