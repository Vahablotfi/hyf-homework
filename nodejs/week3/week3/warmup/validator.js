const Joi = require("joi");


const number = Joi.number();

const typeValidation = (req, res, next) => {
  const values = Object.values(req.query);

  values.forEach((value) => {
    const { error } = number.validate(value);
    if (error) {
      return res.status(400).send(`input for calculator must be number `);
    }
  });

  next();
};

module.exports = typeValidation;