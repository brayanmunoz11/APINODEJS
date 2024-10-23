const AWS = require('aws-sdk');

const dynamoDb = new AWS.DynamoDB.DocumentClient();


exports.getStarWarsPeopleById = async (id) => {
    try {
        const params = {
            TableName: 'StarWarsPeople',
            Key: {
                id: id.toString(), 
            },
        };
    
        const result = await dynamoDb.get(params).promise();
        return result.Item; 
    } catch (error) {
        console.error('Error al obtener datos de DynamoDB:', error);
        throw new Error('Error al obtener datos');
    }
};
