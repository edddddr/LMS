export const getPagination = (query) => {
  let page = Number.parseInt(query.page) || 1;
  let limit = Number.parseInt(query.limit) || 10;

  if (page < 1) {
    page = 1;
  }

  if (limit < 1 || limit > 100) {
    limit = 10;
  }

  return { page, limit };
};
