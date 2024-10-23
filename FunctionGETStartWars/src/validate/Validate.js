exports.validateId= (id) => {
    if (id == null ) {
        throw new Error('El campo id no puede ser nulo.');
    }
};


exports.validateType= (type) => {
    const validTypes = ['all', 'dynamoDB', 'SWAPI'];
    if (!validTypes.includes(type)) {
        throw new Error('BadType');
    }
};


