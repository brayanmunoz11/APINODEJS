const {validateId, validateType } = require('../../validate/Validate');

test("Test validateId true", async () => {
    expect(() => validateId(1)).not.toThrow();
});

test("Test validateId false", async () => {
    expect(() => validateId(null)).toThrow();
});


test("Test validateType true", async () => {
    expect(() => validateType("all")).not.toThrow();
});

test("Test validateType false", async () => {
    expect(() => validateType(null)).toThrow();
});


