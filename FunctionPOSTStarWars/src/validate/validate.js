exports.validateRequestBody = (data) => {
    if (data.id == null || typeof data.id !== 'number') {
        throw new Error('El campo id debe ser un número y no puede ser nulo.');
    }

    const requiredFields = ['name', 'height', 'mass', 'hair_color', 'skin_color', 'eye_color', 'birth_year', 'gender', 'homeworld', 'films', 'species', 'vehicles', 'starships'];

    for (const field of requiredFields) {
        if (data[field] == null) {
            throw new Error(`El campo ${field} no puede ser nulo.`);
        }
    }
};