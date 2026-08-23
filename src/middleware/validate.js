export const validate = (schema) => {
  return (req, res, next) => {
    const validatedData = schema.parse(req.body);

    req.body = validatedData;

    next();
  };
};
