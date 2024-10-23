const getStarWarsPeopleById = require('../../db/DynamoDB');


test("Test getStarWarsPeopleById true", async () => {
    
    const resp = await getStarWarsPeopleById.getStarWarsPeopleById(1)


    expect(resp).not.toBeNull();

});




