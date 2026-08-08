export const getPagination = (query) => {
    
    let page = Number(query.page) || 1
    let limit = Number(query.limit) || 10

    if(page < 1 ){
        page = 1;
    }


    if (limit < 1 || limit > 100) {
        limit = 10;
    }

    return {page, limit}
}