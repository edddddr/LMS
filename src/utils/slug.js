export const generateSlug = (value) => {
  return value.toLowerCase().trim().replace(/\s+/g, "-");
};
